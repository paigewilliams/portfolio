import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from '../theme/globalStyle'
import Sidebar from "./sidebar"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"

const Inner = styled.div`
  flex-direction: column;
  // justify-content: center;
  // margin: 1rem auto;
 
`
const Container = styled.div`
  max-width: 1140px;
  padding: 0 1.5rem;
  position: relative;
  margin: 0 auto;

`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            pageLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyle />
      <Helmet
        title={data.site.siteMetadata.title}>
        <html lang="en" />
      </Helmet>
      <Container>
        <Sidebar pageLinks={data.site.siteMetadata.pageLinks} siteTitle={data.site.siteMetadata.title} />
        <Inner>
        {children}
        </Inner>
      </Container>
      </>
    )}
    />
)
export default Layout

