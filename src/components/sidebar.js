import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const OuterSidebar = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 0 0;
  width: 100%;
`
const InnerSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1140px;
  padding: 0 1rem;
  position: relative;
  margin: 0 auto;
`
const PageList = styled.ul`
  list-style: none; 
  margin: 0;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

`
const ListLink = styled(Link)`
  text-decoration: none;
  color: #B9572B;
  position: relative;
  z-index: 0;
  display: inline-block
  letter-spacing: 0.15rem;
  :hover {
    color: #DA7A4F;
  }

`
const LogoDiv = styled.div`
  display: flex;
  margin-right: ${props => props.links ? '3rem' : '0'};
  flex: 0 0 calc(50% - 1.5rem);
  @media (max-width: 600px) {
    flex: 1;
    margin-right: 0;

  }
  @media (max-width: 1024px){
    margin-right: 2rem;
    flex: 0 0 calc(50% - 1rem);
  }
`
const Nav = styled.nav`
  @media (max-width: 600px) {
    display: none;
  }
`
const LinkLi = styled.li`
  display: inline-block;
  position: relative;
  margin-right: 1.5rem;

`  


 const Sidebar = ({pageLinks, siteTitle}) => (
  <OuterSidebar>
    <InnerSidebar>
      <LogoDiv>
        <h1><Link to="/">{siteTitle}</Link></h1>
      </LogoDiv>
      <LogoDiv links>
        <Nav>
          <PageList>{
          pageLinks.map(link =>
            <LinkLi key={link.name}>
            <ListLink to={link.link}>{link.name}</ListLink>
            </LinkLi>)
        }</PageList>
        </Nav>
      </LogoDiv>
    </InnerSidebar>
  </OuterSidebar>

  
 )

 export default Sidebar
