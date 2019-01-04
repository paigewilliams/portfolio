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

  @media (max-width: 1100px) {
    flex-direction: row;
  }
  
`
const StyledLink = styled(Link)`
  color: #221F20;
  text-decoration: none;
  padding-left: 7px;
  padding-right: 7px;
`; 

const Sidebar = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding-left: env(safe-area-inset-left);
  background-color: #F8C3B2;
  flex-grow: 1;

  @media (max-width: 1100px) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F8C3B2;
    flex-direction: row;
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);
    @supports (padding: max(0px)) {
      padding-left: max(var(--responsive-padding), env(safe-area-inset-left));
      padding-right: max(var(--responsive-padding), env(safe-area-inset-right));
    }
    @supports (
      (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))
    ) {
      background-color: #F8C3B2;
      flex-direction: row;
    }
  }
  @media (max-width: 700px) {
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);
    flex-direction: row;
  }
  @media print {
    display: none !important;
  }
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

  @media (max-width: 1100px) {
    flex-direction: row;
  }
  
`
const Inner = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: left;
  flex-grow: 1;
  padding-top: calc(var(--responsive-padding) + var(--safe-area-inset-top));
  padding-right: calc(var(--responsive-padding) + var(--safe-area-inset-right));
  padding-bottom: calc(
    var(--responsive-padding) + var(--safe-area-inset-bottom)
  );
  float: left; 
  margin: 3rem auto;
  max-width: 600;
  overflow-y: auto;
  padding-left: 20%;
`

const Layout = styled.div`
  margin: 0.5rem; 
  display: flex; 
  marginLeft: 0.5rem; 
  flex-direction: row;
  overflow: auto;

`
export default ({ children }) => (
  <Layout>
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
    
  
  </Layout>
  
)