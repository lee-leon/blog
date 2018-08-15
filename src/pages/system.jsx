import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import ItemBlog from '../components/ItemBlog';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Base = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
`;

const System = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Helmet title={`System Design | ${config.siteTitle}`} />
    <Header title="Distributed System Design">
      Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
    </Header>
    <Container type="big">
      <Base>
        {edges.map(system => (
          <ItemBlog
            key={system.node.frontmatter.title}
            path={system.node.fields.slug}
            cover={system.node.frontmatter.cover.childImageSharp.fluid}
            title={system.node.frontmatter.title}
            date={system.node.frontmatter.date}
            category={system.node.frontmatter.category}
            timeToRead={system.node.timeToRead}
            excerpt={system.node.excerpt}
            tags={system.node.frontmatter.tags}
          />
        ))}
      </Base>
    </Container>
    <Footer />
  </Layout>
);

export default System;

System.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query SystemQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "system" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY", locale: "en")
            category
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 900, quality: 85, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
