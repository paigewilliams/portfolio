import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650 }}>
    <header style={{ 
      marginBottom: `1.5rem`,
       display: `flex`,
       flexDirection: `column`,
       float: `left`,
      }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Paige's Website</h3>
      </Link>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)