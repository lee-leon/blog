import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import ItemProject from '../components/ItemProject';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Base = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  column-gap: 2rem;
  column-width: 500px;
`;

const Hci = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Helmet title={`HCI | ${config.siteTitle}`} />
    <Header title="Next Generation HCI">

    </Header>
    <Container type="big">
      <Base>
        {edges.map(hci => (
          <ItemProject
            key={hci.node.frontmatter.title}
            path={hci.node.fields.slug}
            cover={hci.node.frontmatter.cover.childImageSharp.fluid}
            customer={hci.node.frontmatter.customer}
            title={hci.node.frontmatter.title}
          />
        ))}
      </Base>
    </Container>
    <Footer />
  </Layout>
);

export default Hci;

Hci.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query HCIsQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "hci" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            customer
            cover {
              childImageSharp {
                fluid(maxWidth: 900, quality: 90, traceSVG: { color: "#2B2B2F" }) {
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
