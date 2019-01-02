import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Sidebar = ({ siteTitle }) => (
  <div
    style={{
      background: `red`,
      bottom: `0px`,
      display: `flex`,
      flexDirection: 'column', 
      height: `100%`,
      width: `30%`,
      position: `fixed`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: `50 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `yellow`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <p style={{ margin: 0}}>
        <Link
          to="/projects"
          style={{
            color: ``,
            textDecoration: `none`,
          }}
          >
          Projects
          </Link>
      </p>
      <p style={{ margin: 0}}>
        <Link
          to="/resume"
          style={{
            color: ``,
            textDecoration: `none`,
          }}
          >
          Resume
          </Link>
      </p>
      <p style={{ margin: 0}}>
        <Link
          to="/contact"
          style={{
            color: ``,
            textDecoration: `none`,
          }}
          >
          Contact
          </Link>
      </p>
  </div>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
