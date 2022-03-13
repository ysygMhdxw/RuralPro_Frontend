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
        color: [
          '#EB7D72',
          '#f3f37b',
          '#7BC8BC',
          '#6e85b4',
          '#7dbbe8',
          '#FCDA4A'
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}元'
        },
        legend: {
          left: '23%',
          data: [
            '2020',
            '2019',
            '2018',
            '2017',
            '2016'
          ],
          itemHeight: 9,
          itemWidth: 16,
          textStyle: {
            fontSize: 10
          }
        },
        toolbox: {
          show: true
        },
        series: [
          {
            name: '人均生产总值',
            type: 'pie',
            radius: [15, 90],
            center: ['50%', '59%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 47944, name: '2020' },
              { value: 37136, name: '2019' },
              { value: 34221, name: '2018' },
              { value: 30949, name: '2017' },
              { value: 28806, name: '2016' }
            ],
            label: {
              fontSize: 10
            }
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
