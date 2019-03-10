import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import styled, { keyframes } from "styled-components"

const Body = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
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
  max-width: 20em;
  margin-right: 2em;
  animation: ${fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both
`;

const Header = styled.h1`
  font-size: 40px;
`;

const SubHeader = styled.h3`
  font-size: 20px;
`;

const Index = () => (
  <Layout>
      <Body>
        <Text>
          <Header>Hi, I'm Paige.</Header>
          <SubHeader> I am a front-end web developer and cartographer in Portland, OR.</SubHeader>
          <p>Currently: I am a student at Epicodus, learning Ruby, JavaScript and React.</p>
          <p>I am looking for work with a company that prioritizes growth and creativity. </p>
          <p>Tech I like to work with: React/Redux, GraphQL, D3</p>
      </Text>
      <Image /> 
    </Body>   
  </Layout>
);

export default Index
