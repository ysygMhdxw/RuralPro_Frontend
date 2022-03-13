<template>
  <div id="ProvinceTotalAsset" style="width: 900px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceTotalAsset",
  mounted() {
    this.setProvinceTotalAsset()
  },
  methods:{
    setProvinceTotalAsset(){
      var chartDom = document.getElementById('ProvinceTotalAsset');
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
          x2: 76,
          y2: 23
        },
        legend: {
          data: ['负债总计', '所有者权益总计', '资产总计'],
          itemHeight: 9,
          itemWidth: 16,
          textStyle: {
            fontSize: 11
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['2016', '2017', '2018'],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#666'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '金额',
            min: 5000,
            max: 16000,
            // interval: 50,
            axisLabel: {
              formatter: '{value} ',
              textStyle: {
                fontSize: 10
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
          {
            type: 'value',
            name: '金额',
            min: 5000,
            max: 22000,
            // interval: 50,
            axisLabel: {
              formatter: '{value} ',
              textStyle: {
                fontSize: 10
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#004400'
              }
            },
            splitLine: {
              show: true,
              interval: 'auto',
              lineStyle: {
                color: '#c0dcc0'
              }
            }
          }
        ],
        series: [
          {
            name: '负债总计',
            type: 'bar',
            data: [
              11782.3, 12431.16, 12555.54,]
          },
          {
            name: '所有者权益总计',
            type: 'bar',
            data: [
              6386.35, 7031.04, 7677.67,]
          },
          {
            name: '资产总计',
            type: 'line',
            yAxisIndex: 1,
            data: [18181, 19474, 20241,]
          }
        ]
      };

      option && myChart.setOption(option);

    }
  }
}
</script>

<style scoped>

</style>
