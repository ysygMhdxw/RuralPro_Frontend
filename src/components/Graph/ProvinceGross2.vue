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
      const colors = [
        '#EB7D72',
        '#7BC8BC',
        '#f3f37b',
        '#6e85b4',
        '#7dbbe8',
        '#FCDA4A'
      ];
      option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          x: 48,
          y: 40,
          x2: 50,
          y2: 16
        },
        legend: {
          data: ['生产总值', '生产总值指数'],
          itemHeight: 9,
          itemWidth: 16,
          textStyle: {
            fontSize: 11
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            // prettier-ignore
            data: ['2016', '2017', '2018', '2019', '2020'],
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
                color: '#00004b'
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 10
              }
            },
            nameTextStyle: {
              fontSize: 10
            },
            splitLine: {
              show: true,
              interval: 'auto',
              lineStyle: {
                color: '#f5cdca'
              }
            }
          },
          {
            type: 'value',
            name: '生产总值指数（%）',
            min: 0,
            max: 10,
            position: 'right',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#004400'
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 10
              }
            },
            nameTextStyle: {
              fontSize: 10
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
            name: '生产总值',
            type: 'bar',
            data: [13619.17, 14719.95, 16376.34, 17881.12, 23223.75]
          },
          {
            name: '生产总值指数',
            type: 'line',
            yAxisIndex: 1,
            data: [8.7, 8.7, 9.5, 8.9, 8.1]
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
