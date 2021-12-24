<template>
  <div id="ProvinceEmployNum" style="width: 800px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceEmployNum",
  mounted() {
    this.setProvinceEmployNum()
  },
  methods:{
    setProvinceEmployNum(){
      var chartDom = document.getElementById('ProvinceEmployNum');

      var myChart = echarts.init(chartDom);
      var option;

      var _rawdata = [
        ["industry", "2016", "2017", "2018", "2019", "2020"],
        ["国有单位", 165.18, 165.5439, 160.88, 155.84, 150.2995],
        ["城镇集体单位", 10.97, 9.1732, 8.65, 6.832, 7.0482],
        ["其他单位", 181.2, 171.0829, 187.85, 196.5326, 153.1295]
      ]

      run(_rawdata)

      function run(_rawData) {
        option = {
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: _rawData
          },
          title: {
            left:"center",
            text: "2016~2020年云南省各单位职工人数",
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '58%'},
          legend: {
            padding: [60, 0, 0, 0]
          },
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: {focus: 'series'}
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: {focus: 'series'}
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: {focus: 'series'}
            },
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '35%'],
              emphasis: {
                focus: 'self'
              },
              label: {
                formatter: '{b}: {@2016} ({d}%)'
              },
              encode: {
                itemName: 'company',
                value: '2016',
                tooltip: '2016'
              }
            }
          ]
        };

        myChart.on('updateAxisPointer', function (event) {
          const xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            const dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        });
        myChart.setOption(option);
      }

      option && myChart.setOption(option);


    }
  }
}
</script>

<style scoped>

</style>
