<template>
<div id="provinceGross"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceGross",
  data(){
    return{

    }
  },
  mounted() {
    this.setProvinceGross()
  },
  methods:{
    setProvinceGross(){
      var chartDom = document.getElementById('provinceGross');
      var myChart = echarts.init(chartDom);
      var option;
      const colors = ['#5470C6', '#91CC75'];
      option = {
        color: colors,
        title: {
          left:"40%",
          fontFamily:"华文中宋",
          textAlign:"center",
          text: "2016~2020年云南省生产总值和生产总值指数",
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%',
          top: '16%'
        },
        toolbox: {
          feature: {
            // dataView: { show: true, readOnly: false },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        legend: {
          padding: [60,0,0,0],
          data: ['生产总值', '生产总值指数']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            // prettier-ignore
            data: ['2016', '2017', '2018', '2019', '2020']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '生产总值（亿元）',
            min: 10000,
            max: 27000,
            position: 'left',
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            }
          },
          {
            type: 'value',
            name: '生产总值指数（上年=100）',
            min: 100,
            max: 110,
            position: 'right',
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            }
          }
        ],
        series: [
          {
            name: '生产总值',
            type: 'bar',
            data: [13619.17, 14719.95, 16376.34, 17881.12, 23223.75]
          },
          {
            name: '生产总值指数',
            type: 'line',
            yAxisIndex: 1,
            data: [108.7, 108.7, 109.5, 108.9, 108.1]
          }
        ]
      };

      option && myChart.setOption(option);

    }
  }
}
</script>

<style scoped>
#provinceGross {
  height: 100%;
  width: 80%;
}
</style>
