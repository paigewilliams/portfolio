import React from "react"
import { graphql } from "gatsby"
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
  text-transform: uppercase;
  font-size: 12px;
  :hover {
    color: #A1C7B6;
  }
`
const Tech = styled.p`
  color: #7c7c7e; 
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
`

export default ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ProjectBody key={ node.id }>
          <Image
          alt={`A screenshot of my project titled ${ node.frontmatter.title }`}
          fadeIn={ false }
          sizes={ node.frontmatter.img.childImageSharp.sizes}/>
          <Text>
            <h2>{ node.frontmatter.title }</h2>
            <Tech>{ node.frontmatter.tech }</Tech>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
              <Points>
                <CodeLink title="view code" href={ node.frontmatter.github }>View code</CodeLink>  /  
                <CodeLink title="view app" href={ node.frontmatter.app }> View app</CodeLink>
              </Points>
          </Text>
          <Line></Line>
        </ProjectBody>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {fileAbsolutePath: {regex: "/(pages)/(projects)/"}}) {
      edges {
        node {
          id
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
          excerpt
        }
      }
    } 
  }
`
