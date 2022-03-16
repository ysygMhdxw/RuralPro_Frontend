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
      myChart.showLoading();  // 显示加载动画
      var mapJsonPath = "static/Yunnan.json"; // json文件的相对路径

      var option = {
        visualMap: {
          min: 0,
          max: 500,
          show: false,
          splitNumber: 5,
          inRange: {
            color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
          },
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: '云南',
          label: {
            normal: {
              show: true,
              color: '#fff'
            },
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#40458e',
              borderColor: '#6367ad',
              borderWidth: 1.5
            },
            emphasis: {
              areaColor: '#40458e'
            }
          },
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0
        },
        series: [{
          name: '活跃人数分布',
          type: 'heatmap',
          coordinateSystem: 'geo',
          blurSize: 30,
          data: []
        }]
      }

      $.get(mapJsonPath, function (geoJson) {
        myChart.hideLoading();  // 停止加载动画
        echarts.registerMap('云南', geoJson);
        myChart.setOption(option);
      });

    }
  }
}
</script>
<style>
</style>
