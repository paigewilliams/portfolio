import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #2B2B2B;  
`

export default ({ data }) => {
  return (
  <Layout>
    <div>
      <h1>Featured Projects</h1>
      {/* <h4>{data.allMarkdownRemark.totalCount} Projects</h4> */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <ProjectLink to={node.fields.slug}>
            <h3>{node.frontmatter.title}{" "}</h3>
            <p>{node.excerpt}</p>
          </ProjectLink> 
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