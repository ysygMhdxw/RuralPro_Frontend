<template>
  <div id="Provincedeposits" style="width: 1000px;height: 700px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "Provincedeposits",
  mounted() {
    this.setProvincedeposits()
  },
  methods:{
    setProvincedeposits() {
      var chartDom = document.getElementById('Provincedeposits');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          left: "30%",
          text: '2016~2020年云南省住户存款年末余额'
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
            name: '住户存款年末余额',
            type: 'pie',
            radius: [30, 220],
            center: ['45%', '48%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 15888.28, name: '2020' },
              { value: 14459.15, name: '2019' },
              { value: 13164.69, name: '2018' },
              { value: 11935.78, name: '2017' },
              { value: 10736.62, name: '2016' }
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
