<template>
  <div class="homepage">
    <el-container style="padding:0">
      <el-header class="header" style="height:700px; padding: 0px">
      <BackgroundPic style="margin: 0px; position:fixed;padding: 0px"/>
      </el-header>
      <el-main style="height: 50px;padding-left: 0;padding-right: 0">
        <NavigationBar style="width: 100%;"/>
      </el-main>

      <el-main class="TimelineMain" style="background-color:#FFFFFF;padding-top:0px;padding-bottom:0px;padding-right: 50px;padding-left:50px; margin:0;height:100%;position: relative">
        <div id="parallax-world-of-ugg" style="margin: 0px;">
          <section>

            <br>
            <p style="font-size: 30px;font-family: 华文中宋;color:#000000;text-shadow: 2px 2px #f6f6f6;margin-bottom: 4px;margin-top: 10px">减贫大事年表</p>
            <p style="font-size: 200px;color: #BD3131;border:3px #BD3131;padding-top: 10px;margin-bottom: 30px">—</p>
            <div class="block" style="width: 100% ;height: 0px;margin:0px;padding: 0px">
            </div>
          </section>

          <section>
            <div class="parallax-three" style="height: 100%;width: 100%;margin: 0px;padding:0;">
              <TimeLineHome style="left: 100px;width: 100%"/>
            </div>
          </section>
        </div>
       </el-main>

      <el-main class="map" style="background-color: #FFFFFF; position: relative; margin: 0;padding: 0">
        <p style="font-size: 30px;font-family: 华文中宋;color:#000000;text-shadow: 2px 2px #f6f6f6;padding: 0;margin-top: 20px">减贫地图</p>
          <p style="font-size: 200px;color: #BD3131;border:3px #BD3131;line-height: 5px;margin-bottom: 50px">—</p>
        <p style="font-family: 华文中宋;color:#BD3131;font-size:30px;font-weight: bold;left:250px;position: absolute">832个国家扶贫开发重点工作县</p>
        <el-col  :span="12" style="background-color:#FFFFFF;margin-left: 200px; margin-top:60px;border: 2px solid #BD3131;border-radius: 10%">
          <BodyMap />
          <p style="color: #BD3131;font-family: 华文中宋;">点击具体贫困县，进入贫困县主页</p>
        </el-col>
        <el-col :span="12" >
          <div class="provinceTab" style="margin-top: 65px;margin-left:200px;width: 150px;height: 50px;border-radius:10px;background-color: #BD3131;color: #FFFFFF">
           <SelectProvinceHome/>
          </div>
          <div style="margin-top: 30px;text-align:left;padding:10px;margin-left:200px;width: 400px;height: 200px;border-radius:10px;border:3px solid  #BD3131;color: #000000">
            <p>云南简称“云”或“滇”，地处中国西南边陲，位于东经97°31'～106°11'和北纬21°8'～29°15'之间，北回归线横贯南部。总面积39.41万平方千米，占全国总面积的4.1%。东与广西壮族自治区和贵州省毗邻，北以金沙江为界与四川省隔江相望，西北隅与西藏自治区相邻近，西部与缅甸相邻，南部和东南部分别与老挝、越南接壤。
            </p>
          </div>

          <div class="countyTab">
            <div class="provinceTab" style="margin-top:40px;margin-left:200px;width: 190px;height: 50px;border-radius:10px;background-color: #BD3131;color: #FFFFFF">
            <SelectCountyHome/>
            </div>
            <div style="margin-top: 30px;text-align:left;padding:10px;margin-left:200px;width:400px;height: 280px;border-radius:10px;border:3px solid  #BD3131;color: #000000">

            </div>
          </div>

        </el-col>
      </el-main>
      <el-main style="background-color: #FFFFFF;position: relative">Main</el-main>
      <el-footer class="footer">@心心乡惜</el-footer>
    </el-container>
  </div>
</template>

<script>
import GithubCorner from "@/components/GithubCorner";
import BodyMap from "@/components/BodyMap";
import AsideBar from "@/components/AsideBar";
import NavigationBar from "@/components/NavigationBar";
import BackgroundPic from "@/components/BackgroundPic";
import {} from "../assets/css/global.css"
import TimeLineHome from "@/components/TimeLineHome";
import SelectProvinceHome from "@/components/SelectProvinceHome";
import SelectCountyHome from "@/components/SelectCountyHome";

export default {
  name: "HomePage",
  components: {
    SelectCountyHome,
    SelectProvinceHome,
    TimeLineHome,
    BackgroundPic,
    GithubCorner,
    BodyMap,
    AsideBar,
    NavigationBar
  },
  data(){
    return {}
  },
  mounted() {

  },
  methods:{
    back(){
      if (window.history.length <= 1) {
        this.$router.push({path:'/'})
        return false
      } else {
        this.$router.go(-1)
      }
    }
  }
}

</script>

<style scoped>
.homepage {
  margin: 0px;
}
.title{
  height: 60px;
}
.footer{
  background-color: #8f8f8f;
  position: relative;
}
.bodymap{
  margin-top: 600px;
}
.header{
  background-color: #4BD0C9;
  height: 200px;
}
.searchbar{
  background-color: #5697EB;
}
.map{
  background:#fff;
  filter:progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=180,strength=4);
  -moz-box-shadow: 0px -2px 10px #909090;
  -webkit-box-shadow: 0px -2px 10px #909090;
  box-shadow:0px -2px 10px #909090;
}
.provinceTab{

}

.TimelineMain{

}

h1 {
  font-family: 华文中宋;
}

/* Override UGG site */

.content-asset p {
  margin: 0 auto;
}

.breadcrumb {
  display: none;
}

/* Helpers */
/**************************/

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
  font-size: 20px;
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


#parallax-world-of-ugg .title h1 {
  font-size: 35px;
  letter-spacing: 8px;
}

/* Section - Block */
/**************************/
#parallax-world-of-ugg .block {
  background: white;
  padding: 0px;
  /*width: 820px;*/
  margin: 0 auto;
  text-align: justify;
}

#parallax-world-of-ugg .block-gray {
  background: #f2f2f2;
  padding: 0px;
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



#parallax-world-of-ugg .parallax-three {
  /*padding-top: 200px;*/
  /*padding-bottom: 200px;*/
  overflow: hidden;
  position: relative;
  width: 100%;
  background-image: url("../assets/img/bg.jpg");
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
    padding: 0px;
    width: 620px;
  }
}

@media screen and (max-width: 767px) {
  #parallax-world-of-ugg .block {
    /*padding: 30px;*/
    width: 420px;
  }

  #parallax-world-of-ugg h2 {
    font-size: 30px;
  }

  #parallax-world-of-ugg .block {
    /*padding: 30px;*/
  }

  #parallax-world-of-ugg .parallax-one, #parallax-world-of-ugg .parallax-two, #parallax-world-of-ugg .parallax-three {
    /*padding-top: 100px;*/
    /*padding-bottom: 100px;*/
  }
}

@media screen and (max-width: 479px) {
  #parallax-world-of-ugg .block {
    /*padding: 30px 15px;*/
    /*width: 290px;*/
  }
}


</style>
