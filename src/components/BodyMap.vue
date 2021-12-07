<template>
  <div id="world">
    <svg id="mainsvg" class="svgs"></svg>
  </div>
</template>
<script>

import * as d3 from "d3"
import d3Tip from "d3-tip"
import request from "@/utils/request";

export default {
  name: "BodyMap",
  mounted() {
    let d3Tip = require("d3-tip");
    this.first();
    this.loadMap();
  },
  data() {
    return {}
  },
  methods: {
    first() {
    },
    loadMap() {

      var width = 900, height = 400;

      const svg = d3.select("#mainsvg")
          .attr("height", height)
          .attr("width", width);

      const margin = {top: 20, right: 0, bottom: 0, left: 0};
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top - margin.bottom;
      const g = svg.append('g').attr('id', 'maingroup')
          .attr('transform', `translate(${margin.left}, ${margin.top})`);

      // 创建投影
      const projection = d3.geoNaturalEarth1();
      const geo = d3.geoPath().projection(projection);

      // 设置提示标签
      // console.log(d3Tip())

      const tip = d3Tip()
          .attr('class', 'd3-tip')
          .html(function (d, x, y) {
            console.log(x + "!");
            console.log(y + "!")
            this.style.position="absolute";
            this.style("top", x);
            this.style("left", y+"px");

            return "<strong>省份:</strong>" + d.properties.name + "</span>";
          })

      svg.call(tip);

      // 解析json
      d3.json('ChinaGeo.json').then(data => {

        console.log(data);

        // 铺满画布
        projection.fitSize([innerWidth, innerHeight], data);

        // 渲染地图
        g.selectAll('path').data(data.features).join('path')
            .attr('d', geo)
            .attr('stroke', 'black')
            .attr('stroke-width', 1)

            // 鼠标移入样式，提示标签显示
            .on('mouseover', function (d) {
              d3.select(this)
                  .attr('opacity', 0.5)
                  .attr('stroke', 'white')
                  .attr('stroke-width', 6);
              // 从d3.event获取鼠标的位置
              var transform = d3.event;
              var yPosition = transform.offsetY + 20;
              var xPosition = transform.offsetX + 20;
              console.log(xPosition);
              console.log(yPosition)
              // 将浮层位置设置为鼠标位置
              tip.show(d);
            })

            // 鼠标移出样式复原，提示标签隐藏
            .on('mouseout', function (d) {
              d3.select(this)
                  .attr('opacity', 1)
                  .attr('stroke', 'black')
                  .attr('stroke-width', 1);
              tip.hide(d);
            });

      });
// //
// //创建投影(projection)
//       var projection = d3.geoMercator().translate([width / 2, height / 2]).center([105, 38]).scale(550);
// //
// //创建path
//       const path = d3.geoPath()
//           .projection(projection); //配置上投影

// //解析json
//       d3.json("ChinaGeo.json", function(json) {

//         svg.selectAll("path")
//             .data(json.features)
//             .enter()
//             .append("path")
//             .attr("d", path)
//             .on('mouseover', function(data) {
//               d3.select(this).attr('fill', 'rgba(2,2,139,0.61)');

//               //创建显示tooltip用的矩形
//               svg.append("rect")
//                   .attr("id", "tooltip1")
//                   .attr("x", 50)
//                   .attr("y",50)
//                   .attr("width",140)
//                   .attr("height",130)
//                   .attr("stroke","black")
//                   .attr("fill","none")
//               ;

//               //创建显示tooltip文本
//               svg.append("text")
//                   .attr("id", "tooltip2")
//                   .attr("x", 100)
//                   .attr("y", 100)
//                   .attr("text-anchor", "middle")
//                   .attr("font-family", "sans-serif")
//                   .attr("font-size", "11px")
//                   .attr("font-weight", "bold")
//                   .attr("fill", "black")
//                   .text(data.properties.name);
//             })
//             .on('mouseout', function(data) {
//               d3.select(this).attr('fill', 'rgba(128,124,139,0.61)');
//               //Remove the tooltip
//               d3.select("#tooltip1").remove();
//               d3.select("#tooltip2").remove();
//             })
//             .attr('fill', 'rgba(128,124,139,0.61)')
//             .attr('stroke', 'rgba(255,255,255,1)')
//             .attr('stroke-width', 1)
//         ;
//       });
    }
  }
}

</script>

<script type="text/javascript">

</script>
<style>
@import '../assets/css/BodyMap.css';
</style>
