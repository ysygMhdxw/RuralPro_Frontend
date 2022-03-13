<template>
<div id="privincePublicBudget" style="height: 600px;width: 800px"></div>

</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvincePublicBudget",
  mounted() {
    this.setProvincePublicBudget();
  },
  methods:{
    setProvincePublicBudget(){

      var chartDom = document.getElementById('privincePublicBudget');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        color: [
          '#7BC8BC',
          '#EB7D72',
          '#f3f37b',
          '#6e85b4',
          '#7dbbe8',
          '#FCDA4A'
        ],
        grid: {
          x: 50,
          y: 36,
          x2: 32,
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
            ['Year', '一般公共预算收入', '一般公共预算支出'],
            ['2016', 1808.15, 4712.83],
            ['2017', 1812.29, 5018.86],
            ['2018', 1886.17, 5712.97],
            ['2019', 1994.35, 6075.03],
            ['2020', 2073.56, 6770.09]
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
              fontSize: 10
            }
          },
          splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
              color: '#b2ccb2'
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
