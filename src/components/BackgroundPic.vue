<template>
  <div class="block" style="height:100%;margin: 0px;padding: 0px;width: 100%">
    <el-image :src="src"  style="height:100%;width:100%;margin: 0px;padding: 0px"></el-image>
  </div>
</template>

<script>
export default {
  name: "BackgroundPic",
  data(){
    return{
     src:require("../assets/img/ECNU_pic.jpg"),
    }
  }
}
</script>

<style scoped>
.block{
  position: relative;
  margin-bottom: 30px;
}
.el-image__inner{
  margin: 0px;
}
</style>
