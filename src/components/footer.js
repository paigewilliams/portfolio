import React from "react"
import styled from "styled-components"
import { Link, graphql } from 'gatsby'

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
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
`


export default () => (
  <footer>
    <Footer>
      <Container>
      <Ul>
        <li><a href="linkedin">Linkedin</a></li>
        <li><a href="github">Github</a></li>
        <li><a href="twitter">twitter</a></li>
      </Ul>
      </Container>
    </Footer>
  </footer>
)
