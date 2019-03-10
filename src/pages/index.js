import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import styled, { keyframes } from "styled-components"

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column; 
  } 
`;

const fadeInUp = keyframes`
from {
  transform: translate3d(0,25px,0)
}

to {
  transform: translate3d(0,0,0);
  opacity: 1
}
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 8.3rem;
  max-width: 32rem;
  animation: ${fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  @media (max-width: 800px){
    padding-right: 1rem;
    width: 100%;
  }
`;

const Header = styled.h1`
  font-size: 32px;
  margin-bottom: -0.5rem;
  line-height: 40px;
  margin-top: 0;
`;

const BodyText = styled.div`
  margin-top: 10rem;
 @media (max-width: 1000px){
   margin-top: 1rem;
 } 
`

const Index = () => (
  <Layout>
    <Body>
      <Text>
        <Header>
          Hi, I'm Paige. 
          I am a front-end
          web developer
          and cartographer 
          in Portland, OR.
          </Header>
          <BodyText>
          <p>I am a student at Epicodus, learning Ruby, JavaScript and React. I am currently looking for work with a company that prioritizes growth and creativity. 
          I like working with React/Redux, GraphQL, and Mapbox.</p>
          </BodyText>
      </Text>
    <Image /> 
    </Body>   
  </Layout>
);

export default Index
