import React from "react"
import styled from "styled-components"
import { Link, graphql } from 'gatsby'
import github from './../../static/github.svg'
import twitter from './../../static/twitter.svg'
import linkedin from './../../static/linkedin.svg'

const Footer = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 4rem 0;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`

const Icon = styled.img`
  height: 24px;
  width: 24px;
  
`

const A = styled.a`
  padding: 0 1rem;
  
`
const Email = styled.p`
  padding-bottom: 0.025rem;
  margin-right: 1rem;
`

export default () => (
  <div>
  <footer>
    <Footer>
      <Container>
       <Ul>
       <Email>paige@paigewilliams.dev</Email>
         <li>
          <A href="https://github.com/paigewilliams" title="github">
            <Icon src={github} alt="GitHub" />
          </A>
         </li>
         <li>
          <A href="https://www.linkedin.com/in/paige--williams/" title="linkedin">
            <Icon src={linkedin} alt="LinkedIn" />
          </A>
         </li>
         <li>
          <A href="https://twitter.com/p___williams" title="twitter">
            <Icon src={twitter} alt="Twitter" />
          </A>
         </li>
         <li>
           
         </li>
       </Ul>
       
      </Container>
    </Footer>
  </footer>
  </div>
);
