import React from 'react';
import styled from 'styled-components';
import Github from './github';
import Twitter from './twitter';
import Linkedin from './linkedin';

const InnerFooter = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  width: 100%;
  padding: 4rem 0 2rem 0;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
const Ul = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`;
const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  fill: #383839;
  height: 24px;
  width: 24px;
  :hover {
    fill: #7c7c7e;
  }
`;
const A = styled.a`
  padding-left: 1rem;
`;
const Email = styled.p`
  padding-bottom: 0.025rem;
`;
const Footer = () => (
  <InnerFooter>
    <Container>
      <Email>paw145@humboldt.edu</Email>
      <Ul>
        <li>
          <A href="https://github.com/paigewilliams" title="github">
            <Icon viewBox="0 0 24 24" alt="github icon">
              <Github />
            </Icon>
          </A>
        </li>
        <li>
          <A
            href="https://www.linkedin.com/in/paige--williams/"
            title="linkedin"
          >
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
  </InnerFooter>
);

export default Footer;
