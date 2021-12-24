<template>
  <div id="ProvincePopulation" style="width: 800px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvincePopulation",
  mounted() {
    this.setProvincePopulation()
  },
  methods:{
    setProvincePopulation(){
      var chartDom = document.getElementById("ProvincePopulation");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          left: "center",
          text: "2016~2020年云南省农村人口及非农村人口（单位：万人）"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          padding: [50,0,0,0]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "13%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["2016", "2017", "2018", "2019", "2020"],
        },
        series: [
          {
            name: "农村人口",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [3730.33, 3740.28, 3762.98, 3785.431, 3781.59],
          },
          {
            name: "非农村人口",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [1011.47, 1030.22, 1037.52, 1044.069, 1076.75],
          }
        ],
      };

      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
