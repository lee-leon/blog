const path = require('path');
const _ = require('lodash');

const pathPrefixes = {
  algorithm: '/algorithm',
  hci: '/hci',
  system: '/system',
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const pathPrefix = pathPrefixes[fileNode.sourceInstanceName];
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'customer')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.customer)}-${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'sourceInstanceName', value: fileNode.sourceInstanceName });
    createNodeField({ node, name: 'slug', value: `${pathPrefix}${slug}` });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const algorithmPage = path.resolve('src/templates/algorithm.jsx');
    const systemPage = path.resolve('src/templates/system.jsx');
    const hciPage = path.resolve('src/templates/hci.jsx');
    const tagPage = path.resolve('src/templates/tag.jsx');
    const categoryPage = path.resolve('src/templates/category.jsx');
    resolve(
      graphql(`
        {
          algorithms: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "algorithm" } } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                  category
                  title
                  cover {
                    childImageSharp {
                      resize(width: 600) {
                        src
                      }
                    }
                  }
                }
                fields {
                  slug
                }
              }
            }
          }
          systems: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "system" } } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                  category
                  title
                  cover {
                    childImageSharp {
                      resize(width: 600) {
                        src
                      }
                    }
                  }
                }
                fields {
                  slug
                }
              }
            }
          }
          hcis: allMarkdownRemark(
            filter: { fields: { sourceInstanceName: { eq: "hci" } } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  cover {
                    childImageSharp {
                      resize(width: 600) {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const tagSet = new Set();
        const categorySet = new Set();
        const algorithmsList = result.data.algorithms.edges;
        const systemsList = result.data.systems.edges;
        const hcisList = result.data.hcis.edges;

        algorithmsList.forEach(algorithm => {
          if (algorithm.node.frontmatter.tags) {
            algorithm.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (algorithm.node.frontmatter.category) {
            categorySet.add(algorithm.node.frontmatter.category);
          }

          const filtered = _.filter(algorithmsList, input => input.node.fields.slug !== algorithm.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: algorithm.node.fields.slug,
            component: algorithmPage,
            context: {
              slug: algorithm.node.fields.slug,
              left,
              right,
            },
          });
        });
        systemsList.forEach(system => {
          if (system.node.frontmatter.tags) {
            system.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag);
            });
          }

          if (system.node.frontmatter.category) {
            categorySet.add(system.node.frontmatter.category);
          }

          const filtered = _.filter(systemsList, input => input.node.fields.slug !== system.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: system.node.fields.slug,
            component: systemPage,
            context: {
              slug: system.node.fields.slug,
              left,
              right,
            },
          });
        });
        hcisList.forEach(hci => {
          const filtered = _.filter(hcisList, input => input.node.fields.slug !== hci.node.fields.slug);
          const sample = _.sampleSize(filtered, 2);
          const left = sample[0].node;
          const right = sample[1].node;

          createPage({
            path: hci.node.fields.slug,
            component: hciPage,
            context: {
              slug: hci.node.fields.slug,
              left,
              right,
            },
          });
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag,
            },
          });
        });

        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category,
            },
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
