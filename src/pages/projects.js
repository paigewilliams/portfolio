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
  display: flex;
  // grid-template-columns: 2;
  flex-direction: row;
  // justify-content: space-between;
  
  @media (max-width: 1000px) {
    column-count: 1;
  } 
  // break-inside: avoid;
  // display: inline-block;
  // width: 100%;
  // margin: 0px 0px 2em;
`
const Image = styled(Img)`
  width: 50%;
  height: 50%;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 9rem;
`
export default ({ data }) => {
  return (
    <Layout>
      {data.allFile.edges.map(({ node }) => (
        <ProjectBody>
          <Image 
          fadeIn={false}
          sizes={
            node.childMarkdownRemark.frontmatter.img.childImageSharp.sizes
          }/>
          <Text>
            <h2>{node.childMarkdownRemark.frontmatter.title}</h2>
            <p>{node.childMarkdownRemark.frontmatter.tech}</p>
            <div dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
          </Text>
        </ProjectBody> 
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
              tech
              img {
                childImageSharp {
                  sizes(maxWidth: 600){
                    ...GatsbyImageSharpSizes_withWebp_noBase64
                  }
                }
              }
            }
            html
          }
        }
      }     
    }
  }
`