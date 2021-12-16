<template>
  <div id="threeMajorIndustryGraph" style="height: 600px;width: 800px"></div>
</template>

<script>
export default {
  name: "ThreeMajorIndustryGraph",
  mounted() {
  },
  data(){

  },
  methods:{
    setThreeMajorIndustryGraph(){
      var chartDom = document.getElementById('main');

      var myChart = echarts.init(chartDom);
      var option;


      function run (_rawData) {
        option = {
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: _rawData
          },
          title: {
            text: "2016~2020年丽江市三大产业生产总值",
          },
          xAxis: { type: 'category' },
          yAxis: { gridIndex: 0 },
          grid: { top: '55%' },
          series: [
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row',
              emphasis: { focus: 'series' }
            },
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              emphasis: {
                focus: 'self'
              },
              label: {
                formatter: '{b}: {@2016} ({d}%)'
              },
              encode: {
                itemName: 'industry',
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
