<template>
  <div id="ProvinceStorageComeOut" style="width: 800px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceStorageComeOut",
  mounted() {
    this.setProvinceStorageComeOut()
  },
  methods:{
    setProvinceStorageComeOut(){
      var chartDom = document.getElementById("ProvinceStorageComeOut");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          left: "center",
          text: "2016年云南省牲畜及家禽的存栏与出栏"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          padding: [38,0,0,0]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "12%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["猪", "牛", "羊", "禽类"],
        },
        series: [
          {
            name: "存栏",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "出栏",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
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
