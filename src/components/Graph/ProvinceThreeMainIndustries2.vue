<template>
  <div id="provinceThreeMainIndustries"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceThreeMainIndustries",
  mounted() {
    this.setThreeMainIndustries()
  },
  methods: {
    setThreeMainIndustries() {
      var chartDom = document.getElementById('provinceThreeMainIndustries');
      var myChart = echarts.init(chartDom);
      var option;

      var _rawData = [
        ["industry", "2016", "2017", "2018", "2019", "2020"],
        ["第一产业", 2055.78, 2195.11, 2338.37, 2498.86, 3037.62],
        ["第二产业", 5416.12, 5649.34, 6204.97, 6957.44, 7961.58],
        ["第三产业", 6147.27, 6875.5, 7833, 8424.82, 12224.55]
      ]
      run(_rawData)

      function run(_rawData) {
        option = {
          color: [
            '#6e85b4',
            '#EB7D72',
            '#7BC8BC',
            '#f3f37b',
            '#7dbbe8',
            '#FCDA4A'
          ],
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: _rawData
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              textStyle: {
                fontSize: 10
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#666'
              }
            }
          },
          yAxis: {
            gridIndex: 0,
            axisLabel: {
              textStyle: {
                fontSize: 10
              }
            },
            splitLine: {
              show: true,
              interval: 'auto',
              lineStyle: {
                color: '#b2ccb2'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00004b'
              }
            }
          },
          grid: {
            x: 52,
            y: 75,
            x2: 45,
            y2: 20
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
              center: ['47%', '20%'],
              emphasis: {
                focus: 'self'
              },
              width: '100%',
              height: '90%',
              label: {
                formatter: '{b}: {@2016} ({d}%)',
                fontSize: 10
                // formatter: '{@2016} ({d}%)'
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
    },
  },
}

</script>

<style scoped>
#provinceThreeMainIndustries {
  height: 100%;
  width: 80%;
}
</style>
