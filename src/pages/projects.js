import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #2B2B2B;  
`
const ProjectBody = styled.div`
  break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin: 0px 0px 2em;
`
const Columns = styled.div`
  column-count: 2;
  column-gap: 1em
`


export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <Columns>
      {data.allFile.edges.map(({ node }) => (
        <ProjectBody>
        <ProjectLink to={node.childMarkdownRemark.fields.slug} key={node.id}> 
        <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
        <p>{node.childMarkdownRemark.excerpt}</p>
        <Img fixed={node.childMarkdownRemark.frontmatter.img.childImageSharp.fixed}/>
        </ProjectLink>
        </ProjectBody> 
      ))}
      </Columns>
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