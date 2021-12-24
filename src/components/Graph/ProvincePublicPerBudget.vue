<template>
  <div id="privincePublicPerBudget" style="height: 600px;width: 800px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvincePublicPerBudget",
  mounted() {
    this.setProvincePublicBudget()
  },
  methods:{
    setProvincePublicBudget(){
      var chartDom = document.getElementById('privincePublicPerBudget');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        grid: {
          top: '13%'
        },
        legend: {
          padding: [50,0,0,0]
        },
        tooltip: {},
        title: {
          text: "2016~2020年云南省一般公共预算收入和支出"
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
        xAxis: { type: 'category' },
        yAxis: {},
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
