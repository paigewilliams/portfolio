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
  z-index: 1;
  background-color: #F8C3B2;
  flex-grow: 1;
  padding-right: 3rem;
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
  // justify-content: space-around;
  flex-grow: 1;
  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    justift-content: center;
    height: 6rem;  
  }

`

 const Sidebar = ({pageLinks, siteTitle}) => (
    <OuterSidebar>
    <InnerSidebar>
      <h1>{siteTitle}</h1>
      {
        pageLinks.map(link =>
          <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
          </li>)
      }
    </InnerSidebar>
  </OuterSidebar>

  
 )

 export default Sidebar
