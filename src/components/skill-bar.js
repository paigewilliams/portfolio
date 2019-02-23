import React from 'react';
import styled from 'styled-components';

const Bars = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
  li {
    width: calc(100%-20px);
    color: #fff;
    font-size: 14px;
    display: block;
    position: relative;
    background-color: #888;
    margin: 10px 0;
    border-radius: 5px;
    p {
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
    console.log(collapsed);
    return(
      <div>
        <Bars collapsed={collapsed}>
        {skills.map((skill) => 
            <li
              key={skill.skill}
              style={{ width: `${skill.level}%`, backgroundColor: `#224F78` }}>
              <p>{skill.type}</p>
            </li>
          )}
        </Bars>
      </div>

    );
  }
}
export default SkillBar;