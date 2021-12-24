<template>
  <div id="ProvinceperGross" style="width: 1000px;height: 800px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceperGross",
  mounted() {
    this.setProvincePergross()
  },
  methods: {
    setProvincePergross(){
      var chartDom = document.getElementById('ProvinceperGross');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: '2016~2020年云南省人均生产总值'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}元'
        },
        legend: {
          left: 'center',
          padding: [60,0,0,0],
          data: [
            '2020',
            '2019',
            '2018',
            '2017',
            '2016'
          ]
        },
        toolbox: {
          show: true,
          feature: {
            // mark: { show: true },
            // dataView: { show: true, readOnly: false },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '人均生产总值',
            type: 'pie',
            radius: [20, 120],
            center: ['50%', '60%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 47944, name: '2020' },
              { value: 37136, name: '2019' },
              { value: 34221, name: '2018' },
              { value: 30949, name: '2017' },
              { value: 28806, name: '2016' }
            ]
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
