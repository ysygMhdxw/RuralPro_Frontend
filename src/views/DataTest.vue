<template>

  <div>
    <div class="test">
      <h1 style="color: #BD3131;font-family: 华文中宋"> {{title}}</h1>
      <b> 页面加载时创建淡入效果</b>
      <ProvincePublicPerBudget/>
    </div>
  </div>

</template>

<script>
import ProvincePublicPerBudget from "@/components/Graph/ProvincePublicPerBudget";
export default {
  name: "DataTest",
  components: {ProvincePublicPerBudget},
  props:{
    title:String
  }
}
</script>

<style scoped>
.test{
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
</style>
