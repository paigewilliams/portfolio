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
  padding-left: 7px;
  padding-right: 7px;
`; 

const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding-left: env(safe-area-inset-left);
  background-color: tomato;
`

const InnerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 40rem;
  max-height: 15rem;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  
`
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 42.5em;
  margin-left: 25%;
`
export default ({ children }) => (
  <div style={{ margin: `0.5rem`, display: `flex`, marginLeft: `0.5rem` }}>
    <Sidebar>
      <InnerSidebar>
    <StyledLink to="/"><h2>Paige Williams</h2></StyledLink>
      <ul style={{ listStyle: `none` }}>
        <li><ListLink to="/about">About</ListLink></li>
        <li><ListLink to="/projects">Projects</ListLink></li>
        <li><ListLink to="/resume">Resume</ListLink></li>
        <li><ListLink to="/contact/">Contact</ListLink></li>
      </ul>
      </InnerSidebar>
      </Sidebar>
    <Inner>
      {children}
    </Inner>
    
  
  </div>
  
)