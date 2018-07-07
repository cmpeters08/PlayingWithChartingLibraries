import React from 'react';
import ReactDOM from 'react-dom';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack} from 'victory';

const data = [
  {tech: 'd3', hours: 13},
  {tech: 'd3-react', hours: 4},
  {tech: 'victory', hours: 1.5},
  {tech: 'powerpoint', hours: 3},
]
class MyTime extends React.Component {
  render() {
    return (
      <div>
        <h1>Time Spend on This Presentation</h1>
        <VictoryChart 
        style={{parent: {maxWidth: "50%"}}}
        width={300} height={200}
        domainPadding={20}
        theme={VictoryTheme.material}
        >
          <VictoryAxis 
          tickValues={['d3', 'd3-react', 'victory', 'powerpoint']}
          tickFormat={["D3", "D3 React", "Victory", "PowerPoint"]} 
          />
          <VictoryAxis
          dependentAxis
		  style={{tickLabels: {fontSize: 8}}}
          tickFormat={(x) => (`${x} 
		  hrs`)} 
          />
        <VictoryBar
        data = {data}
        x="tech"
        y="hours"
        />
        </VictoryChart>
      </div>
    );
  }
}

export default MyTime;