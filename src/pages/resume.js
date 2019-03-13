import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import VictoryChartData from './../components/victory-bar';

const Header = styled.h1`
  padding-bottom: 0.5rem;
  letter-spacing: 0.06rem;
  line-height: 2rem;
`
const RowTwo = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  // @media (max-width: 800px) {
  //   flex-direction: column; 
  // } 
` 
const Body = styled.div`
  display: grid;
  grid-template-columns: 50% 30%;
  grid-column-gap: 13%;
  grid-row-gap: 4rem;
  @media (max-width: 800px) {
  grid-template-columns: 100%;
  grid-row-gap: 2rem;
  } 
`
const RowOne  = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  // @media (max-width: 800px) {
  //   flex-direction: column; 
  // } 
`
const SkillsSection = styled.div`
  // display: flex;
  // flex-direction: column;
  // padding-right: 8.3rem;
  // max-width: 80rem;
`
const OpenSourceSection = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // max-width: 25rem;
  // @media (max-width: 800px){
  //   margin-right: 0;
  //   margin-top: 1rem;
  // }
`

const UL = styled.ul`
  margin: 0;
  line-height: 24px;
  li:before {
    content: "-  ";
  }
`
const skillsLeft = [
  {type: 'JavaScript', level: 95},
  {type: 'React/Redux', level: 75},
  {type: 'Ruby', level: 75},
  {type: 'HTML/CSS', level: 85},
  {type: 'ArcMap 10.x', level: 80},
  {type: 'Jasmine & Karma', level: 50},
  {type: 'Git', level: 85},
  {type: 'GraphQL', level: 25},
  {type: 'Illustrator', level: 65},
  {type: 'Node.js', level: 30},
  {type: 'PostgresSQL', level: 30},
  {type: 'Firebase', level: 35}
]

export default () => (
  <Layout>
    <Body>
      <RowOne>
        <SkillsSection>
        <Header>Education</Header> 
      <h3>Certificate in Web Development - Epicodus</h3>
      <p>Anticipated 2019</p>
      <UL>
        <li>
        Learned Ruby, JavaScript and React through pair-programming. The environment was similar to an office where we work for 40+ hours a week and solve problems as a team. 
        </li>
      </UL>
      <h3>B. A. Environmental Studies with a minor in Geospatial Studies, Cum Laude - Humboldt State University</h3>
      <p>September 2012 - May 2016</p>
          
        </SkillsSection>
      <OpenSourceSection>
      <Header>Experience</Header>
      <h3>Wine Assistant and Floor Supervisor - Pastaworks</h3>
      <p>March 2017 - January 2019</p>
      <UL>
        <li>
          Create maps for the monthly wine club that follow design guidelines
        </li>
        <li>
          Assign daily tasks and prioritize customer service and productivity
        </li>
      </UL>
      <h3>Regional Planning Intern - Metro</h3>
      <p>September 2016 - March 2017</p>
      <UL>
        <li>
          Assist the Regional Planning department with GIS and carographic applications
        </li>
        <li>
          Create static and interactive maps for the Regional Snapshots
        </li>
        <li>
          Build and maintain the active transportation plan projects database
        </li>
      </UL>
      <Header>Open Source</Header>
        <h3>Hack Oregon - Cartography and Data Visualization on team Sandox</h3>
        <p>Feb 2019 - August 2019</p>
   
      </OpenSourceSection>
      </RowOne>
      <RowTwo>
      <SkillsSection>
      <Header>Skills</Header>
          <VictoryChartData 
          data={skillsLeft}/>
        
        </SkillsSection>

     <OpenSourceSection>
     
     </OpenSourceSection>
      </RowTwo>

      </Body>
  </Layout>
)