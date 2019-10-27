import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from './layout';

const ProjectBody = styled.div`
  display: grid;
  grid-template-columns: 50% 35%;
  grid-column-gap: 15%;
  margin-bottom: 3rem;
  @media (max-width: 1040px) {
    grid-template-columns: 100%;
  }
`;
const Image = styled(Img)`
  margin-bottom: 3rem;
  @media (max-width: 1200px) {
    margin-bottom: 0rem;
  }
`;
const Text = styled.div`
  margin-bottom: 3rem;
  margin-top: 1rem;
`;
const Line = styled.span`
  display: block;
  width: 200%;
  border-top: 1px solid #b2b2b2;
`;
const Points = styled.p`
  color: #7c7c7e;
  font-size: 14px;
`;
const CodeLink = styled.a`
  color: #7c7c7e;
  text-transform: uppercase;
  font-size: 12px;
  :hover {
    color: #ba6055;
  }
`;
const Tech = styled.p`
  color: #7c7c7e;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
`;
const ProjectLayout = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <ProjectBody key={node.id}>
        <Image
          alt={`A screenshot of my project titled ${node.frontmatter.title}`}
          fadeIn={false}
          sizes={node.frontmatter.img.childImageSharp.sizes}
        />
        <Text>
          <h2>{node.frontmatter.title}</h2>
          <Tech>{node.frontmatter.tech}</Tech>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          <Points>
            <CodeLink title="view code" href={node.frontmatter.github}>
              View code
            </CodeLink>
            {' '}
            /
            <CodeLink title="view app" href={node.frontmatter.app}>
              {' '}
              View app
            </CodeLink>
          </Points>
        </Text>
        <Line />
      </ProjectBody>
    ))}
  </Layout>
);

ProjectLayout.propTypes = {
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

export default ProjectLayout;
