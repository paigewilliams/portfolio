import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
  <Layout>
    <div>
      <h1>Featured Projects</h1>
      {/* <h4>{data.allMarkdownRemark.totalCount} Projects</h4> */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}{" "}</h3>
            <p>{node.excerpt}</p>
          </Link> 
         </div> 
      ))}
    </div>
    
  </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`