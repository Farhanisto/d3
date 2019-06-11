var data =[]

for(var i = 0; i<20; i++){
    var num = Math.floor(Math.random()*60)
    data.push(num)
}
var svg = d3.select("#barchart")
            .append("svg")
            .attr("width", 800)
            .attr("height", 400)
    //var data = [5,3,42,23,23,4]
    //var el = d3.select('#barchart')
               svg.selectAll('rect')
               .data(data).enter()
               .append('rect')
               .attr('x', (d,i) => i*1000/data.length)
               .attr('y', 0)
               .attr('width', 800/data.length - 5)
               .attr('height', d=> d)

            //    .attr("class","bar")
            //    .style('height', (d)=>{
            //       return  d + "px"
            //    })
            //    .append('g')
            //    //.attr('class','className')
            //    .text('This is a test')
            //    .classed('className3', true)

