import React from "react"
import styled from "styled-components"

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

 const Sidebar = ({siteTitle}) => (
  <OuterSidebar>
    <h1>{siteTitle}</h1>
  </OuterSidebar>
 )

 export default Sidebar
