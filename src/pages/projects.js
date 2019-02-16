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
            img {
              childImageSharp {
                sqip(numberOfPrimitives: 24, blur: 0, width: 256) {
                  dataURI
                  svg
                }
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes_withWebp_noBase64
                }
              }
            }
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