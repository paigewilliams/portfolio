import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  column-count: 2
  @media (max-width: 1000px) {
    column-count: 1;
  }
`
const Bars = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
 
  li {
    // width: ${props => props.collapsed ? '200%' : '0'}
    color: #fff;
    font-size: 14px;
    display: block;
    position: relative;
    background-color: #888;
    margin: 10px 0;
   
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
      <Container>
        <Bars collapsed={collapsed}>
        {skills.map((skill) => 
            <li
              key={skill.skill}
              style={{ width: `${skill.level}%`, backgroundColor: `#224F78` }}>
              <p>{skill.skill}</p>
            </li>
          )}
        </Bars>
      </Container>

    );
  }
}
export default SkillBar;