import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import styled from "styled-components"

const Body = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
    
  } 
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    flex-direction: column;
    
  } 
`;

export default () => (
  <Layout>
      <Body>
        <Text>
      <h1>Hi, I'm Paige.</h1>
      <h4> I am a front-end web developer and cartographer in Portland, OR.</h4>
      <p>Currently: I am a student at Epicodus, learning Ruby, JavaScript and React.</p>
      <p>I am looking for work with a company that prioritizes growth and creativity. </p>
      </Text>
      <Image /> 
    </Body>   
  </Layout>
)
