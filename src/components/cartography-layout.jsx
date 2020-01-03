import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from './layout';
import SlideShow from './slideshow';

const ProjectBody = styled.div`
  display: grid;
  margin-bottom: 3rem;
  @media (max-width: 1040px) {
    grid-template-columns: 100%;
  }
  div {
    a {
      text-decoration: none;
      color: #ba6055;
    }
  }
  
`;


const Image = styled(Img)`
  margin-bottom: 3rem;
  @media (max-width: 1200px) {
    margin-bottom: 0rem;
  }
`;

const CartographyLayout = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <ProjectBody key={node.id}>
        {node.frontmatter.img ? (
          <Image
            alt={`A screenshot of my project titled ${node.frontmatter.title}`}
            fadeIn={false}
            fluid={node.frontmatter.img.childImageSharp.fluid}
          />
        )
          : <SlideShow />}
        <h2>{node.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
        {/* <Line /> */}
      </ProjectBody>
    ))}
  </Layout>
);

CartographyLayout.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          html: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

export default CartographyLayout;
