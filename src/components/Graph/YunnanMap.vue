<template>
  <div id="Yunnan" style="height: 300px;width: 400px"></div>
</template>

<script>
import * as echarts from "echarts";
import $ from "jquery";

export default {
  name: 'YunnanMap',
  data() {
    return {

    }
  },
  mounted() {
    this.setYunnanMap();  // 通过post请求方式读取json文件，但要求json文件必须在vue工程下的static文件夹
  },
  methods: {
    setYunnanMap() {
      var myChart = echarts.init(document.getElementById('Yunnan')); // 获得容器所在位置
      var mapJsonPath = "static/Yunnan.json"; // json文件的相对路径

      var option = {
        visualMap: {
          show: false,
        },
        tooltip: {
          trigger: 'axis'
        },
        geo: {
          map: 'yunnan',
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: '#4d669b',
            borderColor: '#99aeda'
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: '#f3f37b'
            }
          },
          roam: false,
          "left": 15,
          "right": 5,
          "top": 5,
          "bottom": 5
        },
        series: [{
          // roam: true,
          // name: '活跃人数分布',
          // type: 'heatmap',
          // coordinateSystem: 'geo',
          // blurSize: 30,
          // data: []
        }]
      }

      $.get(mapJsonPath, function (geoJson) {
        echarts.registerMap('yunnan', geoJson);
        myChart.setOption(option);
      });

    }
  }
}
</script>
<style>
</style>
