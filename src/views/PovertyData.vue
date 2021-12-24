<template>
  <div id="parallax-world-of-ugg">

    <section>
      <div class="title">
        <h1>Population</h1>
        <br>
      </div>
    </section>

    <section>
      <div class="parallax-one">
        <h2 style="opacity: 100%">人口</h2>
      </div>
    </section>

    <section>
      <div class="block" style="left: 20px;width: 1000px">
        <p><span class="first-character sc">截</span>
          至2015年年底，全国还有14个集中连片特殊困难地区、832个贫困县、12.8万个建档立卡贫困村，贫困人口达5575万人，相当于中等人口规模国家的总人数。
          二是难度大。未脱贫人口大多贫困程度更深、自身发展能力较弱，脱贫攻坚成本更高、难度更大。
          三是时间紧。中国已提出从2016年起，平均每年要减贫1000万人以上。
          四是易返贫。不少贫困户稳定脱贫能力差，因灾、因病、因学、因婚、因房返贫情况时有发生，新的贫困人口还会出现。
        </p>
        <p class="line-break margin-top-10"></p>
        <div id="povertyPopolationGraph" style="margin-top:40px;width: 900px;height: 500px"></div>
      </div>
    </section>

    <section>
      <div class="parallax-two">
        <h2>云南贫困县人口</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <p><span class="first-character ny">B</span></p>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10"></p>
      </div>
    </section>

    <section>
      <div class="parallax-three">
        <h2>ENCHANTED FOREST</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <p><span class="first-character atw">W</span>k2</p>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10">kkk</p>
      </div>
    </section>

  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "Total",
  mounted() {
    this.setPovertyGraphh()
  },
  methods:{
    setPovertyGraphh(){
      var chartDom = document.getElementById('povertyPopolationGraph');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true }
          }
        },
        legend: {
          data: ['贫困人口', '贫困标准']
        },
        xAxis: [
          {
            type: 'category',
            data: [
              1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
              1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
              2009, 2010, 2011, 2012, 2013, 2014, 2015
            ],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '贫困人口',

            axisLabel: {
              formatter: '{value} 万人'
            }
          },
          {
            type: 'value',
            name: '贫困标准',

            axisLabel: {
              formatter: '{value} 元'
            }
          }
        ],
        series: [
          {
            name: '贫困人口',
            type: 'bar',
            data: [
              12500, 13100, 12200, 9600, 10200, 8500, 9400, 8000, 7500, 7000, 6540,
              5800, 4962, 4210, 3412, 3209, 9209, 8645, 8517, 7587, 6432, 5698, 4320,
              4007, 3597, 2688, 12200, 9899, 8249, 7017, 5575
            ]
          },
          {
            name: '贫困标准',
            type: 'line',
            yAxisIndex: 1,
            data: [
              206, 213, 227, 236, 259, 300, 304, 317, 350, 440, 530, 580, 640, 635,
              625, 625, 872, 869, 882, 924, 994, 958, 1067, 1196, 1196, 1274, 2536,
              2625, 2736, 2800, 1855
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
/*@import url(https://fonts.googleapis.com/css?family=Oswald:300,400,700);*/
/*@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic);*/

h1 {
  font-family: 华文中宋;
}

/* Override UGG site */
#provinceGross {
  width: 100%;
  padding: 0;
}

.content-asset p {
  margin: 0 auto;
}

.breadcrumb {
  display: none;
}

/* Helpers */
/**************************/
.margin-top-10 {
  padding-top: 10px;
}

.margin-bot-10 {
  padding-bottom: 10px;
}

/* Typography */
/**************************/
#parallax-world-of-ugg h1 {
  font-family: 华文中宋;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  color: black;
  padding: 0;
  margin: 0;
}

#parallax-world-of-ugg h2 {
  font-family: 华文中宋;
  font-size: 120px;
  letter-spacing: 10px;
  text-align: center;
  color: #FFFFFF;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
  opacity: .9;
}

#parallax-world-of-ugg h3 {
  font-family: 华文中宋;
  font-size: 14px;
  line-height: 0;
  font-weight: 400;
  letter-spacing: 8px;
  text-transform: uppercase;
  color: black;
}

#parallax-world-of-ugg p {
  font-family: 华文中宋;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
}

.first-character {
  font-weight: 400;
  float: left;
  font-size: 84px;
  line-height: 64px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
  font-family: 'Source Sans Pro', sans-serif;
}

.sc {
  color: #3b8595;
}

.ny {
  color: #3d3c3a;
}

.atw {
  color: #c48660;
}

/* Section - Title */
/**************************/
#parallax-world-of-ugg .title {
  background: white;
  padding: 60px;
  margin: 0 auto;
  text-align: center;
}

#parallax-world-of-ugg .title h1 {
  font-size: 35px;
  letter-spacing: 8px;
}

/* Section - Block */
/**************************/
#parallax-world-of-ugg .block {
  background: white;
  padding: 60px;
  width: 820px;
  margin: 0 auto;
  text-align: justify;
}

#parallax-world-of-ugg .block-gray {
  background: #f2f2f2;
  padding: 60px;
}

#parallax-world-of-ugg .section-overlay-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.70;
}

/* Section - Parallax */
/**************************/
#parallax-world-of-ugg .parallax-one {
  padding-top: 200px;
  padding-bottom: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/img/populationBG.jpg");
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

#parallax-world-of-ugg .parallax-two {
  padding-top: 200px;
  padding-bottom: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url(https://images.unsplash.com/photo-1432163230927-a32e4fd5a326?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=);
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#parallax-world-of-ugg .parallax-three {
  padding-top: 200px;
  padding-bottom: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url(https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=);
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

/* Extras */
/**************************/
#parallax-world-of-ugg .line-break {
  border-bottom: 1px solid black;
  width: 150px;
  margin: 0 auto;
}

/* Media Queries */
/**************************/
@media screen and (max-width: 959px) and (min-width: 768px) {
  #parallax-world-of-ugg .block {
    padding: 40px;
    width: 620px;
  }
}

@media screen and (max-width: 767px) {
  #parallax-world-of-ugg .block {
    padding: 30px;
    width: 420px;
  }

  #parallax-world-of-ugg h2 {
    font-size: 30px;
  }

  #parallax-world-of-ugg .block {
    padding: 30px;
  }

  #parallax-world-of-ugg .parallax-one, #parallax-world-of-ugg .parallax-two, #parallax-world-of-ugg .parallax-three {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

@media screen and (max-width: 479px) {
  #parallax-world-of-ugg .block {
    padding: 30px 15px;
    width: 290px;
  }
}
</style>
