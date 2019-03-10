import React from "react"
import Layout from "../components/layout"
import styled, { keyframes } from "styled-components"

const fadeInUp = keyframes`
from {
  transform: translate3d(0,25px,0)
}

to {
  transform: translate3d(0,0,0);
  opacity: 1
}
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  animation: ${fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  @media (max-width: 800px) {
    flex-direction: column; 
  } 
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 32rem;
  padding-right: 11rem;
  @media (max-width: 800px){
    padding-right: 1rem;
    width: 100%;
  }
`;
const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 25rem;
  margin-top: 5rem;
  @media (max-width: 800px){
    margin-right: 0;
    margin-top: 1rem;
  }
`
const Dashed = styled.ul`
  list-style-type: none;
  margin: 0;
  line-height: 24px;
  text-indent: -2rem;
  li:before {
    content: "-  ";
  }
`

export default () => (
  <Layout>
    <Body>
     <Text>
     <h1>About</h1>
      <p>I am passionate about using technology to serve people and the planet. I have a degree in Environmental Studies from Humboldt State University and a minor in Geographic Information Studies (GIS).</p> 
        <p>I became interested in GIS because I saw maps as a way to convey environmental injustice. As I became more involved in the field and wanted to create more powerful visualizations, I needed to build web maps. I decided to take up coding enroll in Epicodus. I am now somewhat well versed in Ruby JavaScript, and React.</p>
    </Text> 
    
    <Lists>
    <h3>When I am not coding I am:</h3>
    <Dashed>
      <li>Listening to podcasts</li>
      <li>Hiking in Forest Park</li>
      <li>Making pasta</li>
    </Dashed>
    <h3>Favorite Podcasts:</h3>
    <Dashed>
      <li>99% Invisible</li>
      <li>Reply All</li>
      <li>Hey! Cool Job</li>
      <li>Still Processing</li>
    </Dashed>
    </Lists>
    
    </Body>
  </Layout>
)

