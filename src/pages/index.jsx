import React from 'react'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'

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
          Hi, I&apos;m Paige. <br />I am a UI engineer and cartographer in
          Portland, OR.
        </Header>
        <BodyText>
          <p>
            I am passionate about prison industrial complex abolition, robust
            and free public transportation, climate justice, and using software,
            maps and data visualizations to advance those goals. My tech stack
            primarily consists of React, Redux, Node.js, and Mapbox.
          </p>
        </BodyText>
      </Text>
      <Image />
    </Body>
  </Layout>
)

export default Index
