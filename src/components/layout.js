import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GlobalStyle } from '../theme/globalStyle'
import { SidebarFunction } from "./sidebar"

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
  overflow-y: auto;
  padding-left: 20%;
  padding-right: 10%;
  max-width: 600;
`
const Layout = styled.div`
  margin: 0.5rem; 
  display: flex; 
  margin-left: 0.5rem; 
  flex-direction: row;
  overflow: auto;
  max-width: 600;
`
export default ({ children }) => (
  <div>
  <GlobalStyle />
  <Layout>
    <SidebarFunction />
    <Inner>
      {children}
    </Inner>
  </Layout>
  </div>
)