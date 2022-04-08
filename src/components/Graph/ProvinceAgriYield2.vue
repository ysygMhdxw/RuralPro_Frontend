<template>
  <div id="ProvinceAgriYield" style="width: 800px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "ProvinceAgriYield",
  mounted() {
    this.setProvinceAgriYield()
  },
  methods:{
    setProvinceAgriYield(){
      var chartDom = document.getElementById('ProvinceAgriYield');
      var myChart = echarts.init(chartDom);
      var option;

      var data={
        "name": "totalYield",
        "size": 4748.84,
        "children": [
          {
            "name": "粮食产量",
            "size": 1970,
            "itemStyle": {
              "color": '#EB7D72'
            },
            "children": [
              {
                "name": "稻谷产量",
                "size": 479.9,
                "value": 479.970,
                "itemStyle": {
                  "color": '#EB7D72'
                },
              },
              {
                "name": "小麦产量",
                "size": 81.2,
                "value": 81.270,
                "itemStyle": {
                  "color": '#EB7D72'
                },
              },
              {
                "name": "玉米产量",
                "size": 902.1,
                "value": 902.170,
                "itemStyle": {
                  "color": '#EB7D72'
                },
              },
              {
                "name": "豆类产量",
                "size": 123.1,
                "children":[
                  {
                    "name": "蚕豆产量",
                    "size": 45.56,
                    "value": 45.5670,
                    "itemStyle": {
                      "color": '#EB7D72'
                    },
                  },
                  {
                    "name": "其他豆类产量",
                    "size": 77.54,
                    "value": 77.5470,
                    "itemStyle": {
                      "color": '#EB7D72'
                    },
                  }
                ],
                "value": 123.170,
                "itemStyle": {
                  "color": '#EB7D72'
                },
              },
              {
                "name": "薯类产量",
                "size": 274.8,
                "value": 274.870,
                "itemStyle": {
                  "color": '#EB7D72'
                },
              },
              {
                "name": "其他粮食产量",
                "size": 108.9,
                "value": 108.970,
                "itemStyle": {
                  "color": '#EB7D72'
                },
              }
            ],
            "value": 1970
          },
          {
            "name": "油料产量",
            "size": 65.92,
            "itemStyle": {
              "color": '#f3f37b'
            },
            "children": [
              {
                "name": "花生产量",
                "size": 8.2,
                "value": 8.2,
                "itemStyle": {
                  "color": '#f3f37b'
                },
              },
              {
                "name": "油菜籽产量",
                "size": 56.07,
                "value": 56.07,
                "itemStyle": {
                  "color": '#f3f37b'
                },
              },
              {
                "name": "其他油料作物产量",
                "size": 1.65,
                "value": 1.65,
                "itemStyle": {
                  "color": '#f3f37b'
                },
              }
            ],
            "value": 65.92,
            "itemStyle": {
              "color": '#f3f37b'
            },
          },
          {
            "name": "甘蔗产量",
            "size": 1930,
            "value": 1930,
            "itemStyle": {
              "color": '#7BC8BC'
            }
          },
          {
            "name": "烤烟产量",
            "size": 90.34,
            "value": 90.34,
            "itemStyle": {
              "color": '#da4848'
            }
          },
          {
            "name": "茶叶产量",
            "size": 36.58,
            "value": 36.58,
            "itemStyle": {
              "color": '#7dbbe8'
            }
          },
          {
            "name": "园林水果产量",
            "size": 656,
            "value": 656,
            "itemStyle": {
              "color": '#6e85b4'
            }
          }
        ]
      }

      run(data);
      function run(data) {
        const treemapOption = {
          series: [
            {
              type: 'treemap',
              id: 'echarts-package-size',
              animationDurationUpdate: 1000,
              roam: false,
              nodeClick: undefined,
              data: data.children,
              universalTransition: true,
              width: '83%',
              height: '83%',
              left: '12%',
              top: '8%',
              backgroundColor: 'transparent',
              label: {
                show: true
              },
              breadcrumb: {
                show: false
              }
            }
          ]
        };
        const sunburstOption = {
          series: [
            {
              type: 'sunburst',
              id: 'echarts-package-size',
              radius: ['30%', '110%'],
              animationDurationUpdate: 1000,
              nodeClick: undefined,
              data: data.children,
              universalTransition: true,
              itemStyle: {
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,.5)'
              },
              label: {
                show: false
              }
            }
          ]
        };
        let currentOption = treemapOption;
        myChart.setOption(currentOption);
        setInterval(function () {
          currentOption =
              currentOption === treemapOption ? sunburstOption : treemapOption;
          myChart.setOption(currentOption);
        }, 3000);
      }

      option && myChart.setOption(option);

    }
  }
}
</script>

<style scoped>

</style>
