import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SkillBar from "../components/skill-bar"

const Header = styled.h1`
  font-size: 40px;
  line-height: 1.16667;
  padding-bottom: 60px;
  top: auto;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  letter-spacing: 0.10rem;
  line-height: 3rem;
`
const Inner = styled.span`
  border-bottom: 3px solid black;
`
const ExpEdu = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 20px;
`
const skillsLeft = [
  {type: 'JavaScript', level: 95},
  {type: 'React/Redux', level: 75},
  {type: 'Ruby', level: 75},
  {type: 'HTML/CSS', level: 85},
  {type: 'GraphQL', level: 25},
  {type: 'Jasmine & Karma', level: 50}
]

const skillsRight = [
  {type: 'Git', level: 85},
  {type: 'ArcMap 10.x', level: 80},
  {type: 'Illustrator', level: 65},
  {type: 'Node.js', level: 30},
  {type: 'PostgresSQL', level: 30},
  {type: 'Firebase', level: 35}
]

const Test = styled.div`
  column-count: 2;
  @media (max-width: 1000px) {
    column-count: 1;
  }
`

export default () => (
  <Layout>
    <Header><Inner>Skills</Inner></Header>
      <Test>
        <SkillBar skills={skillsLeft}  />
        <SkillBar skills={skillsRight} />
      </Test>
      <Header><Inner>Open Source Contributions</Inner></Header>
      <h3>Hack Oregon - Cartography and Data Visualization on team Sandox</h3>
      <p>Feb 2019 - August 2019</p>
      <ExpEdu>
        <div>
        <Header><Inner>Experience</Inner></Header>
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
     <Header><Inner>Education</Inner></Header> 
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
      
    {/* <h1>Paige Williams</h1>
    <h4>I am a front-end developer with a passionate for using tech and maps to serve people and the planet. I love efficient and well-designed code.</h4>
    <h4>paw145@humboldt.edu</h4>
  
    
    <h3>Education</h3>
    <h5>Bachelor of Arts, Humboldt State University</h5>
    <p>May 2016</p>
    <p>Environmental Studies with a minor in Geospatial Studies</p>
    <p>G.P.A: 3.7, Cum Laude</p>
    <h5>Certificate in Web Development, Epicodus</h5>
    <p>Anticipated April 2019</p>
    <h3>Leadership</h3>
    <h5>Resistance GIS Conference, co-Organizer</h5>
    <p>May 2017</p>
    <p>Organized the first Resistance GIS conference at Portland State University, where my specific roles were coordinating food donations and event management.</p> */}
  </Layout>
)