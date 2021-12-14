<template>
  <div class="homepage">
    <el-container style="padding:0">
      <div class="searchbar" style="height: 60px;padding:0px">
        <el-row class="title" >
          <el-col :span="6" style="background-color: #A47DCB; height: 60px">标志</el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6" style="background-color: #F9B900; height: 60px">searchbar</el-col>
        </el-row>
      </div>
      <el-header class="header" style="height:400px;padding: 0px">pic
      <BackgroundPic style="margin: 0px;padding: 0px"/>
      </el-header>
      <el-main style="height: 300px;padding-left: 0;padding-right: 0">Main
        <NavigationBar style="width: 100%"/>
      </el-main>
      <el-main>Main</el-main>
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
</style>
