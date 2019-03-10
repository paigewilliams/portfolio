import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'

const OuterSidebar = styled.div`
  margin-bottom: 6rem;
  // padding: 1rem 0 0;
  width: 100%;
  
`
const InnerSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1140px;
  position: relative;
  margin: 0 auto;
`
const PageList = styled.ul`
  list-style: none; 
  margin: 0;
  padding: 0;
  @media(max-width: 600px){
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
  text-decoration: none;
  color: #B9572B;
  position: relative;
  z-index: 5;
  :after {
    background: none repeat scroll 0 0 transparent;
    bottom: 7%;
    content: "";
    display: block;
    height: 10px;
    left: 50%;
    position: absolute;
    background: #E7C7B8;
    z-index: -1;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  :hover:after {
    width: 100%; 
    left: 0; 
  }
  @media (max-width: 600px) {
    color: white;
    font-size: 40px;
    :after {
      background: none repeat scroll 0 0 transparent;
      bottom: 8%;
      content: "";
      display: block;
      height: 10px;
      left: 50%;
      position: absolute;
      background: #B9572B;
      z-index: -1;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover:after {
      width: 100%; 
      left: 0; 
    }
  }

`
const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
`
const Nav = styled.nav`
  @media (max-width: 600px){
    z-index: 6;
    background-color: #E7C7B8;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 100%;
    display: ${props => props.showMenu ? 'block' : 'none'};
  }
  @media (min-width: 600px) {
    display: block;
  }
  
`
const LinkLi = styled.li`
  display: inline-block;
  position: relative;
  margin-left: 3.8rem;

  @media (max-width: 600px){
    margin-left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
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
  @media (max-width: 600px) {
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

 class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSideMenu: false
    }
    this.handleSideMenuToggle = this.handleSideMenuToggle.bind(this);
  }

  handleSideMenuToggle() {
    if (window.innerWidth <= 600){
      this.setState({ showSideMenu: !this.state.showSideMenu});
    }
  }
  
  
  render(){
    const {pageLinks, siteTitle} = this.props;
    return (
      <OuterSidebar>
      <InnerSidebar>
        <LogoDiv>
          <h1><Link to="/">{siteTitle}</Link></h1>
        </LogoDiv>
        <LogoDiv links>
          <Nav showMenu={this.state.showSideMenu}>
            <PageList>{
            pageLinks.map(link =>
              <LinkLi key={link.name}>
              <ListLink to={link.link}>{link.name}</ListLink>
              </LinkLi>)
          }</PageList>
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
