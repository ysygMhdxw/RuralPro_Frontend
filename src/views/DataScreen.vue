<template>
  <div id="page-wrapper">
      <div class="header-wrapper">
        <div class="header">
          <h1>云南省减贫数据大屏</h1>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="left-wrapper">
          <div class="top-wrapper">
            <h2><img src="../assets/img/diamond.png"/>全省GDP数据一览</h2><span>{{titleGDP}}</span>
            <div class="graph-container gdp">
              <ProvinceGross2 v-if="btnGDP" style="float:left;margin-top:1.2%;width: 96%;height:86%;"/>
              <ProvinceperGross2 v-else style="float:left;margin-top:1.2%;width: 96%;height:86%;"/>
              <div class="btn-container">
                <div class="btnUp btn1" @click="btn1Click"></div>
                <div class="btnDown btn2" @click="btn2Click"></div>
              </div>
            </div>
          </div>
          <div class="middle-wrapper">
            <h2><img src="../assets/img/diamond.png"/>三大产业结构</h2><span>2016~2020年三大产业生产总值（单位：亿元）</span>
            <div class="graph-container three-industry">
              <ProvinceThreeMainIndustries2 style="float:left;margin-top:1.2%;width: 99%;height:86%;"/>
            </div>
          </div>
          <div class="bottom-wrapper">
            <h2><img src="../assets/img/diamond.png"/>一般公共预算及支出</h2><span>{{titlePubBudget}}</span>
            <div class="graph-container public-payment">
              <ProvincePublicBudget2 v-if="btnPubBudget"  style="float:left;margin-top:1.2%;width: 96%;height:86%;"/>
              <ProvincePublicPerBudget2 v-else style="float:left;margin-top:1.2%;width: 96%;height:86%;"/>
              <div class="btn-container">
                <div class="btnUp btn3" @click="btn3Click"></div>
                <div class="btnDown btn4" @click="btn4Click"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="center-wrapper">
          <div class="top-wrapper">
            <div class="graph-container data-view">
              <div class="data-wrapper">
                <div class="data-container">GDP/人均GDP<br>
                  排名（m/34）
                </div>
                <div class="data-container">GDP增长率<br>
                  排名（m/34）
                </div>
                <div class="data-container">贫困县数量<br>
                  排名（1/832）
                </div>
              </div>
            </div>
          </div>
          <div class="middle-wrapper">
            <div class="graph-container map">
              <YunnanMap style="background:rgba(210,210,210,0.25);margin:0 2%;width: 96%;height:100%;border:1px solid #da6161;box-shadow:0px 0px 2px 1px #be7575;border-radius: 12px;"/>
            </div>
          </div>
          <div class="bottom-wrapper">
            <div class="graph-container achievement">
              <div class="news-wrapper">
                <div class="news-title">云南省减贫脱贫成果</div>
                <div class="news-content">截至2020年底，云南省933万农村贫困人口全部脱贫、8502个贫困村全部出列、88个贫困县全部摘帽，11个“直过民族”和人口较少民族整体脱贫，困扰云南千百年的绝对贫困问题得到历史性解决。...</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-wrapper">
          <div class="top-wrapper">
            <span>2016~2020年全省人口总数（单位：万）</span><h2>人口<img src="../assets/img/diamond.png"/></h2>
            <div class="graph-container population">
              <PopulationByYear style="float:right;margin-top:1.2%;width: 99%;height:86%;"/>
            </div>
          </div>
          <div class="middle-wrapper">
            <span>2016~2020年全省各农作物平均产量（单位：万吨）</span><h2>农产品分布<img src="../assets/img/diamond.png"/></h2>
            <div class="graph-container agricultural">
              <ProvinceAgriYield2 style="float:right;margin-top:1.2%;width: 99%;height:86%;"/>
            </div>
          </div>
          <div class="bottom-wrapper">
            <span>{{titleProfits}}</span><h2>商业数据统计<img src="../assets/img/diamond.png"/></h2>
            <div class="graph-container business">
              <div class="btn-container" style="position:relative; left:10px;">
                <div class="btnUp btn5" @click="btn5Click"></div>
                <div class="btnDown btn6" @click="btn6Click"></div>
              </div>
              <ProvinceTotalAsset2 v-if="btnProfits" style="float:right;margin-top:1.2%;width: 95.5%;height:86%;"/>
              <ProvinceTotalProfits2 v-else style="float:right;margin-top:1.2%;width: 95.5%;height:86%;"/>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  #page-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(#fff, #ffedd8);
  }

  .header-wrapper {
    height: 3.5vh;
    margin-top: 0.8vh;
  }

  .header {
    width: 100%;
    height: 20px;
    background-image: url("../assets/img/border.png");
    background-size: 100% 100%;
  }

  h1 {
    display: inline-block;
    background-color: #fff;
    padding: 0 22px;
    line-height: 22px;
    font-size: 19px;
    color: #BD3131;
    letter-spacing: 1px;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
  }

  h2 {
    display: inline;
    font-size: 16px;
    color: #BD3131;
    border-bottom: 2px solid #BD3131;
  }

  h2:after {
    content: '';
    width: 10vh;
    height: 0.2vh;
    background-color: #BD3131;
  }

  .left-wrapper h2 img {
    height: 13px;
    width: 13px;
    margin-right: 3px;
  }

  .right-wrapper h2 img {
    height: 13px;
    width: 13px;
    margin-left: 3px;
  }

  .left-wrapper span {
    margin-left: 20px;
    font-size: 13px;
    font-weight: 600;
    color: #444;
  }

  .right-wrapper span {
    margin-right: 20px;
    font-size: 13px;
    font-weight: 600;
    color: #444;
  }

  .left-wrapper {
    text-align: left;
  }

  .right-wrapper {
    text-align: right;
  }

  .left-wrapper {
    padding-left: 5vh;
  }

  .right-wrapper {
    padding-right: 5vh;
  }

  .left-wrapper, .center-wrapper, .right-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .center-wrapper {
    flex: 1.25;
  }

  .right-wrapper {
    flex: 1;
  }

  .map {
    margin: 0 auto;
  }

  .top-wrapper, .middle-wrapper, .bottom-wrapper {
    flex: 1;
    margin-bottom: 0.5vh;
  }

  .bottom-wrapper {
    margin-bottom: 0;
  }

  .center-wrapper .middle-wrapper {
    flex: 4;
  }

  .center-wrapper .bottom-wrapper {
    flex: 1.6;
  }

  .graph-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .data-wrapper {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin-top: 2.2vh;
    width: 90%;
    height: 10vh;
  }

  .data-container {
    flex: 1;
    margin: 0 1px;
    background-color: #b74343;
    box-shadow: 0px 0px 2px 1px #d27067;
    border: 1px solid #ddd;
    color: #ffffe5;
    height: 100%;
    padding: 14px 0;
    border-radius: 2px;
    font-size: 16px;
  }

  .news-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2vh;
    width: 85%;
    height: 20vh;
  }

  .news-title {
    margin: 0 auto;
    width: 100%;
    border-radius: 5px;
    padding: 4px;
    background-color: #d27067;
    color: #ffffe5;
    font-size: 18px;
  }

  .news-content {
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px #ddd;
    border: 1px solid #86d0c4;
    margin-top: 0.6vh;
    background-color: #fff;
    padding: 6px 10px;
    text-indent: 2em;
    text-align: left;
    font-size: 15px;
    color: #333;
  }

  .btn-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .btnUp, .btnDown {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }

  .btnUp {
    border-bottom: 18px solid #f5a9a9;
    margin-bottom: 10px;
  }

  .btnDown {
    border-top: 18px solid #f5a9a9;
  }

  .btnUp:hover {
    cursor: pointer;
    border-bottom: 18px solid #c74141;
  }

  .btnDown:hover {
    cursor: pointer;
    border-top: 18px solid #c74141;
  }

