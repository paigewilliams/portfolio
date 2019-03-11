import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
// import SkillBar from "../components/skill-bar"
import VictoryChartData from './../components/victory-bar';
const Header = styled.h1`
  padding-bottom: 60px;
  top: auto;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  letter-spacing: 0.10rem;
  line-height: 3rem;
`
const ExpEdu = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 20px;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
`
const RowOne =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column; 
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
        <div>
        <Header>Skills</Header>
      <div>
        <VictoryChartData 
        data={skillsLeft}
         />
      </div>
        </div>
      <div>
      <Header>Open Source Contributions</Header>
      <h3>Hack Oregon - Cartography and Data Visualization on team Sandox</h3>
      <p>Feb 2019 - August 2019</p>
      </div>
   
      </RowOne>

      <ExpEdu>
        <div>
        <Header>Experience</Header>
      <h3>Wine Assistant and Floor Supervisor - Pastaworks</h3>
      <p>March 2017 - January 2019</p>
      <ul>
        <li>
          Create maps for the monthly wine club that follow design guidelines
        </li>
        <li>
          Assign daily tasks and prioritize customer service and productivity
        </li>
      </ul>
      <h3>Regional Planning Intern - Metro</h3>
      <p>September 2016 - March 2017</p>
      <ul>
        <li>
          Assist the Regional Planning department with GIS and carographic applications
        </li>
        <li>
          Create static and interactive maps for the Regional Snapshots
        </li>
        <li>
          Build and maintain the active transportation plan projects database
        </li>
      </ul>
        </div>
     <div>
     <Header>Education</Header> 
      <h3>Certificate in Web Development - Epicodus</h3>
      <p>Anticipated 2019</p>
      <ul>
        <li>
        Learned Ruby, JavaScript and React through pair-programming. The environment was similar to an office where we work for 40+ hours a week and solve problems as a team. 
        </li>
      </ul>
      <h3>B. A. Environmental Studies with a minor in Geospatial Studies, Cum Laude - Humboldt State University</h3>
      <p>September 2012 - May 2016</p>
  
     </div>
      
      </ExpEdu>
      
      </Body>
  </Layout>
)