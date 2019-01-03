import React from "react"
import { Link } from "gatsby"
import { typography } from "../utils/typography"

const ListLink = props => (
  <li style={{  
    textDecoration: `none`, justifyContent: `center`, alignItems: `center`, paddingTop: '0.5rem', fontSize: `18px`
     }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Sidebar = (props) => (
  <div
      style={{
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px',
        backgroundColor: `tomato`,
        flex: `column`
      }}
      >
      <Link to="/"><h2>Paige Williams</h2></Link>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/projects">Projects</ListLink>
        <ListLink to="/resume">Resume</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
  </div>
  );



export default ({ children }) => (
  <div style={{ margin: `0 auto`, display: `flex`, marginLeft: `0.5rem` }}>
    <Sidebar/>
    
    <div>
    <div style={{ marginLeft: `3rem` }}>
      {children}
    </div>
    
  </div>
  </div>
  
)