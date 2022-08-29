<template>
  <div>

    <div style="width: 800px;height:580px;" id="world"></div>
    <el-row>
      <el-col :span="2" style="margin-left: 130px">
        <div>
          <el-button type="primary" style="background-color: #f1939c;border: #f1939c" circle>
            <el-icon @click.native="playMap()">
              <video-play/>
            </el-icon>
          </el-button>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="progressStep" style="text-align: left;">

          <el-steps :active="active" finish-status="primary" style="color: #f1939c" :space="80">

            <el-tooltip
                class="item"
                effect="light"
                content="2015-2016年，28个贫困县脱贫"
                placement="top-start"
            >
              <el-step title="2015年" id="2015"></el-step>
            </el-tooltip>

            <el-tooltip
                class="item"
                effect="light"
                content="2016-2017年，125个贫困县脱贫"
                placement="top-start"
            >
              <el-step title="2016年" id="2016" @click.native="yearSwitch(2016)"></el-step>
            </el-tooltip>

            <el-tooltip
                class="item"
                effect="light"
                content="2017-2018年，283个贫困县脱贫"
                placement="top-start"
            >
              <el-step title="2017年" id="2017" @click.native="yearSwitch(2017)"></el-step>
            </el-tooltip>

            <el-tooltip
                class="item"
                effect="light"
                content="2018-2019年，344个贫困县脱贫"
                placement="top-start"
            >
              <el-step title="2018年" id="2018" @click.native="yearSwitch(2018)"></el-step>
            </el-tooltip>


            <el-tooltip
                class="item"
                effect="light"
                content="2019-2020年，52个贫困县脱贫"
                placement="top-start"
            >
              <el-step title="2019年" id="2019" @click.native="yearSwitch(2019)"></el-step>
            </el-tooltip>


            <el-tooltip
                class="item"
                effect="light"
                content="截至2020年底，832个贫困县全部摘帽"
                placement="top-start"
            >
              <el-step title="2020年" id="2020" @click.native="yearSwitch(2020)"></el-step>
            </el-tooltip>
            <el-step title="2021年" id="2021" @click.native="yearSwitch(2021)"></el-step>

          </el-steps>

        </div>
      </el-col>
    </el-row>

  </div>


</template>
<script>

import china from "../assets/js/china"
import * as echarts from 'echarts';
import request from "@/utils/request";
import {VideoPlay} from "@element-plus/icons";

export default {
  name: "BodyMap",
  mounted() {
    this.first();
    this.yearSwitch(2016);
  },
  data() {
    return {
      index: {},
      mydata: {},
      sanData: {},
      geoCoordMap: {},
      active: 0,
    }
  },
  methods: {

    playMap() {
      console.log(this.active)
      if (this.active + 2016 <= 2021) {
        this.yearSwitch(this.active + 2016);
        var _this = this
        setTimeout(function () {
          _this.playMap();
        }, 1000);
      }
    }
    ,

    yearSwitch(year) {
      if (year > 2021)
        return
      request.get("map/" + year, {
        params: {
          year: year
        }
      }).then(res => {
        console.log(res)
        this.mydata = res.data
        this.active = year - 2016 + 1;
        this.loadMap()
        return res.data
      })
    }
    ,
    convertData: function (data) { // 处理数据函数
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(-1)
          });
        }
      }
      return res;
    }
    ,

    first() {
    },
    loadMap() {
      request.get("County/description").then(res => {
        console.log(res)
      })

      function randomData() {
        return Math.round(Math.random() * 500);
      }

      console.log(this.mydata)
      // this.sanData = [
      //   {name: "散点1", value: 10000},
      //   {name: "散点2", value: 170000},
      //   {name: "散点3", value: 1900000},
      //   {name: "散点4", value: 1900000},
      //   {name: "散点5", value: 1900000},
      // ]
      // this.geoCoordMap = {
      //   "散点1": [112.549248, 37.857014],
      //   "散点2": [116.000052, 37.857014],
      //   "散点3":  [116.302563,39.872545]
      // }


      var myChart = echarts.init(document.getElementById("world"));
      var option = {
        backgroundColor: '',
        title: {
          text: '贫困县分布图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        geo: { // 地图配置
          show: false,
          map: "china",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false,

        },
        visualMap: {
          min: 0, // 最小值
          max: 80, // 最大值
          text: ['80', '0'],
          realtime: false,
          calculable: false,
          seriesIndex: [0],
          inRange: {
            color: ['#e77c8e', '#ee3f4d', '#cc163a'] // 渐变颜色
          }
        },
        series: [
          //地图配置
          {
            name: "贫困县个数",
            type: 'map',
            mapType: 'china',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {

              emphasis: {
                areaColor: "#f0a1a8",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                borderWidth: 0
              }
            },
            data: this.mydata
          },//散点配置
          {
            visualMap: false,
            name: "数量",
            type: "effectScatter",
            coordinateSystem: 'geo',
            // data: this.convertData(this.sanData),
            symbolSize: 3,
            showEffectOn: "emphasis",
            rippleEffect: {brushType: 'stroke'},
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#FFFFFFFF"
              }
            }

          }]
      };
      myChart.setOption(option)
    }
  }
}


</script>

<style scoped>
.progressStep {
  margin-left: 2px;
}

</style>
