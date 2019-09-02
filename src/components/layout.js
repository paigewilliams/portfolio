import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from '../theme/globalStyle'
import Header from './header'
import Footer from './footer'
import Helmet from 'react-helmet'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`
const InnerContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  max-width: 1140px;
  padding: 0 1rem;
  margin: 0 auto;
  box-sizing: content-box;
  height: 100vh;
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
          <InnerContainer>
            <Header pageLinks={data.site.siteMetadata.pageLinks} />
            <div>{children}</div>
            <Footer />
          </InnerContainer>
        </Container>
      </>
    )}
  />
)
export default Layout
