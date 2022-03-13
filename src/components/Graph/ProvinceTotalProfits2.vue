<template>
  <div id="ProvinceTotalProfits" style="width: 1000px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceTotalProfits",
  mounted() {
    this.setProvinceTotalProfits()
  },
  methods:{
    setProvinceTotalProfits(){

      var app = {};

      var chartDom = document.getElementById('ProvinceTotalProfits');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        color: [
          '#EB7D72',
          '#7BC8BC',
          '#6e85b4',
          '#f3f37b',
          '#7dbbe8',
          '#FCDA4A'
        ],
        grid: {
          x: 62,
          y: 36,
          x2: 20,
          y2: 23
        },
        tooltip: {},
        legend: {
          itemHeight: 9,
          itemWidth: 16,
          textStyle: {
            fontSize: 11
          }
        },
        dataset: {
          source: [
            ['Year', '利税总额', '利润总额'],
            ['2016', 1758.24, 465.53],
            ['2017', 1545.48, 334.98],
            ['2018', 2133.18, 782.65],
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            textStyle: {
              fontSize: 10
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#666'
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              fontSize: 10,
            }
          },
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
              color: '#b3bde0'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00004b'
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }]
      };

      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
