import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import styled, { keyframes } from 'styled-components'
import Arrow from '../components/arrow'
import { Link } from 'gatsby'

const Body = styled.div`
  display: grid;
  grid-template-columns: 50% 35%;
  grid-column-gap: 15%;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`

const fadeInUp = keyframes`
from {
  transform: translate3d(0,25px,0)
}

to {
  transform: translate3d(0,0,0);
  opacity: 1
}
`

const Text = styled.div`
  max-width: 32rem;
  animation: ${fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Header = styled.h1`
  font-size: 32px;
  margin-bottom: -0.5rem;
  line-height: 40px;
  margin-top: 0;
`

const BodyText = styled.div`
  margin-top: 10rem;
  @media (max-width: 1000px) {
    margin-top: 1rem;
  }
`
const Index = () => (
  <Layout>
    <Body>
      <Text>
        <Header>
          Hi, I'm Paige. <br></br>I am a software engineer and cartographer in
          Portland, OR.
        </Header>
        <BodyText>
          <p>
            I am a code school graduate with experience in Ruby and JavaScript.
            I am currently working at moovel, primarely with React and Redux. I
            am passionate about how tech can increase multimodal transportation
            and make cities more resilient.
          </p>
        </BodyText>
      </Text>
      <Image />
    </Body>
  </Layout>
)

export default Index
