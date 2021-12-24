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
            "children": [
              {
                "name": "稻谷产量",
                "size": 479.9,
                "value": 479.9
              },
              {
                "name": "小麦产量",
                "size": 81.2,
                "value": 81.2
              },
              {
                "name": "玉米产量",
                "size": 902.1,
                "value": 902.1
              },
              {
                "name": "豆类产量",
                "size": 123.1,
                "children":[
                  {
                    "name": "蚕豆产量",
                    "size": 45.56,
                    "value": 45.56
                  },
                  {
                    "name": "其他豆类产量",
                    "size": 77.54,
                    "value": 77.54
                  }
                ],
                "value": 123.1
              },
              {
                "name": "薯类产量",
                "size": 274.8,
                "value": 274.8
              },
              {
                "name": "其他粮食产量",
                "size": 108.9,
                "value": 108.9
              }
            ],
            "value": 1970
          },
          {
            "name": "油料产量",
            "size": 65.92,
            "children": [
              {
                "name": "花生产量",
                "size": 8.2,
                "value": 8.2
              },
              {
                "name": "油菜籽产量",
                "size": 56.07,
                "value": 56.07
              },
              {
                "name": "其他油料作物产量",
                "size": 1.65,
                "value": 1.65
              }
            ],
            "value": 65.92
          },
          {
            "name": "甘蔗产量",
            "size": 1930,
            "value": 1930
          },
          {
            "name": "烤烟产量",
            "size": 90.34,
            "value": 90.34
          },
          {
            "name": "茶叶产量",
            "size": 36.58,
            "value": 36.58
          },
          {
            "name": "园林水果产量",
            "size": 656,
            "value": 656
          }
        ]
      }

      run(data);
      function run(data) {
        const treemapOption = {
          title: {
            left:"center",
            text: "2016年云南省农作物产量"
          },
          series: [
            {
              type: 'treemap',
              id: 'echarts-package-size',
              animationDurationUpdate: 1000,
              roam: false,
              nodeClick: undefined,
              data: data.children,
              universalTransition: true,
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
              radius: ['20%', '90%'],
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
