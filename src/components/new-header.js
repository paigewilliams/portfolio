import React from 'react'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import styled from 'styled-components'
import Menu from './menu'
import { Link, withPrefix } from 'gatsby'
// import Logo from './logo'

const InnerMenu = styled.div`
  ul {
    padding: 0;
  }
  li {
    display: inline;
    font-size: 13px;
    list-style-type: none;
    margin-left: 30px;
  }

  @media (max-width: 500px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`

const NewHeader = ({ pageLinks }) => {
  return (
    <Menu
      menuOpenButton={<FaBars size={30} color="black" />}
      menuCloseButton={<FaWindowClose size={30} color="tomato" />}
      changeMenuOn="800px"
      largeMenuClassName="large"
      smallMenuClassName="small"
      menu={
        <InnerMenu>
          <ul>
            {pageLinks.map(link => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </InnerMenu>
      }
    />
  )
}

export default NewHeader
