import React from 'react'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import styled from 'styled-components'
import Menu from './menu'
import { Link, withPrefix } from 'gatsby'
import Logo from './logo'

const OuterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 6rem;
`

const InnerMenu = styled.div`
  ul {
    padding: 0;
  }
  li {
    display: inline-block;
    list-style-type: none;
  }
  @media (min-width: 600px) {
    li {
      margin-left: 4rem;
      :hover,
      :focus,
      :focus-within {
        ul {
          z-index: 20;
          opacity: 1;
          transition: opacity 0.75s ease;
        }
      }
      :after {
        background: none repeat scroll 0 0 transparent;
        bottom: -5px;
        content: '';
        display: block;
        height: 3px;
        left: 50%;
        background: #ba6055;
        z-index: 4;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      :hover:after {
        width: 100%;
        left: 0;
        right: 0;
      }
    }
  }

  @media (max-width: 600px) {
    ul {
      margin-top: 6rem;
      padding: 0px;
      color: black;
      list-style-type: none;
      text-align: left;
      display: flex;
      flex-direction: column;
    }
    li {
      font-size: 1.5em;
      margin-left: 1rem;
      padding-bottom: 4rem;
      :hover,
      :focus,
      :focus-within {
        ul {
          z-index: 20;
          opacity: 1;
          transition: opacity 0.75s ease;
        }
      }
      a:hover {
        color: white;
      }
    }
  }
`
const Dropdown = styled.ul`
  position: absolute;
  opacity: 0;
  display: block;
  padding: 0.5rem 0;
  z-index: 1010;
  li {
    display: block;
    padding-top: 0.5rem;
    text-align: left;
    margin-left: 0;
    a:hover {
      color: #ce8d85;
    }
    :after {
      background: none;
    }
  }
  @media (max-width: 600px) {
    margin-top: 0 !important;
    li {
      padding-bottom: 0;
      font-size: 0.75em;
      color: red;
      a:hover,
      :focus,
      :focus-within {
        color: white !important;
      }
    }
  }
`

const LogoSVG = styled.svg`
  height: 80px;
  width: 80px;
  fill: #ba6055;
  margin-top: 1rem;
`

const Header = ({ pageLinks }) => {
  const dropDownItems = ['code', 'cartography']
  return (
    <OuterHeader>
      <Link to="/" title="homepage">
        <LogoSVG viewBox="0 0 100 100">
          <Logo />
        </LogoSVG>
      </Link>
      <Menu
        menuOpenButton={<FaBars size={30} color="#383839" />}
        menuCloseButton={<FaWindowClose size={30} color="#383839" />}
        changeMenuOn="600px"
        menu={
          <InnerMenu>
            <ul>
              {pageLinks.map(link => {
                return link.name === 'projects' ? (
                  <li key={link.name}>
                    <a aria-haspopup="true">{link.name}</a>
                    <Dropdown>
                      {dropDownItems.map(item => (
                        <li key={item}>
                          <Link to={`/${item}`}>{item}</Link>
                        </li>
                      ))}
                    </Dropdown>
                  </li>
                ) : (
                    <li key={link.name}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  )
              })}
              <li>
                <a
                  href={withPrefix('/paigewilliamsresume.pdf')}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="resume"
                >
                  resume
                </a>
              </li>
              <li>
                <a href="mailto:paw145@humboldt.edu">contact</a>
              </li>
            </ul>
          </InnerMenu>
        }
      />
    </OuterHeader>
  )
}

export default Header
