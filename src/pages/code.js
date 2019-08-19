import React from 'react'
import { graphql } from 'gatsby'
import ProjectLayout from '../components/project-layout'

export default ({ data }) => <ProjectLayout data={data} />

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(pages)/(projects)/(code)/" } }
    ) {
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
                sizes(maxWidth: 600) {
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
