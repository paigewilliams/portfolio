import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SmallMenu = styled.div`
  display: none;
  @media (max-width: ${props => props.size}) {
    display: flex;
    justify-content: flex-end;
  }
`
const InnerSmall = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 4;
  right: -2rem;
  top: 0;
  width: 15rem;
  background-color: #ce8d85;
  box-shadow: -2px 0 5px #ce8d85;
  transform-origin: 0% 0%;
  transform: ${props =>
    props.showMenu ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
`

const LargeMenu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.size}) {
    display: none;
  }
`

const MenuIcon = ({ onClick, icon }) => (
  <div
    role="button"
    onClick={onClick}
    onKeyPress={onClick}
    tabIndex={0}
    style={{ zIndex: 5, marginTop: '2rem' }}
  >
    {icon}
  </div>
)

const Menu = ({ menu, changeMenuOn, menuOpenButton, menuCloseButton }) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => setShowMenu(!showMenu)

  return (
    <>
      <LargeMenu size={changeMenuOn}>{menu}</LargeMenu>
      <SmallMenu size={changeMenuOn} showMenu={showMenu}>
        {showMenu && (
          <MenuIcon
            onClick={handleClick}
            icon={menuCloseButton}
            showMenu={showMenu}
          />
        )}
        {!showMenu && (
          <MenuIcon
            onClick={handleClick}
            icon={menuOpenButton}
            showMenu={showMenu}
          />
        )}
        {<InnerSmall showMenu={showMenu}>{menu}</InnerSmall>}
      </SmallMenu>
    </>
  )
}

Menu.propTypes = {
  menu: PropTypes.node.isRequired,
  changeMenuOn: PropTypes.string.isRequired,
  menuOpenButton: PropTypes.node.isRequired,
  menuCloseButton: PropTypes.node.isRequired,
}

MenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
}

export default Menu
