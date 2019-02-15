import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'


const OuterSidebar = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // z-index: 1;
  background-color: #F8C3B2;
  flex-grow: 1;
  padding-right: 1rem;
  padding-left: 1rem;
  @media (max-width: 1000px) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F8C3B2;
    flex-direction: row;
`
const InnerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 40rem;
  max-height: 15rem;
  flex-grow: 1;
  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justift-content: center;
    height: 6rem;  
  }
`
const PageList = styled.ul`
  list-style: none; 
  margin-left: none;
  display: block;
  @media (max-width: 1000px) {
    display: inherit;
    // margin-left: 30px;
    justify-content: space-evenly;
  } 
`
const ListLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-top: 0.5rem;
  letter-spacing: 0.25rem;
  line-height: 3rem;
  @media (max-width: 1000px) {
    display: inherit;
    margin-left: 20px;
  } 
`

 const Sidebar = ({pageLinks, siteTitle}) => (
    <OuterSidebar>
    <InnerSidebar>
      {/* <h1>{siteTitle}</h1> */}
      <PageList>{
        pageLinks.map(link =>
          <li key={link.name}>
          <ListLink to={link.link}>{link.name}</ListLink>
          </li>)
      }</PageList>
    </InnerSidebar>
  </OuterSidebar>

  
 )

 export default Sidebar
