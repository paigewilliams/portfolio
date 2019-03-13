import React from "react"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory"
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50rem;
`

class VictoryChartData extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const dataLength = this.props.data.length;
    return (
      <Container>
      <VictoryChart
      domainPadding={20}
      padding={{ left: 110, right: 20, bottom: 30 }}      
      style={{parent:{maxWidth: "100%"}}}
      >
      <VictoryAxis
        tickFormat={this.props.data.type}
        tickValues={[1, 2, 3, 4]}
        
       />
       <VictoryAxis horizontal
        dependentAxis
        tickFormat={(x) => (`${x}%`)}
        
        />
      <VictoryBar 
      barWidth={10}
      style={{
        data: { fill: "#E7C7B8" }
      }}
      data={this.props.data}
      x="type"
      y="level"
      />
      </VictoryChart>
      </Container>
      )
  }
  
}

export default VictoryChartData