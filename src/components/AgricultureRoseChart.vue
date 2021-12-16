<template>
  <div id="argriculturePieChart" style="width:800px;height: 600px;"/>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "AgricultureRoseChart",
  data(){
    return{
      nameData:{},
      nameValData:{}
    }
  },
  mounted() {
    this.loadPieChart_Argri();
  },
  methods:{
    loadPieChart_Argri(){

      var chartDom = document.getElementById('argriculturePieChart');
      var myChart = echarts.init(chartDom);
      var option = {
        title: {
          text: '粮食产量',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: [
            'rose1',
            'rose2',
            'rose3',
            'rose4',
            'rose5',
            'rose6',
            'rose7',
            'rose8'
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
          }
        },
        series: [
          {
            name: 'Radius Mode',
            type: 'pie',
            radius: [40, 200],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { value: 5, name: 'rose 1' },
              { value: 33, name: 'rose 2' },
              { value: 28, name: 'rose 3' },
              { value: 22, name: 'rose 4' },
              { value: 20, name: 'rose 5' },
              { value: 15, name: 'rose 6' },
              { value: 12, name: 'rose 7' },
              { value: 10, name: 'rose 8' }
            ]
          },
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
