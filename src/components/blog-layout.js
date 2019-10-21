import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from './layout'
import Arrow from '../components/arrow'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
`
const BlogTitle = styled.div`
  div {
    display: flex;
    flex-direction: row;
  }
`

const ArrowSVG = styled.svg`
  width: 30px;
  height: 20px;
  margin-bottom: -0.25rem;
  margin-left: 1rem;
`

export default ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1>Blog Posts</h1>
        {
          data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <BlogTitle key={node.id}>
                <Link to={node.fields.slug} >
                  <div>
                    <h3>{node.frontmatter.title}
                      <ArrowSVG viewBox="0 0 42 17">
                        <Arrow />
                      </ArrowSVG>
                    </h3>
                  </div>
                </Link>
              </BlogTitle>
            )
          })
        }
      </Container>
    </Layout >
  )
}