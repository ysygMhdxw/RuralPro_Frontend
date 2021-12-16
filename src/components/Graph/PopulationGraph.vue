<template>
<div id="populationGraph" style="width: 800px;height: 600px"/>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "PopulationGraph",
  mounted() {
    this.setPopulationGraph();
  },
  data(){
    return{

    }
  },
  methods:{
    setPopulationGraph(){
      var chartDom = document.getElementById('populationGraph');
      var myChart = echarts.init(chartDom);
      var option;



      option = {
        title: {
          text: "2016年云南省主要城市人口",
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Profit', 'Expenses', 'Income']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value'
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            data: ['红河州','大理州','楚雄州','普洱市','保山市','临沧市','丽江市','德宏州','西双版纳州','怒江州',]
          }
        ],
        series: [
          {
            name: '男性',
            type: 'bar',
            label: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              focus: 'series'
            },
            data: [241.8973,179.6453,139.94,137.21,132.35,131.64,66.06,65.96,60.31845,28.7]
          },
          {
            name: '女性',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true
            },
            emphasis: {
              focus: 'series'
            },
            data: [-223.1027,-174.7547,-133.36,-123.29,-125.75,-119.26,-61.94,-61.94,-56.08155,-25.5]
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
