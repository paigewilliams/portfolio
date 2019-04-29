import React from 'react'
import styled from 'styled-components'
import Github from './github.js'
import Twitter from './twitter.js'
import Linkedin from './linkedin.js'

const footer = styled.div`
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
const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  fill: #383839;
  height: 24px;
  width: 24px;
  :hover {
    fill: #7c7c7e;
  }
`
const A = styled.a`
  padding: 0 1rem;  
`
const Email = styled.p`
  padding-bottom: 0.025rem;
  margin-right: 1rem;
`
const Footer = () => (
  <div>
  <footer>
    <Container>
      <Ul>
        <li>
          <Email>paw145@humboldt.edu</Email>
        </li>
        <li>
        <A href="https://github.com/paigewilliams" title="github">
          <Icon viewBox="0 0 24 24" alt="github icon">
            <Github />
          </Icon>
        </A>
        </li>
        <li>
        <A href="https://www.linkedin.com/in/paige--williams/" title="linkedin">
          <Icon viewBox="0 0 24 24" alt="LinkedIn">
            <Linkedin />
          </Icon>
        </A>
        </li>
        <li>
        <A href="https://twitter.com/p___williams" title="twitter">
          <Icon viewBox="0 0 24 24" alt="Twitter">
            <Twitter />
          </Icon>
        </A>
        </li>
      </Ul>
    </Container>
  </footer>
  </div>
);

export default Footer;