import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 40rem;
`
const PostBody = styled.div`
  a {
    color: #BA6055;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <PostBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`