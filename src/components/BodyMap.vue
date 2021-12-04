<template>
  <div id="world">
    <svg id="svg" class="chart"></svg>
    <div id="tooltip"></div>
  </div>
</template>
<script>


import * as d3 from "d3"
import request from "@/utils/request";

export default {
  name: "BodyMap",
  mounted() {
    this.first();
    this.loadMap();
  },
  data() {
    return {
    }
  },
  methods: {
    first() {
    },
    loadMap() {

      var width = 800, height = 400;

      const svg = d3.select(".chart")
          .attr("height", height)
          .attr("width", width);
//
//创建投影(projection)
      var projection = d3.geoMercator().translate([width / 2, height / 2]).center([105, 38]).scale(550);
//
//创建path
      const path = d3.geoPath()
          .projection(projection); //配置上投影

//解析json
      d3.json("ChinaGeo.json", function(json) {

        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', function(data) {
              d3.select(this).attr('fill', 'rgba(2,2,139,0.61)');

              //创建显示tooltip用的矩形
              svg.append("rect")
                  .attr("id", "tooltip1")
                  .attr("x", 50)
                  .attr("y",50)
                  .attr("width",140)
                  .attr("height",130)
                  .attr("stroke","black")
                  .attr("fill","none")
              ;

              //创建显示tooltip文本
              svg.append("text")
                  .attr("id", "tooltip2")
                  .attr("x", 100)
                  .attr("y", 100)
                  .attr("text-anchor", "middle")
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "11px")
                  .attr("font-weight", "bold")
                  .attr("fill", "black")
                  .text(data.properties.name);
            })
            .on('mouseout', function(data) {
              d3.select(this).attr('fill', 'rgba(128,124,139,0.61)');
              //Remove the tooltip
              d3.select("#tooltip1").remove();
              d3.select("#tooltip2").remove();
            })
            .attr('fill', 'rgba(128,124,139,0.61)')
            .attr('stroke', 'rgba(255,255,255,1)')
            .attr('stroke-width', 1)
        ;
      });
    }
  }

}

</script>

<script type="text/javascript">

</script>
<style scoped>

</style>
