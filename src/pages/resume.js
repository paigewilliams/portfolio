import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SkillBar from "../components/skill-bar"
// import SkillBar from "react-skillbars"
const Header = styled.h1`
  font-size: 40px;
  line-height: 1.16667;
  padding: 5px 0;
  padding-bottom: 40px;
`;

const skillsLeft = [
  {type: 'JavaScript', level: 75},
  {type: 'React/Redux', level: 65},
  {type: 'Ruby', level: 50},
  {type: 'HTML/CSS', level: 85},
  {type: 'GraphQL', level: 25},
  {type: 'Jasmine & Karma', level: 50},
  
]

const skillsRight = [
  {type: 'Node.js', level: 30},
  {type: 'ArcMap 10.x', level: 80},
  {type: 'Illustrator', level: 65},
  {type: 'Git', level: 85},
  {type: 'PostgresSQL', level: 20},
  {type: 'Firebase', level: 40}
]

const Test = styled.div`
  column-count: 2;
`

export default () => (
  <Layout>
    <Header>Skills</Header>
      <Test>
        <SkillBar skills={skillsLeft}  />
        <SkillBar skills={skillsRight} height={15} />
      </Test>
    
    {/* <h1>Paige Williams</h1>
    <h4>I am a front-end developer with a passionate for using tech and maps to serve people and the planet. I love efficient and well-designed code.</h4>
    <h4>paw145@humboldt.edu</h4>
    <h3>Skills</h3>
    <ul>
      <li> 
        Programming Languages: HTML, CSS, JavaScript, Ruby, React
      </li>
      <li>
        Database: Postgres, GraphQL
      </li>
      <li>
        Libraries: Leaflet, jQuery, Gatsby
      </li>
      <li>
        GIS: ArcMap 10.x, QGIS
      </li>
      <li>
        Versioning: Git
      </li>
      <li>
        Design: Illustrator, InDesign
      </li>
    </ul>
    <h3>Experience</h3>
    <h5>Regional Planning Intern - Metro</h5>
    <p>September 2016- March 2017</p>
    <ul>
      <li>
        Assist the Regional Planning department with GIS and carographic applications
      </li>
      <li>
        Create static and interactive maps for the Regional Snapshots
      </li>
      <li>
        Build and maintain the active transportation plan projects database.
      </li>
    </ul>
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