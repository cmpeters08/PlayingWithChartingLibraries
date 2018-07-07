import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "Molly Weasley",
    children: [
      {
		name: "Bill",
		children: [ 
			{name: "Victore"},
			{name: "Dominque"},
			{name: "Louis"},
		],
      },
      {
		name: "Charlie",
	  },
	  {
		  name: "Percy",
		  children:[
				{name: "Molly"},
				{name: "Lucy"},
		  ]
	  },	
	  {
		  name: "Fred"
	  },
	  {
		  name: "George",
		  children:[
			  	{name: "Fred"},
				{name: "Roxanne"},
		  ]  
	  },
	  {
		  name: "Ron",
		  children:
		  [
			{name: "Rose"},
			{name: "Hugo"},
			 
		]
	  },
	  {
		  name: "Ginny",
		  children:[
			  {name: "James"},
			  {name: "Albus"},
			  {name: "Lily"},
		  ]
	  }
    ]
  }
];

const containerStyles = {
  width: '100%',
  height: '100vh',
}

export default class CenteredTree extends React.PureComponent {
  state = {}

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={debugData} 
          translate={this.state.translate} 
          orientation={'vertical'}
        />
      </div>
    );
  }
} 