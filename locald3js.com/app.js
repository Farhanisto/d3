var data = [5,3,42,23,23,4]
var d3 = d3.select('body').selectAll('p').data(data).enter().append('p').text('hello sec 5')
        //    .append('g')
        //    //.attr('class','className')
        //    .text('This is a test')
        //    .classed('className3', true)
        //    .style('color','red')