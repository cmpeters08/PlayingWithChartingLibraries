let h = 100;
let w = 300;

frustrationLevel = [
	{"day": 1, "fLevel": 1},
	{"day": 2, "fLevel": 10},
	{"day": 3, "fLevel": 50},
	{"day": 4, "fLevel": 10},
];

const lineFun = d3.line()
	.x(function(d){ return d.day * 30;}) //*3 elongates the chart making it easier to read
	.y(function(d){ return h - d.fLevel; }) //makes the origin the bottom of the window instead of the top
	.curve(d3.curveLinear)


let svg = d3.select('.lineChart')
	.append('svg')
	.attr('width', w)
	.attr('height', h);

let viz = svg.append('path')
	.attr('d', lineFun(frustrationLevel))
	.attr('stroke', 'purple')
	.attr('stroke-width', 2)
	.attr('fill', 'none');

//add labels




let labels = svg.selectAll('text')
	.data(frustrationLevel)
	.enter()
	.append('text')
	.text(function(d){ return d.fLevel })
	.attr('x', function(d){	return d.day * 30; }) //same as line 18
	.attr('y', function(d){return h-d.fLevel;})
	.attr('font-size', '12px')
	.attr('font-family', 'sans-serif')
	.attr('fill', '#777777')
	.attr('text-anchor', 'start')
	.attr('dy', '.35em') //adjusts line size
	.attr('font-weight', function(d,i){
		if(i === 0 || i ==(frustrationLevel.length - 1)){
			return 'bold';
		}
		else{ return 'normal';}
	})