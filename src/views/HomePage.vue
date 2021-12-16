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
      <el-header class="header" style="height:900px; padding: 0px">
      <BackgroundPic style="margin: 0px; position:fixed;padding: 0px"/>
      </el-header>
      <el-main style="height: 50px;padding-left: 0;padding-right: 0">
        <NavigationBar style="width: 100%;"/>
      </el-main>

      <el-main class="map" style="background-color: #FFFFFF; box-shadow:0px -3px 4px #dfdfdf;margin-top:50px;position: relative">
        <el-col  :span="12" style="background-color:#FFFFFF;margin-left: 200px; margin-top:60px;border: 2px solid #BD3131;border-radius: 10%">
            <BodyMap />
        </el-col>
        <el-col :span="12">
          <div>县的简介</div>
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

export default {
  name: "HomePage",
  components: {
    BackgroundPic,
    GithubCorner,
    BodyMap,
    AsideBar,
    NavigationBar
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
</style>
