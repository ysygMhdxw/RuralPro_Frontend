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
        grid: {
          top: '15%'
        },
        title: {
          textStyle: {
            color: '#333333',
            fontWeight: 'bold',
            fontSize: 14
          },
          left:"center",
          text: "2016~2018年云南省资产总计、负债总计及所有者权益总计",
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
            // dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        legend: {
          padding: [55,0,0,0],
          data: ['负债总计', '所有者权益总计', '资产总计']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2016', '2017', '2018'],
            axisPointer: {
              type: 'shadow'
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
              formatter: '{value} 亿元'
            }
          },
          {
            type: 'value',
            name: '金额',
            min: 5000,
            max: 22000,
            // interval: 50,
            axisLabel: {
              formatter: '{value} 亿元'
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
