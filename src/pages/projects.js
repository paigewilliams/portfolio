import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from 'gatsby-image'

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
            <h3>{node.frontmatter.title}</h3>
            <Img fixed={node.frontmatter.img.childImageSharp.fixed}/>
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
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed
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