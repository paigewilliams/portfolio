import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const OuterSidebar = styled.div`
  margin-bottom: 2rem;
  // padding: 1rem 0 0;
  width: 100%;
  
`
const InnerSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1140px;
  padding-right: 1rem;
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
  z-index: 5;
  display: inline-block
  letter-spacing: 0.15rem;
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 7%;
    content: "";
    display: block;
    height: 10px;
    left: 50%;
    position: absolute;
    background: #E7C7B8;
    z-index: -1;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%; 
    left: 0; 
  }

`
const LogoDiv = styled.div`
  display: flex;
  margin-right: ${props => props.links ? '-1rem' : '0'};
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
  margin-right: 2.7rem;
`  
const BurgerMenu = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 48px;
  height: 48px;
  position: relative;
  z-index: 1;
  @media (max-width: 600px) {
    display: flex;
  }
`
const TopLine = styled.span`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  border-radius: 2px;
  background-color: black;
`
const BottomLine = styled.span`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  margin-top: 6px;
  background-color: black;
  border-radius: 2px;
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
        <BurgerMenu>
          <TopLine></TopLine>
          <BottomLine></BottomLine>
        </BurgerMenu>
      </LogoDiv>
    </InnerSidebar>
  </OuterSidebar>

  
 )

 export default Sidebar
