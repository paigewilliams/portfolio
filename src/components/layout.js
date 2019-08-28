import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from '../theme/globalStyle'
import Header from './header'
import Footer from './footer'
import Helmet from 'react-helmet'

const Inner = styled.div`
  flex-direction: column;
`
const Container = styled.div`
  max-width: 1140px;
  padding: 0 6rem;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  margin: 0 auto;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query pageTitle {
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
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
          <meta
            name="description"
            content="Paige Williams web developer portfolio"
          />
        </Helmet>
        <Container>
          <Header pageLinks={data.site.siteMetadata.pageLinks} />
          <Inner>{children}</Inner>
          <Footer />
        </Container>
      </>
    )}
  />
)
export default Layout
