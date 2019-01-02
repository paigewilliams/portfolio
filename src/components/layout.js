import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ marginRight: `1rem`, justifyContent: `center`, alignItems: `center`, textDecoration: `none` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `0 auto` }}>
    <header style={{ 
      marginBottom: `1.5rem`,
       display: `flex`,
       flexDirection: `column`,
       float: `left`,
       height: `100%`,
       marginRight: `5%`
      }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline`, textDecoration: `none` }}>Paige Williams</h3>
      </Link>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)