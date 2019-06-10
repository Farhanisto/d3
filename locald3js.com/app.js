d3.csv('data.csv').then((data)=> {
    console.log(data)
    generate(data.columns)
})
function generate(data){
    //var data = [5,3,42,23,23,4]
    var el = d3.select('body')
               .selectAll('p')
               .data(data).enter()
               .append('p')
               .text(((d)=> 'this is a paragraph'+d))
               .style('color', (d)=>{
                  return  d < 15 ? 'orange' : 'grey'
               })
            //    .append('g')
            //    //.attr('class','className')
            //    .text('This is a test')
            //    .classed('className3', true)
}
