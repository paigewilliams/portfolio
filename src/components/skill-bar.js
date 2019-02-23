import React from 'react';
import styled from 'styled-components';

const Bars = styled.ul`
  padding: 0;
  margin-top: 0;
  li {
    width: calc(100%-20px);
    color: #fff;
    font-size: 1rem;
    display: block;
    position: relative;
    background-color: #888;
    margin-bottom: 10px;
    border-radius: 2px;
    p {
      font-family: 'Montserrat', serif;
      padding: 5px;
      margin: 0;
    }
  }
`

class SkillBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({collapsed: true})
    }, 1000);
  }

  render(){
    const { collapsed } = this.state;
    const { skills } = this.props;
  
    return(
      <div>
        <Bars collapsed={collapsed}>
        {skills.map((skill) => 
            <li
              key={skill.skill}
              style={{ width: `${skill.level}%`, backgroundColor: `#DA7A4F` }}>
              <p>{skill.type}</p>
            </li>
          )}
        </Bars>
      </div>

    );
  }
}
export default SkillBar;