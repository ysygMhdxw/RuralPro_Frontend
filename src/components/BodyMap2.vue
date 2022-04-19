<template>
  <div>
    <div id="china" style="height: 580px;width: 720px"></div>
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
import * as echarts from "echarts";
import $ from "jquery";
import request from "@/utils/request";

export default {
  name: 'BodyMap2',

  data() {
    return {
      index: {},
      mydata: {},
      sanData: {},
      geoCoordMap: {},
      active: 0,
    }
  },
  mounted() {
    this.yearSwitch(2016);
    this.setYunnanMap();  // 通过post请求方式读取json文件，但要求json文件必须在vue工程下的static文件夹
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
    },
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
        this.setYunnanMap()
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
    setYunnanMap() {
      var myChart = echarts.init(document.getElementById('china')); // 获得容器所在位置
      var mapJsonPath = "static/ChinaGeo.json"; // json文件的相对路径

      var option = {
        visualMap: {
          // show: false,
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
        tooltip: {
          trigger: 'item',
        },
        geo: {
          map: 'china',
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: '#cc163a',
            borderColor: '#e77c8e'
          },
          emphasis: {
            label: {
              show: false,
            },
            itemStyle: {
              areaColor: '#f0a1a8'
            }
          },
          roam: false,
          "left": 15,
          "right": 5,
          "top": 5,
          "bottom": 5
        },
        series: [
          {
            name: "贫困县个数",
            roam:true,
            geoIndex:0,
            coordinateSystem: 'geo',
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

          }
        ]
      }

      $.get(mapJsonPath, function (geoJson) {
        echarts.registerMap('china', geoJson);
        myChart.setOption(option);
      });

    }
  }
}
</script>
<style>
</style>
