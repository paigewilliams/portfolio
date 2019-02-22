import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  column-count: 2;
  column-gap: 1em;
  @media (max-width: 1000px) {
    column-count: 1;
  }
`
const Bars = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
  width: calc(100% - 50px);
  li {
    font-size: 8px;
    display: block;
    position: relative;
    background-color: #888;
    color: #fff;
    margin: 10px 0;
    transition: width 300ms ease-in-out;
    .collapsed & {
      width: 0 !important;
    }
    p {
      padding: 6px;
      margin: 0;
    }
    span {
      position: absolute;
      right: 10px;
      display: inline-block;
      width: 30px;
      top: 11px;
      text-align: right;
      font-weight: normal;
      color: #fff;
      font-size: 8px;
    }
  }
`

class SkillBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: true
    };
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({collapsed: false})
  //   }, 1000);
  // }

  render(){
    const { collapsed } = this.state;
    const { skills } = this.props;
    console.log(skills);
    return(
      <Container>
        <Bars>
        {skills.map((skill) => 
            <li
              key={skill.type}
              style={{ width: `${skill.level}%`, backgroundColor: `#224F78` }}>
              <p>{skill.skill}<span>{skill.level}</span></p>
            </li>
          )}
        </Bars>
      </Container>

    );
  }
}
export default SkillBar;