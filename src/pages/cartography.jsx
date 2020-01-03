import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CartographyLayout from '../components/cartography-layout';

const Cartography = ({ data }) => <CartographyLayout data={data} />;

Cartography.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            img: PropTypes.object,
          }),
          html: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/(pages)/(projects)/(cartography)/" }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            img {
              childImageSharp {
                fluid(quality: 100, maxWidth: 1140) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

export default Cartography;
