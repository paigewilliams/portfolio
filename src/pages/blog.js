import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../components/blog-layout'

export default ({ data }) => <BlogLayout data={data}></BlogLayout>

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(pages)/(blog)/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            tech
          }
          excerpt
        }
      }
    }
  }
`
