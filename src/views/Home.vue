<template>
  <div class="home">
    <el-container>
      <GithubCorner/>
      <el-header><NavigationBar/></el-header>
      <el-container  style="height: 100%; border: 1px solid #eee">
        <el-aside width="177px"><AsideBar/></el-aside>
        <el-main><BodyMap/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import NavigationBar from "@/components/NavigationBar";
import AsideBar from "@/components/AsideBar";
import BodyMap from "@/components/BodyMap";
import GithubCorner from "@/components/GithubCorner";
export default {
  name: 'Home',
  components: {
    GithubCorner,
    BodyMap,
    AsideBar,
    NavigationBar

  }
}
</script>
<style>
.el-header{
  background-color: #FFFFFF;
  color: #333;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 300px;
  height: 640px;
}

.el-main {
  text-align: center;
  line-height: 160px;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>