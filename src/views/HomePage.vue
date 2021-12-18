<template>
  <div class="homepage">
    <el-container style="padding:0">
<!--      <div class="searchbar" style="height: 60px;padding:0px">-->
<!--        <el-row class="title" >-->
<!--          <el-col :span="6" style="background-color: #A47DCB; height: 60px">标志</el-col>-->
<!--          <el-col :span="6"></el-col>-->
<!--          <el-col :span="6"></el-col>-->
<!--          <el-col :span="6" style="background-color: #F9B900; height: 60px">searchbar</el-col>-->
<!--        </el-row>-->
<!--      </div>-->
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
        <p style="font-size: 30px;font-family: 华文中宋;color:#000000;text-shadow: 2px 2px #f6f6f6;padding: 0;margin: 0">减贫地图</p>
          <p style="font-size: 200px;color: #BD3131;border:3px #BD3131;margin: 0;line-height: 5px;margin-bottom: 50px">—</p>
        <el-col  :span="12" style="background-color:#FFFFFF;margin-left: 200px; margin-top:60px;border: 2px solid #BD3131;border-radius: 10%">
            <BodyMap />
        </el-col>
        <el-col :span="12" >
          <div class="provinceTab" style="margin-top: 65px;margin-left:150px;width: 150px;height: 50px;border-radius:10px;background-color: #BD3131;color: #FFFFFF">
            <el-select v-model="value" clearable placeholder="Select">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="countyTab">县的简介</div>

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

export default {
  name: "HomePage",
  components: {
    TimeLineHome,
    BackgroundPic,
    GithubCorner,
    BodyMap,
    AsideBar,
    NavigationBar
  },
  data(){
    return{
      options: [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]
    }
  },
  mounted() {

  },
  methods:{
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


/*//修改的是el-input的样式*/
/*//一种方法是设置最里层el-input__inner的背景色 外层的两级父元素设置为透明色*/
/*//另一种方法是从el-select到el-input__inenr的背景色都设置为需要的颜色*/
  /deep/ .el-select,
  /deep/ .el-input,
  /deep/ .el-input__inner{
    background-color:#BD3131 ;
    color:#fff;
    text-decoration-color: #FFFFFF;
    border:0px;
    width: 40px;
    border-radius:0px;
    text-align: center;
  }
/deep/.el-input__inner {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: 1px solid #a1a3ad;
  border-left-width: 0;
  background-color: #BD3131;
  --el-input-placeholder-color: #FFFFFF;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  --el-input-text-color: #FFFFFF;
  color: #FFFFFF;
}
/*//el-input聚焦的时候 外层的border会有一个样式*/
  /deep/ .el-select .el-input.is-focus .el-input__inner{
    border:0px;
  }

/*//修改的是el-input上下的小图标的颜色*!*!*/
/*  /deep/ .el-select .el-input .el-select__caret{*/
/*    color:#fff;*/
/*  }*/

/*//修改总体选项的样式 最外层*!*!*/
/*  /deep/ .el-select-dropdown{*/
/*    background-color: #08164d;*/
/*    margin: 0px;*/
/*    border:0px;*/
/*    border-radius: 0px;*/
/*  }*/

/*//修改单个的选项的样式*!*!*/
/*  /deep/ .el-select-dropdown__item{*/
/*    background-color: transparent;*/
/*    color:#fff;*/
/*  }*/

/*//item选项的hover样式*!*!*/
/*  /deep/ .el-select-dropdown__item.hover,*/
/*  /deep/ .el-select-dropdown__item:hover{*/
/*    color:#409eff;*/
/*  }*/

/*//修改的是下拉框选项内容上方的尖角*!*!*/
/*  /deep/ .el-popper .popper__arrow, .el-popper .popper__arrow::after{*/
/*    display: none;*/
/*  }*/
</style>
