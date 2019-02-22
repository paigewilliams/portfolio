import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Img from 'gatsby-image'

const Columns = styled.div`
  column-count: 2;
  column-gap: 1em;
  @media (max-width: 1000px) {
    column-count: 1;
  } 
`

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #2B2B2B;  
`
const ProjectBody = styled.div`
  break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin: 0px 0px 2em;
  :hover Img {
    opacity: 0.3;
  }

  :hover HoverBody {
    opacity: 1;
  }
`
const HoverBody = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`

const HoverText = styled.div`
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
`
const Image = styled(Img)`
  width: 100%;
  height: 100%;
  :hover {
    color: #DA7A4F;
  }
`

export default ({ data }) => {
  console.log(data)
  return (
  <Layout>
    <Columns>
      {data.allFile.edges.map(({ node }) => (
        <ProjectBody>
        <ProjectLink to={node.childMarkdownRemark.fields.slug} key={node.id}> 
        <Image 
        fadeIn={false}
        sizes={
          node.childMarkdownRemark.frontmatter.img.childImageSharp.sizes
        }/>
        <HoverBody>
          <HoverText>
            <p>hello</p>
          </HoverText>
        </HoverBody>
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
                  sizes(maxWidth: 600){
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
  }
`