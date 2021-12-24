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
        grid: {
          top: '13%'
        },
        legend: {
          padding: [50,0,0,0]
        },
        title: {
          textStyle: {
            color: '#333333',
            fontWeight: 'bold',
            fontSize: 14
          },
          left:"center",
          text: "2016~2018年云南省利润总额和利税总额",
        },
        tooltip: {},
        dataset: {
          source: [
            ['Year', '利税总额', '利润总额'],
            ['2016', 1758.24, 465.53],
            ['2017', 1545.48, 334.98],
            ['2018', 2133.18, 782.65],
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
