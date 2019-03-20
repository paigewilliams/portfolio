import React from "react"
import styled from "styled-components"
import { Link, withPrefix } from 'gatsby'

const OuterSidebar = styled.div`
  margin-bottom: 6rem;
  width: 100%;

`
const InnerSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1300px;
  position: relative;
  margin: 0 auto;
`
const PageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media(max-width: 800px){
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
  }

`
const ListLink = styled(Link)`
  @media (max-width: 800){
    :hover {
      color: white;
    }
  }

`
const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
`
const Nav = styled.nav`
  @media (max-width: 800px){
    z-index: 6;
    background-color: #A1C7B6;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 100%;
    display: ${props => props.showMenu ? 'block' : 'none'};
  }
  @media (min-width: 800px) {
    display: block;
  }

`
const LinkLi = styled.li`
  @media (min-width: 800px){
    display: inline-block;
    position: relative;
    margin-left: 3.8rem;
    text-decoration: none;
    position: relative;
    z-index: 5;
    :after {
      background: none repeat scroll 0 0 transparent;
      bottom: 2%;
      content: "";
      display: block;
      height: 18px;
      left: 50%;
      position: absolute;
      background: #A1C7B6;
      z-index: -1;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover:after {
      width: 100%;
      left: 0;
      right: 0;
    }
  }

  @media (max-width: 800px) {
    font-size: 40px;
    margin-left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
    ${ListLink}:hover {
      color: white;
    }
  }

`
const BurgerMenu = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 48px;
  height: 48px;
  position: relative;
  z-index: 8;
  @media (max-width: 800px) {
    display: flex;
  }
`
const TopLine = styled.span`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  border-radius: 2px;
  background-color: black;
  transform: ${props => props.toggle ? 'rotate(-45deg)' : 'none'};
`
const BottomLine = styled.span`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  background-color: black;
  border-radius: 2px;
  transform: ${props => props.toggle ? 'rotate(45deg)' : 'none'};
`
const ALink = styled.a`
  @media (max-width: 800px) {
    :hover {
      color: white;
    }
  }
`
const St0 = styled.path`
  fill: #A1C7B6;
`
const LogoSVG = styled.svg`
  height: 100px;
  width: 100px;
  margin-top: 1rem;
`

const St1 = styled.path`
  fill: none;
  stroke: #A1C7B6;
  stroke-linecap: round;
  stroke-linejoin: round;
`

const St1Polyline = styled.polyline`
fill: none;
stroke: #A1C7B6;
`
 class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSideMenu: false
    }
    this.handleSideMenuToggle = this.handleSideMenuToggle.bind(this);
  }

  handleSideMenuToggle() {
    if (window.innerWidth <= 800){
      this.setState({ showSideMenu: !this.state.showSideMenu});
    }
  }

  render(){
    const {pageLinks, siteTitle, resume} = this.props;
    console.log(resume);
    return (
      <OuterSidebar>
      <InnerSidebar>
        <LogoDiv>
        <LogoSVG viewBox="0 0 100 100">
        <St0 d="M18,44.3v-8.2h3.9c0.3,0,0.7,0.1,1,   0.2c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.4,0.5,0.5,0.8c0.2,0.7,0.2,1.5,0,2.2
	        c-0.1,0.3-0.3,0.6-0.5,0.8c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.7,0.2-1,0.2h-2.1v3L18,44.3z M19.8,39.8h1.9c0.2,0,0.5-0.1,0.6-0.2
	       c0.2-0.2,0.2-0.4,0.2-0.6v-0.5c0-0.2-0.1-0.4-0.2-0.6c-0.2-0.1-0.4-0.2-0.6-0.2h-1.9V39.8z"/>
         <St0 d="M44.4,55.3l-1.9-8.2h1.8l0.8,4l0.4,2.3l0,0l0.5-2.4l0.9-4h2l0.9,4l0.5,2.3l0,0l0.4-2.3l0.8-4h1.7l-1.9,8.3h-2
	        l-1-4.5L48,49l0,0l-0.4,1.8l-1,4.5L44.4,55.3z"/>
          <g>
    
          <St1 d="M5,74.2c0.2,0.1,0.3,0.2,0.5,0.3c5.5,3.6,12.1,0.5,17.9,3.1c5.4,2.5,12.2,8.1,15.8,11.9
            c1.6,1.7,2.7,3.4,3.9,4.9"/>
          
          <St1 d="M5,54c5.9,5.5,14.2,9.4,21.1,14.4c7,5.1,16.3,16.4,26.3,17.9c8.4,1.2,17.3-13.8,18.7-19.3
            c1.2-4.9,0.5-9.3,2.6-14.2c1.7-4.1,0.3-8.7,3.6-12.1c3.9-4,10.4-6.6,13.4-11.2c2.2-3.5,0.7-7.8,1.5-11.6c0.6-3.1,1.5-6.4,3-9.4
            M62.5,5c-5.4,5.4-10.4,11.1-17.2,15.6c-9.3,6.2-22.7,2.8-33.3,6.7c-2.2,0.8-4.7,1.7-7.1,2.9 M74.8,33.9c-1.9,2.9-4.7,5.8-5.7,9
            c-1.1,3.2,0.3,6.3-0.4,9.5c-1.3,5.7-8.8,9.8-12,15c-1.4,2.3-0.8,5.5-3,7.5c-2,1.7-7.1,2.5-9.8,1.6c-3.4-1.2-6-5.2-8.1-7.5
            c-2.6-2.9-5.8-5.2-9.4-6.7C19.6,59,13.4,54.5,9.4,49.3C5,43.7,4.1,37,11.9,33.5c3.5-1.7,7.3-2.8,11.2-3.4c4-0.5,7.9,0.5,11.9,0.3
            C46.2,30,50.9,24.8,58,19c2.6-2.1,5.2-5.1,9.2-5.5c3.2-0.3,10.9,0.8,12.4,3.5C82.8,22.9,78.1,28.8,74.8,33.9z"/>
            <St1 d="M67.2,13.5c-4,0.4-6.6,3.4-9.2,5.5c-7.1,5.8-11.8,11-23,11.4c-4,0.2-7.9-0.8-11.9-0.3
            c-3.9,0.6-7.6,1.7-11.2,3.4C4.1,37,5,43.7,9.4,49.3c4,5.2,10.2,9.7,16.9,12.8c3.6,1.5,6.8,3.8,9.4,6.7c2.1,2.3,4.7,6.3,8.1,7.5
            c2.8,1,7.8,0.1,9.8-1.6c2.2-1.9,1.6-5.1,3-7.5c3.2-5.1,10.7-9.2,12-15c0.7-3.1-0.6-6.3,0.4-9.5c1.1-3.2,3.8-6.1,5.7-9
            c3.3-5,8.1-11,4.8-16.9C78.1,14.4,70.4,13.2,67.2,13.5z M35.5,34.4c8.9,0.8,11.2,5.3,11.9,10.7C46.7,39.7,44.5,35.2,35.5,34.4
            c-3.5-0.2-7.1,0.2-10.5,1.4C28.4,34.7,32,34.2,35.5,34.4z M45.2,60.3c-2.8,1.9-8.6,1-11.8-0.4c-3.9-1.7-5.8-5.3-9.3-7.4
            c-4.4-2.7-7.9-3.4-7.6-8.5c-0.3,5.1,3.2,5.8,7.6,8.5c3.4,2.1,5.4,5.7,9.3,7.4C36.6,61.3,42.4,62.2,45.2,60.3
            c1.2-0.9,2.1-2.2,2.4-3.7C47.3,58.1,46.4,59.4,45.2,60.3z"/>
            
          </g>
          
          </LogoSVG>
        </LogoDiv>
        <LogoDiv links>
          <Nav showMenu={this.state.showSideMenu}>
            <PageList>{
            pageLinks.map(link =>
              <LinkLi key={link.name}>
              <ListLink to={link.link}>{link.name}</ListLink>
              </LinkLi>)
          }
          
          <LinkLi>
            <ALink href={withPrefix('/paigewilliamsresume.pdf')}
            rel="noopener noreferrer"
            targer="_blank"
            >resume</ALink>
          </LinkLi>
          <LinkLi><ALink href="mailto:paige@paigewilliams.dev">contact</ALink></LinkLi>
        </PageList>

          </Nav>
          <BurgerMenu onClick={this.handleSideMenuToggle}>
            <TopLine toggle={this.state.showSideMenu}></TopLine>
            <BottomLine toggle={this.state.showSideMenu}></BottomLine>
          </BurgerMenu>
        </LogoDiv>
      </InnerSidebar>
    </OuterSidebar>
    )
  }
 }







 export default Sidebar
