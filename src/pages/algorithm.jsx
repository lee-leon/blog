import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet"
import styled from '@emotion/styled'
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

const Algorithm = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Helmet title={`Algorithm | ${config.siteTitle}`} />
    <Header title="Advanced Data Structure & Algorithms" />
    <Container type="big">
      <Base>
        {edges.map(algorithm => (
          <ItemBlog
            key={algorithm.node.frontmatter.title}
            path={algorithm.node.fields.slug}
            cover={algorithm.node.frontmatter.cover.childImageSharp.fluid}
            title={algorithm.node.frontmatter.title}
            date={algorithm.node.frontmatter.date}
            category={algorithm.node.frontmatter.category}
            timeToRead={algorithm.node.timeToRead}
            excerpt={algorithm.node.excerpt}
            tags={algorithm.node.frontmatter.tags}
          />
        ))}
      </Base>
    </Container>
    <Footer />
  </Layout>
);

export default Algorithm;

Algorithm.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query AlgorithmQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "algorithm" } } }
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
