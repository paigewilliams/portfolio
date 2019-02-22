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
  flex-direction: row;
  justify-content: flex-start;
`
const ProjectText = styled.div`
  display: flex;
`

export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <div>
      {data.allFile.edges.map(({ node }) => (
        <ProjectsBody key={node.id}>
          <ProjectLink to={node.childMarkdownRemark.fields.slug}>
            <ProjectText>
              <h3>{node.childMarkdownRemark.frontmatter.title}</h3>
              <p>{node.childMarkdownRemark.excerpt}</p>
            </ProjectText>
            {/* <Img fixed={node.frontmatter.img.childImageSharp.fixed}/> */}
          </ProjectLink> 
         </ProjectsBody> 
      ))}
    </div>
  </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {regex: "/(pages)/(projects)/"}}) {
        edges {
          node {
            id
            relativeDirectory
            childMarkdownRemark {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
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