</style>

<script>
import ProvinceGross2 from "@/components/Graph/ProvinceGross2";
import ProvinceThreeMainIndustries2 from "@/components/Graph/ProvinceThreeMainIndustries2";
import ProvinceperGross2 from "@/components/Graph/ProvinceperGross2";
import ProvincePublicBudget2 from "@/components/Graph/ProvincePublicBudget2";
import ProvincePublicPerBudget2 from "@/components/Graph/ProvincePublicPerBudget2";
import PopulationByYear from "@/components/Graph/PopulationByYear";
import ProvinceTotalProfits2 from "@/components/Graph/ProvinceTotalProfits2";
import ProvinceTotalAsset2 from "@/components/Graph/ProvinceTotalAsset2";
import YunnanMap from "@/components/Graph/YunnanMap";
import ProvinceAgriYield2 from "@/components/Graph/ProvinceAgriYield2";

export default {
  name: "Total",
  components: {
    ProvinceperGross2,
    ProvinceGross2,
    ProvinceThreeMainIndustries2,
    ProvincePublicBudget2,
    ProvincePublicPerBudget2,
    PopulationByYear,
    ProvinceTotalProfits2,
    ProvinceTotalAsset2,
    YunnanMap,
    ProvinceAgriYield2
  },
  data() {
    return {
      btnGDP: true,
      titleGDP: '2016~2020年生产总值和生产总值指数（单位：亿元）',
      btnPubBudget: true,
      titlePubBudget: '2016~2020年一般公共预算收支（单位：亿元）',
      btnProfits: true,
      titleProfits: '2016~2018年利润总额和利税总额(单位：亿元)'
    }
  },
  mounted() {

  },
  destroyed() {

  },
  methods: {
    btn1Click() {
      this.btnGDP = true;
      this.titleGDP = '2016~2020年生产总值和生产总值指数（单位：亿元）';
    },
    btn2Click() {
      this.btnGDP = false;
      this.titleGDP = '2016~2020年人均生产总值（单位：元）';
    },
    btn3Click() {
      this.btnPubBudget = true;
      this.titlePubBudget = '2016~2020年一般公共预算收支（单位：亿元）';
    },
    btn4Click() {
      this.btnPubBudget = false;
      this.titlePubBudget = '2016~2020年人均一般公共预算收支（单位：元）';
    },
    btn5Click() {
      this.btnProfits = true;
      this.titleProfits = '2016~2018年利润总额和利税总额(单位：亿元)';
    },
    btn6Click() {
      this.btnProfits = false;
      this.titleProfits = '2016~2018年资产负债及所有者权益总计(单位：亿元)';
    }
  }
}
</script>

