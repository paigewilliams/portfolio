import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #2B2B2B;  
`

const ProjectsBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20em;
  @media (max-width: 1000px) {
  flex-direction: column;
  } 
`

const ProjectWhole = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
`


export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
      {data.allFile.edges.map(({ node }) => (
        <ProjectWhole>
          <ProjectLink to={node.childMarkdownRemark.fields.slug}>
          <ProjectsBody key={node.id}>
              <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
              <p>{node.childMarkdownRemark.excerpt}</p>
          </ProjectsBody> 
          <Img fixed={node.childMarkdownRemark.frontmatter.img.childImageSharp.fixed}/>
          </ProjectLink> 
        </ProjectWhole>
      ))}
  </Layout>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: {internal: {mediaType: {eq: "text/markdown"}}, 
        relativeDirectory: {regex: "/(pages)/(projects)/"}} 
    ) {
      edges {
        node {
          id
          relativeDirectory
          childMarkdownRemark {
            frontmatter {
              title
              date
              img {
                childImageSharp {
                  fixed(width: 400){
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
  }
`