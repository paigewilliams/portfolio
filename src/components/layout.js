import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ListLink = props => (
  <li activeStyle={{  
    textDecoration: "none", color: "white", justifyContent: `center`, alignItems: `center`, paddingTop: '0.5rem'
     }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

// const Header = styled.h2`
//   text-decoration: none;
//   color: white;
// `

const Sidebar = (props) => (
  <div
      style={{
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px',
        backgroundColor: `#FDA67E`,
        flex: `column`
      }}
      >
      <Link to="/"activeStyle={{
            color: "white", textDecoration: "none"
          }}><h2>Paige Williams</h2></Link>
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