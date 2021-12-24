<template>
  <el-backtop />
  <div id="parallax-world-of-ugg">
    <section>
      <div class="title">
        <p>减贫路上</p>
        <h1>Overview</h1>
        <p style="margin-top: 20px;font-family: 'Comic Sans MS';color: #BD3131;font-weight: bold;font-size: 20px">Tab Of Contents</p>
        <p>
          |<a style="text-decoration: none;color: #3d3c3a" href="#population">人口</a>|
          |<a style="text-decoration: none;color: #3d3c3a" href="#economy">经济</a>|
          |<a style="text-decoration: none;color: #3d3c3a" href="#country">农业和农村</a>|
          |<a style="text-decoration: none;color: #3d3c3a" href="#livelihood">民生</a>|
          |<a style="text-decoration: none;color: #3d3c3a" href="#industry">工业</a>|
        </p>
        <br>
      </div>
    </section>

    <!--    1.人口板块-->

    <section>
      <div id="population" class="parallax-one">
        <h2 style="opacity: 100%">人口</h2>
      </div>
    </section>

    <section>
      <div id="text1" class="block textFloat" style="left: 20px;width: 1000px">
        <p><span class="first-character sc">截</span>
          至2015年年底，全国还有14个集中连片特殊困难地区、832个贫困县、12.8万个建档立卡贫困村，贫困人口达5575万人，相当于中等人口规模国家的总人数。
          二是难度大。未脱贫人口大多贫困程度更深、自身发展能力较弱，脱贫攻坚成本更高、难度更大。
          三是时间紧。中国已提出从2016年起，平均每年要减贫1000万人以上。
          四是易返贫。不少贫困户稳定脱贫能力差，因灾、因病、因学、因婚、因房返贫情况时有发生，新的贫困人口还会出现。
        </p>
        <div id="povertyPopolationGraph" style="margin-top:40px;width: 900px;height: 500px"></div>
        <p class="line-break margin-top-10"></p>
      </div>
    </section>
    <h1><span style="color: #3b8595">-</span>云南省<span style="color: #3b8595">-</span></h1>
    <section>
      <div id="text5" class="block textFloat" style="left: 20px;width: 1000px">
        <p><span class="first-character sc">总</span>
          体上，云南省依旧为农村人口居大部分，农村与非农村人口占比大约3.51：1。但是随城镇化建设推荐，非农村人口比例在上升，从16年的21.33%上升到20年的22.16%。
        </p>
        <ProvincePopulation style="margin-top:40px;width: 900px;height: 500px"></ProvincePopulation>
        <p class="line-break margin-top-10"></p>
      </div>
    </section>

    <!--2.经济板块-->

    <section>
      <div id="economy" class="parallax-two">
        <h2>经济</h2>
        <p style="color: #FFFFFF">以云南为例</p>
      </div>
    </section>

    <h1 style="margin-top: 40px"><span style="color: #3b8595">-</span>生产总值<span style="color: #3b8595">-</span></h1>


    <section>
      <div class="block textFloat" id="text2" style="display:inline-block;">
        <p><span class="first-character ny">云</span>
          南省经济水平在全国处于中下游，但年生产总值总体稳步上升。全省地区生产总值从2016年的1.6万亿元增加到2020年的2.45万亿元。年均增速为7.8%。其中，2018年首次跃上2万亿元台阶，2019年达到2.3万亿元，经济总量排位由全国第23位（“十二五”末）上升到第18位。2020年受新冠疫情冲击，GDP增速出现明显回落，但增速仍保持在全国第3位。分季度来看，一季度、上半年、前三季度、全年云南省GDP增速分别为-4.3%、0.5%、2.7%和4.0%，展现出了较强的经济韧性，尤其是四季度复苏势头强劲，未来经济增长前景向好。
        </p>
        <div style="position: relative; float: left; ">
          <ProvinceperGross style="margin-top:40px;width:380px;height: 450px;align-self: end"/>
        </div>
        <div style="position: relative;float:right;">
          <ProvinceGross style="margin-top:40px;width: 480px;height: 450px;align-self: center"/>
        </div>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10"></p>
      </div>
    </section>

    <h1><span style="color: #3b8595">-</span>三大产业<span style="color: #3b8595">-</span></h1>


    <section>
      <div class=" block textFloat" id="text3" style=" display:inline-block;left: 20px;width: 1000px">
        <div class="horizontal">
          <div id="div1" style="width: 300px;margin-top: 20px">
            <p><span class="first-character ny">十</span>
              三五”以来，云南省产业结构持续优化，呈现“三二一”的状态，一三产业比重上升，第二产业比重下降。截止至2020年，第一产业增加值3598.91亿元，增长5.7%；第二产业增加值8287.54亿元，增长3.6%；第三产业增加值12635.45亿元，增长3.8%。三次产业结构为14.7∶33.8∶51.5。农业在全省经济发展当中的起“压舱石”作用，基础地位突出。工业虽然占比下降，但增加值增长快速，已突破5400亿，是云南经济争先进位的重要因素。
              第三产业占比过半，显然成为经济增长的主要动力，形成投资、消费“双拉动”新格局。</p>
          </div>
          <div id="div2" style="position: relative;">
            <ProvinceThreeMainIndustries style="margin-left:60px;width: 520px;height: 500px;align-self: center"/>
          </div>
        </div>

        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10"></p>
      </div>
    </section>

    <h1><span style="color: #3b8595">-</span>公共财政<span style="color: #3b8595">-</span></h1>


    <section>
      <div class="block textFloat" style="display:inline-block;">
        <p><span class="first-character ny">总</span>
          体看，云南省财政自给能力较弱，收入质量有待提高。16年以来，云南省财政均是支出大于收入，人均公共预算支出高达收入的三倍有余。
          2020年，云南省实现一般公共预算收入2116.7亿元，居全国第18位。一般公共预算支出为6974亿元，位列全国第12位。财政平衡率为30.35%，全国排名第22位，财政自给能力居于全国中下游水平，对上级政府补助及转移支付依赖程度较大。
          从2020年较2019年变化来看，一般公共预算收入较2019年上涨43.1亿元，增幅为2.1%，增幅在17个财政收入正增长的省份中排第9位；在疫情和减税降费因素影响下，税收收入同比仅微增0.2%，非税收入同比增长6.5%，其中罚没收入大幅增长59%。
        </p>
        <div style="position: relative; float: left; ">
          <ProvincePublicBudget style="margin-top:40px;width:380px;height: 450px;align-self: end"/>
        </div>
        <div style="position: relative;float:right;">
          <ProvincePublicPerBudget style="margin-top:40px;width: 480px;height: 450px;align-self: center"/>
        </div>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10"></p>
      </div>
    </section>

    <!--   3. 农业和农村-->


    <section>
      <div id="country" class="parallax-three">
        <h2>农业与农村</h2>
        <p style="color: #FFFFFF">以云南为例</p>
      </div>
    </section>

    <h1 style="margin-top: 40px"><span style="color: #3b8595">-</span>农作物产量<span style="color: #3b8595">-</span></h1>


    <section>
      <div class=" block textFloat" style=" isplay:inline-block;left: 20px;width: 1000px">
        <div class="horizontal">
          <div style="width: 360px;margin-top: 20px;float:left;">
            <p><span class="first-character atw">云
            </span>南的农业生产条件基本包括特色农业和林业产业;
              近年来稳定发展粮食生产,提高茶叶、橡胶、甘蔗、烟草、咖啡等传统作物生产水平;大力发展石斛、重楼、滇红花等道地中药材及香蕉、菠萝等热带水果。推进生猪、肉牛和家禽的规模化养殖,提升集聚度。因地制宜发展水奶牛、乌骨羊特色养殖和野猪、竹鼠等特种养殖及水产养殖。支持特色种养殖基地建设,积极促进农产品就地加工转化,推动绿色(
              有机) 认证和国家地理保护标志认证,做大做强区域品牌。鼓励云南农垦企业整合以天然橡胶为主的优势产业,培养橡胶龙头企业集团,建设立足国内、辐射东南亚和南亚的橡胶主产区。
              同时,积极发展兼具生态经济功能的林木产业,大力发展核桃、油茶和小桐子等木本油料,逐步培育红豆杉、柚木、铁力木、红椿等珍贵木用材林,积极发展竹藤生产。鼓励发展林间种药、养畜及野生菌采集等林下经济。
            </p>
          </div>
          <div style="position: relative;float: right">
            <ProvinceAgriYield style="margin-top:40px;width: 480px;height: 450px;align-self: center"/>
          </div>
        </div>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10"></p>
      </div>
    </section>

    <h1><span style="color: #3b8595">-</span> 牲畜及家禽的出栏与存栏<span style="color: #3b8595">-</span></h1>

    <section>
      <div class=" block textFloat" style="left: 20px;width: 1000px">
        <div>
          <div style="display: inline-block">
            <ProvinceStorageComeOut style="float: left;margin-top:40px;width: 430px;height: 520px;align-self: center"/>
            <ProvinceMeatMilk style="float: right;margin-top:40px;width: 430px;height: 520px;align-self: center"/>
          </div>
          <div style="margin-top: 20px;">
            <p><span class="first-character atw">十
            </span>“十三五”以来，云南省致力于进行农业现代化建设，把提高综合生产能力、推动农业科技进步、发展特色农业和畜牧业为重点。目前，高原特色现代农业已成为全省重点培育的“五个万亿级”产业之一，鲜切花、天然橡胶、咖啡、烤烟、核桃、中药材、茶叶种植面积和产量居全国第1位，蔗糖面积和产量居全国第2位；生猪、肉牛存出栏数稳居全国前6位。2019年，全省农产品出口额331亿元，农产品出口额多年位居全国第6位、西部省区第1位；20年上半年，在全国农产品出口同比下降3.8%的情况下，云南农产品出口19.1亿美元，同比逆势增长15.1%。
            </p>
          </div>
        </div>
        <p class="line-break margin-top-10"></p>
        <p class="margin-top-10"></p>
      </div>
    </section>


    <!--    4.民生-->

    <section>
      <div id="livelihood" class="parallax-four">
        <h2>民生</h2>
        <p style="color: #FFFFFF">以云南为例</p>
      </div>
    </section>

    <h1 style="margin-top: 40px"><span style="color: #3b8595">-</span>职工人数<span style="color: #3b8595">-</span></h1>


    <section>
      <div class="block">
        <p><span class="first-character atw">W</span>文字</p>
        <ProvinceEmployNum/>
        <p class="line-break margin-top-10"></p>

      </div>
    </section>

    <h1><span style="color: #3b8595">-</span>年末余额<span style="color: #3b8595">-</span></h1>


    <section>
      <div class="block">
        <p><span class="first-character atw">W</span>文字
        </p>
        <Provincedeposits/>
        <p class="line-break margin-top-10"></p>
      </div>
    </section>

    <!--    5.工业-->
    <section>
      <div id="industry" class="parallax-five">
        <h2>工业</h2>
      </div>
    </section>

    <section>
      <div class="block">
        <p><span class="first-character atw">全</span>
          省工业在“十三五”期间经济快速发展，工业增加值突破5000亿元大关，2020年达5457.96亿元，年均增速达8.0%，
          高于全省地区生产总值平均增速0.2个百分点。随着石油炼化项目、大型水电站陆续建成投产，能源工业迅速崛起，
          2017年以来，能源产业连续3年成为全省经济增长的第一拉动力，成为工业第一大支柱产业；随着绿色“三张牌”战略推进，绿色铝绿色硅产业成为全省工业增长新引擎。
        </p>
        <div>
          <ProvinceTotalProfits style="margin-top:40px;height: 450px;align-self: center"/>
          <ProvinceTotalAsset style="margin-top:40px;height: 560px;align-self: center"/>
        </div>
        <p class="line-break margin-top-10"></p>

      </div>
    </section>

  </div>
