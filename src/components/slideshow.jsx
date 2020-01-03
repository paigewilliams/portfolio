import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Slides = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  div:nth-child(odd) {
    display: flex;
    justify-content: center;
  }
`;

const Image = styled(Img)`
  margin-bottom: 3rem;
  @media (max-width: 1200px) {
    margin-bottom: 0rem;
  }
`;

const Button = styled.button`
  font-size: 3em;
  :focus {
    outline: none;
  }
`;

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(quality: 100, maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `,
  );
  // Minus 1 for array offset from 0
  const length = allFile.edges.length - 1;
  const handleNext = () => (index === length ? setIndex(0) : setIndex(index + 1));
  const handlePrevious = () => (index === 0 ? setIndex(length) : setIndex(index - 1));
  const { node } = allFile.edges[index];
  return (
    <Slides>
      <div>
        <Button type="button" onClick={() => handlePrevious()}>
          {'<'}
        </Button>
      </div>
      <div>
        <Image
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
        />
      </div>
      <div>
        <Button type="button" onClick={() => handleNext()}>{'>'}</Button>
      </div>
    </Slides>
  );
};

export default SlideShow;
