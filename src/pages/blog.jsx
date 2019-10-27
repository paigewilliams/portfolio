import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogLayout from '../components/blog-layout';

const Blog = ({ data }) => <BlogLayout data={data} />;

Blog.propTypes = {
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
          }),
          html: PropTypes.string,
          excerpt: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export default Blog;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(pages)/(blog)/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            tech
          }
          excerpt
        }
      }
    }
  }
`;
