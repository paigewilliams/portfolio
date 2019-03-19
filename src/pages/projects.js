import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const ProjectBody = styled.div`
  display: grid;
  grid-template-columns: 50% 30%;
  grid-column-gap: 13%;
  margin-bottom: 3rem;
  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`
const Image = styled(Img)`
  margin-bottom: 3rem;
  @media (max-width: 1200px){
    margin-bottom: 0rem;
  }
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
const Points = styled.p`
  color: #7c7c7e;
  font-size: 14px;
`
const CodeLink = styled.a`
  color: #7c7c7e;
  :hover {
    color: #A1C7B6;
  }
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
            <Points>{node.childMarkdownRemark.frontmatter.tech}</Points>
            <div dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.html }} />
            <Points><CodeLink href={node.childMarkdownRemark.frontmatter.github}>View code</CodeLink>  /  <CodeLink href={node.childMarkdownRemark.frontmatter.app}>View app</CodeLink></Points>
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
              github
              app
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
