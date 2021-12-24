<template>
  <div id="GDPPerCapiagraph" style="width: 800px;height: 600px"></div>
</template>

<script>
import * as echarts from "echarts"
import request from "@/utils/request";
export default {
  name: "GDPGraph",
  data(){
    return{
      perDGPdata:[[]]
    }

  },
  mounted() {
    this.setGDPgraph()
  },
  methods: {
    setGDPgraph() {
      var chartDom = document.getElementById("GDPPerCapiagraph");

      // 初始化实例对象 echarts.init(dom容器)
      var myChart = echarts.init(chartDom);
      var option;
      request.get("County/get/city/gdp/per/capia/data").then(res => {
        console.log(res)
        this.perDGPdata=res.data
        run(this.perDGPdata)
      })


      function run(_rawData) {
        var cities = ['丽江市', '普洱市', '临沧市', '红河州', '西双版纳州', '大理州', '楚雄州', '德宏州', '怒江州', '保山市'];

        const datasetWithFilters = [];
        const seriesList = [];

        echarts.util.each(cities, function (city) {
          var datasetId = "dataset_" + city;
          datasetWithFilters.push({
            id: datasetId,
            fromDatasetId: "dataset_raw",
            transform: {
              type: "filter",
              config: {
                and: [
                  {dimension: "Year", gte: 2016},
                  {dimension: "City", "=": city},
                ],
              },
            },
          });

          seriesList.push({
            type: "line",
            datasetId: datasetId,
            showSymbol: false,
            name: city,
            endLabel: {
              show: true,
              formatter: function (params) {
                return params.value[0] + ": " + params.value[1];
              },
            },
            labelLayout: {
              moveOverlap: "shiftY",
            },
            emphasis: {
              focus: "series",
            },
            encode: {
              x: "Year",
              y: "PerGross",
              label: ["City", "PerGross"],
              itemName: "Year",
              tooltip: ["PerGross"],
            },
          });
        });

        // 指定配置项和数据
        option = {
          animationDuration: 10000,
          dataset: [
            {
              id: "dataset_raw",
              source: _rawData,
            },
            ...datasetWithFilters,
          ],
          title: {
            textAlign:"center",
            text: "2016~2020年云南省主要城市人均生产总值",
          },
          tooltip: {
            order: "valueDesc",
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            nameLocation: "middle"
          },
          yAxis: {
            name: "人均生产总值"
          },
          grid: {
            right: 140,
          },
          series: seriesList,
        };
        myChart.setOption(option);
      }

      // 将配置项设置给echarts实例对象，使用刚指定的配置项和数据显示图表。
      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
