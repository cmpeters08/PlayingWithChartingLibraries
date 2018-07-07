import React, {Component} from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Molly Weasley',
    attributes: {
      house: 'Gryffindor',
      job: 'mother',
      keyC: 'val C',
	},
	// nodeSvgShape:{
	// 	shapeProps:{
	// 		fill: 'blue',
	// 	},
	// },
    children: [
      {
        name: 'Bill Weasley',
        attributes: {
          house: 'Griffindor',
          job: 'Curse Breaker',
          keyC: 'val C',
        },
      // children:[
      //   {
      //     name: 'Victore Weasley',
      //     attributes: {
      //       house: 'Griffindor',
      //       job: 'student',
      //       keyC: 'val C',
      //   },
      // ]
    },
      {
        name: 'Charlie Weasley',
        attributes: {
          house: 'Griffindor',
          job: 'Dragon Trainer',
          keyC: 'val C',
        },
      },
    ],
  },
];

class MyComponent extends Component {
  render() {
    return (
      //<Tree /> will fill width/height of its container; in this case `#treeWrapper` */}
      <div id="treeWrapper">

        <Tree data={myTreeData} orientation={'vertical'} />

      </div>
    );
  }
}

export default MyComponent;