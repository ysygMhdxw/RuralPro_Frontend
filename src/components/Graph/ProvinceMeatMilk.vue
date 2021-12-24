<template>
  <div id="ProvinceMeatMilk" style="width: 800px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceMeatMilk",
  mounted() {
    this.setProvinceMeatMilk()
  },
  methods:{
    setProvinceMeatMilk(){
      var app = {};

      var chartDom = document.getElementById('ProvinceMeatMilk');
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
          left: "center",
          text: "2016~2020年云南省肉蛋产量"
        },
        dataset: {
          source: [
            ['Year', '猪肉产量', '牛肉产量', '羊肉产量', '家禽肉产量', '禽蛋产量'],
            ['2016', 545, 61.2, 20.86, 58.32, 72.23, 73.65],
            ['2017', 539, 62.3, 21.15, 57.98, 71.22, 67.4],
            ['2018', 342, 37.3, 18.35, 45.85, 30.27, 61.46],
            ['2019', 324, 36, 18.64, 47.53, 32.72, 65.65],
            ['2020', 288, 39, 20.03, 57.84, 35.8, 66.74]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      };

      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
