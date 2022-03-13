<template>
  <div id="PopulationByYear" style="height: 300px;width: 400px"></div>
</template>

<script>
import request from "@/utils/request";
import * as echarts from "echarts"
export default {
  name: "PopulationByYear",
  mounted() {
    this.setPopulationByYear()
  },
  data(){
    return{

    }
  },
  methods:{
    setPopulationByYear(){
      var chartDom = document.getElementById("PopulationByYear");
      var myChart = echarts.init(chartDom);
      var option;
      const spirit =
          'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA69JREFUeF7tm01oE1EQx/+zaVHEgmA3UUHBkydFQUERsaViQVAE8SBFL2JBoTS7FdE2jbWbVqhmk6KI9CKoSC8i+HERxS/8ABFFT+LZr6SiULXamB3Z1mITk3aTfbtW+3IKu7Pz/vPLezOzuy+Ev/BJRbXdClM9g9fYwxPoIYCr1YZ51m855OeA6dbwfAooZxioLzLuE9UwV/qpyVcAA+36JQa2ThLgBdUwG/yC4BuAVETfRIRrjgLLWgvU7uRbR7YujXwDkI7oe0Doc6SXsVmNmVcd2bo08g1Aql07SKCjDvVqqmEmHdq6MvMNQDra0gDm807UWhbWhrrMB05s3dr4BmAgqtcx48bkgukNB4aWBDtOfZ7c1r2FbwBsqe8jeodCODyxbNqrGvHT7kNz5sFXALakDxFto0V0EcDsPImfFeZtc2OJ686ki7HyHYAt+127tjRAygZYvGokDIUeZ9m6Mc9IvBATlnMvvgDgxsbKgeCstc5lAdWpr/epry9TyjXl2HoKYGTNg9cBtA6EypIEMjIA3wPorhozj5R0bQnGngBIt2kroeAYQDUlaJnAlPpVI75DjK9cL8IBfIrsX5wh6xGAoGDBKdUwQ4J9QjiAgaiWZKZm0UJtf0TcW92ZCIv0LRTA4KEm9VtFZUqkwHxfM39kglVHT6RFjSEUQDoSrgEpt0SJK+iHrVo1lrwtagyxAKItGphNUeIK+iHS1c54QtQYQgE4a3XdSbcYR0Ixs8Odl99Xew5ANUxKt+tcnmCuAShnuksAcgbIJSBzgEyCsgrIMij7gPL6ij+vmtqNEFu1+fcW06sRkgCm/QxQakFWzu31NFsCEsA/NgPawjsVRcnZ5uLqdjiAJcji5fjiZVnWrlBX8tyULIPpAweqMOPHTQD2G58vFuO43beX+zxgBF5EvwDC2CPxx/heUaf29AxOSQBjot63Ni8bHlJeLUwkhuxjxQDYCc0+X+yFqQ3APv+xIzxneJgXhbp7n4sKfMyP0EaomDi3AEQHPd6fBOAl3THfcgYUeSjqNAd4+SPJJeAlXbkEfhGQOUDmgMJvhmQSdNgJepmnZBXwkq6sArIKjBKQZVCWQVkGC+4QkX2A7AOcPRLzslTLRshLurIRko2QbIRGO8Foy1MwL89fbllkV9vHAgjY2+tzP0TP1M74Cq+XqC9JsPAWWrqiGvEto61yy2WAN48PlsFNQSNx8r8AYAeRiurbiXmf/d1iupO/1W0UEq8H02sA/X79dfYnd0xfX/vgMOEAAAAASUVORK5CYII=\n';
      var minData = 0, maxData = 4860;
      option = {
        xAxis: {
          min: minData,
          max: maxData,
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#666'
            }
          },
          axisLabel: {
            fontSize: 10
          }
        },
        yAxis: {
          data: ['2016', '2017', '2018', '2019', '2020'],
          inverse: true,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: '#00004b',
            fontSize: 10
          }
        },
        grid: {
          x: 50,
          y: 23,
          x2: 44,
          y2: 17
        },
        series: [
          {
            // current data
            type: 'pictorialBar',
            symbol: spirit,
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolSize: 27,
            symbolBoundingData: maxData,
            data: [4741.8000, 4770.5000, 4800.5000, 4829.5000, 4858.3400],
            markLine: {
              symbol: 'none',
              label: {
                color: '#00004b',
                formatter: 'max: {c}',
                position: 'start'
              },
              lineStyle: {
                color: '#7BC8BC',
                type: 'dotted',
                opacity: 0.8,
                width: 2
              },
              data: [
                {
                  type: 'max'
                }
              ]
            },
            z: 10
          },
          {
            // full data
            type: 'pictorialBar',
            itemStyle: {
              opacity: 0.4
            },
            label: {
              show: true,
              formatter: function (params) {
                return ((params.value / maxData) * 100).toFixed(1) + ' %';
              },
              position: 'right',
              color: '#00004b',
              fontSize: 10
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbol: spirit,
            symbolSize: 27,
            symbolBoundingData: maxData,
            data: [4741.8000, 4770.5000, 4800.5000, 4829.5000, 4858.3400],
            z: 5
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
#PopulationByYear {
  height: 100%;
  width: 80%;
}
</style>
