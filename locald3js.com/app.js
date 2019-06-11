var data =[]
var barchart_width = 800
var barchart_height = 400
var bar_padding =5
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
               .attr('x', (d,i) => i*barchart_width/data.length)
               .attr('y', d=> barchart_height -d * 5)
               .attr('width', barchart_width/data.length - bar_padding)
               .attr('height', d=> d * 5)
               .attr('fill','grey')

            //    .attr("class","bar")
            //    .style('height', (d)=>{
            //       return  d + "px"
            //    })
            //    .append('g')
            //    //.attr('class','className')
            //    .text('This is a test')
            //    .classed('className3', true)

