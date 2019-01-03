import React from "react"
import { Link } from "gatsby"
import { typography } from "../utils/typography"

const ListLink = props => (
  <li style={{  
    textDecoration: `none`, 
     }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Sidebar = (props) => (
  <div
      style={{
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px',
        backgroundColor: `tomato`,
        flex: `column`
      }}
      >
      <Link to="/">Paige Williams</Link>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
  </div>
  );



export default ({ children }) => (
  <div style={{ margin: `0 auto`, display: `flex` }}>
    <Sidebar/>
    
    <div>
    {children}
  </div>
  </div>
  
)