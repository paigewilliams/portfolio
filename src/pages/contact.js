import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledLink = styled.a`
text-decoration: none;
  position: relative;
  z-index: 5;
  display: inline-block
  letter-spacing: 0.15rem;
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 7%;
    content: "";
    display: block;
    height: 10px;
    left: 50%;
    position: absolute;
    background: #B1A13D;
    z-index: -1;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%; 
    left: 0; 
  }
`

export default () => (
  <Layout>
    <h1><StyledLink href="mailto:paige@paigewilliams.dev">Email</StyledLink></h1>
    <h1><StyledLink href="https://github.com/paigewilliams">Github</StyledLink></h1>
    <h1><StyledLink href="https://www.linkedin.com/in/paige--williams/">Linkedin</StyledLink></h1>
    <h1><StyledLink href="https://twitter.com/p___williams">Twitter</StyledLink></h1>
  </Layout>
)