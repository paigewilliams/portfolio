import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ProjectLayout from '../components/project-layout';

const Code = ({ data }) => <ProjectLayout data={data} />;

Code.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            tech: PropTypes.string,
            github: PropTypes.string,
            app: PropTypes.string,
            img: PropTypes.object,
          }),
          html: PropTypes.string,
          excerpt: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(pages)/(projects)/(code)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            tech
            github
            app
            img {
              childImageSharp {
                sizes(quality: 100, maxWidth: 600) {
                  ...GatsbyImageSharpSizes_withWebp_noBase64
                }
              }
            }
          }
          html
          excerpt
        }
      }
    }
  }
`;

export default Code;
