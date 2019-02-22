import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
         file(relativePath: { eq: "images/self-home.jpg" }) {
          childImageSharp {
            fixed(width: 400, height: 600, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
              
            }
          }
        }
      }
    `}
    render={
      data => 
    <Img fixed={data.file.childImageSharp.fixed} />}
  />
)
export default Image
