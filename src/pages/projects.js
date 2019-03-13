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
display: grid;
grid-template-columns: 50% 30%;
grid-column-gap: 13%;
margin-bottom: 3rem;
  @media (max-width: 1000px) {
    column-count: 1;
  }
`
const Image = styled(Img)`
  margin-bottom: 3rem;
  // width: 50%;
  // height: 50%;
`
const Text = styled.div`
  margin-bottom: 3rem;
  margin-top: 1rem;
`
const Line = styled.span`
  display: block;
  width: 200%;
  border-top: 1px solid #B2B2B2;
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
          <Line></Line>
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
