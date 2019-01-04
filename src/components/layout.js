import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ListLink = styled(Link)`
  text-decoration: none;
  color: white;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  letter-spacing: 0.15rem;
`
const StyledLink = styled(Link)`
  color: #221F20;
  text-decoration: none;

`; 

const Sidebar = styled.div`
  maxWidth: 960;
  padding: 0.5rem;
  margin-bottom: 25px;
  background-color: #FFA67A;
  flex: column;
`
const StyledTitle = styled.h1`

  letter-spacing: 0.25rem;
`

// const Sidebar = (props) => (
  // <div
  //     style={{
  //       maxWidth: 960,
  //       padding: '0.5rem',
  //       marginBottom: '25px',
  //       backgroundColor: `#FDA67E`,
  //       flex: `column`
  //     }}
  //     >
      // <StyledLink to="/"><h2>Paige Williams</h2></StyledLink>
      // <ul style={{ listStyle: `none` }}>
      //   <li><ListLink to="/about">About</ListLink></li>
      //   <li><ListLink to="/projects">Projects</ListLink></li>
      //   <li><ListLink to="/resume">Resume</ListLink></li>
      //   <li><ListLink to="/contact/">Contact</ListLink></li>
      // </ul>
  // </div>
  // );

export default ({ children }) => (
  <div style={{ margin: `0.5rem`, display: `flex`, marginLeft: `0.5rem` }}>
    <Sidebar>
    <StyledLink to="/"><h2>Paige Williams</h2></StyledLink>
      <ul style={{ listStyle: `none` }}>
        <li><ListLink to="/about">About</ListLink></li>
        <li><ListLink to="/projects">Projects</ListLink></li>
        <li><ListLink to="/resume">Resume</ListLink></li>
        <li><ListLink to="/contact/">Contact</ListLink></li>
      </ul>
      </Sidebar>
    <div style={{ marginLeft: `3rem` }}>
      {children}
    </div>
    
  
  </div>
  
)