</template>

<script>
import * as echarts from 'echarts';
import PopulationGraph from "@/components/Graph/PopulationGraph";
import GDPGraph from "@/components/Graph/PerGDPGraph";
import ProvinceGross from "@/components/Graph/ProvinceGross";
import ProvinceThreeMainIndustries from "@/components/Graph/ProvinceThreeMainIndustries";
import ProvinceperGross from "@/components/Graph/ProvinceperGross";
import ProvincePopulation from "@/components/Graph/ProvincePopulation";
import ProvincePublicBudget from "@/components/Graph/ProvincePublicBudget";
import ProvincePublicPerBudget from "@/components/Graph/ProvincePublicPerBudget";
import ProvinceAgriYield from "@/components/Graph/ProvinceAgriYield";
import ProvinceStorageComeOut from "@/components/Graph/ProvinceStorageComeOut";
import ProvinceMeatMilk from "@/components/Graph/ProvinceMeatMilk";
import Provincedeposits from "@/components/Graph/Provincedeposits";
import ProvinceTotalAsset from "@/components/Graph/ProvinceTotalAsset";
import ProvinceTotalProfits from "@/components/Graph/ProvinceTotalProfits";
import ProvinceEmployNum from "@/components/Graph/ProvinceEmployNum";

export default {
  name: "Total",
  components: {
    ProvinceEmployNum,
    ProvinceTotalProfits,
    ProvinceTotalAsset,
    Provincedeposits,
    ProvinceMeatMilk,
    ProvinceStorageComeOut,
    ProvinceAgriYield,
    ProvincePublicPerBudget,
    ProvincePublicBudget,
    ProvincePopulation,
    ProvinceperGross, ProvinceThreeMainIndustries, ProvinceGross, GDPGraph, PopulationGraph
  },
  data() {
    return {}
  },
  mounted() {
    this.setPovertyGraphh()
    window.addEventListener('scroll', this.watchScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.watchScroll);
  },
  methods: {
    watchScroll() {
      // 滚动的距离
      var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      // 容器的高度
      var offsetTop = document.querySelector("#text1").offsetHeight;
      var text1 = document.querySelector("#text1");
      var text2 = document.querySelector("#text2");
      console.log("scrollTop=>", scrollTop, "  offsetTop=>", offsetTop);
      //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
      var k = Math.abs(scrollTop - offsetTop);
      if (k >= 500 && k <= 600) {
        console.log(scrollTop - offsetTop)
        text1.classList.remove("textFloat");
        void text1.offsetWidth;
        text1.classList.add("textFloat");
      }
      if (k >= 1000 && k <= 1100) {
        text2.classList.remove("textFloat");
        void text2.offsetWidth;
        text2.classList.add("textFloat");
      }
    },
    setPovertyGraphh() {
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
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true}
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
  padding-top: 50px;
  line-height: 40px;
  margin-top: 40px;
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
  width: 1000px;
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
  background-image: url("../assets/img/livelihood.jpeg");
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

#parallax-world-of-ugg .parallax-four {
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

#parallax-world-of-ugg .parallax-five {
  padding-top: 200px;
  padding-bottom: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/img/industry_bg.jpg");
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

.textFloat {
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1; /*设置动画播放次数*/
  animation-fill-mode: forwards; /*设置样式以在动画不播放时应用元素。forward是设置动画结束后，使用元素的结束属性值*/
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0; /*设置不透明度*/
  }
  100% {
    opacity: 1;
  }
}

#div1, #div2 {
  display: inline-block;
}

#div1 {
  float: left;
}

#div2 {
  float: right;
}

.horizontal {
  display: inline-block;
}



</style>
