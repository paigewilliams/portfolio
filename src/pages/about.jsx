import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Body = styled.div`
  display: grid;
  grid-template-rows: 47% 50%;
  grid-template-columns: 50% 35%;
  grid-column-gap: 15%;
  @media (max-width: 600px) {
    display: block;
    grid-template-columns: 100%;
    grid-row-gap: 2rem;
  }
`

const Text = styled.div`
  a {
    color: #ba6055;
  }
  @media (max-width: 800px) {
    padding-right: 1rem;
    width: 100%;
  }
`
const Lists = styled.div`
  max-width: 32rem;
  margin-top: 4rem;
  @media (max-width: 800px) {
    margin-right: 0;
    margin-top: 1rem;
  }
`
const Dashed = styled.ul`
  list-style-type: none;
  margin: 0;
  line-height: 24px;
  li:before {
    content: '-  ';
  }
`

const About = () => (
  <Layout>
    <Body>
      <Text>
        <h1>About</h1>
        <p>
          I work to build technology that serves people and the planet. I have a
          degree in Environmental Studies from Humboldt State University and a
          minor in Geographic Information Studies (GIS).
        </p>
        <p>
          I became interested in GIS because I saw maps as a way to convey
          environmental injustice. As I became more involved in the field and
          wanted to create more powerful visualizations, I needed to build web
          maps. I decided to take up coding and enroll in Epicodus, a coding
          bootcamp in Portland, Oregon. After coding for 40+ hours a week for
          six months I am <em>somewhat</em> well versed in Ruby, JavaScript, and
          React. I now work at <a href="https://www.aclima.io/">Aclima </a>
          as a UI Engineer, building tools for air quality analysis.
        </p>
      </Text>
      <Lists>
        <h3>When I am not coding I am:</h3>
        <Dashed>
          <li>Listening to podcasts</li>
          <li>Hiking in Forest Park</li>
          <li>Making pizza</li>
          <li>Brewing kombucha</li>
          <li>Riding my bike around town</li>
        </Dashed>
      </Lists>
    </Body>
  </Layout>
)

export default About
