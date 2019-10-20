import React from 'react'
import { graphql } from 'gatsby'
import CartographyLayout from '../components/cartography-layout'

export default ({ data }) => <CartographyLayout data={data} />

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/(pages)/(projects)/(cartography)/" }
      }
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
