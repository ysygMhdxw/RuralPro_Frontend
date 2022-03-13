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
          '#6fc2b2',
          '#e17265',
          '#F4F2C5',
          '#7587b4'
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
            ['Year', '人均一般公共预算收入', '人均一般公共预算支出'],
            ['2016', 3824.00, 9968.00],
            ['2017', 3810.00, 10552.00],
            ['2018', 3941.00, 11938.00],
            ['2019', 4141.95, 12616.88],
            ['2020', 4280.77, 13976.53]
          ]
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            textStyle: {
              fontSize: 10
            }
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              fontSize: 10
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
