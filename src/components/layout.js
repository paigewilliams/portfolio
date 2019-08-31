import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from '../theme/globalStyle'
// import Header from './header'
import NewHeader from './new-header'
import Footer from './footer'
import Helmet from 'react-helmet'

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  max-width: 1140px;
  padding: 0 1rem;
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
          <NewHeader pageLinks={data.site.siteMetadata.pageLinks} />
          <div>{children}</div>
          <Footer />
        </Container>
      </>
    )}
  />
)
export default Layout
