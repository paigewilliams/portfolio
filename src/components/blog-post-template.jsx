import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from './layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  @media (max-width: 800px) {
    width: 93vw;
  }
`;
const PostBody = styled.div`
  a {
    color: #ba6055;
  }
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPostTemplate;
