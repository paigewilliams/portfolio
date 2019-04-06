import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from '../theme/globalStyle'
import Header from "./header"
import Footer from "./footer"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"

const Inner = styled.div`
  flex-direction: column;
  // justify-content: center;
  // margin: 1rem auto;

`
const Container = styled.div`
  max-width: 1140px;
  padding: 0 6rem;
  position: relative;
  margin: 0 auto;

`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
    query pageTitle{
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
        <Header pageLinks={data.site.siteMetadata.pageLinks} 
           />
        <Inner>
        {children}
        </Inner>
        <Footer />
      </Container>
      </>
    )}
    />
)
export default Layout
