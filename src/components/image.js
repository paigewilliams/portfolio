import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'




const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "images/self.png" }) {
          childImageSharp {
            fixed(
              width: 500
              ) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export default Image
