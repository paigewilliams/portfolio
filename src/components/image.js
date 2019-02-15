import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'




const Image = () => (
  <StaticQuery
    query={graphql`
      query {
         file(relativePath: { eq: "images/self.png" }) {
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
    render={data => <Img fixed={data.file.childImageSharp.fixed} />}
  />
)
export default Image
