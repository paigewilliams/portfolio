import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from './layout';
import Arrow from './arrow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
`;
const BlogTitle = styled.div`
  div {
    display: flex;
    flex-direction: row;
  }
`;

const ArrowSVG = styled.svg`
  width: 30px;
  height: 20px;
  margin-bottom: -0.25rem;
  margin-left: 1rem;
`;

const BlogLayout = ({ data }) => (
  <Layout>
    <Container>
      <h1>Blog Posts</h1>
      {
        // eslint-disable-next-line react/prop-types
        data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogTitle key={node.id}>
            <Link to={node.fields.slug}>
              <div>
                <h3>
                  {node.frontmatter.title}
                  <ArrowSVG viewBox="0 0 42 17">
                    <Arrow />
                  </ArrowSVG>
                </h3>
              </div>
            </Link>
          </BlogTitle>
        ))
      }
    </Container>
  </Layout>
);

BlogLayout.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
          }),
        }),
      })),
    }),
  }).isRequired,
};

export default BlogLayout;
