<template>
  <NavigationBarNew style="position: absolute;top: 0;z-index:999;"/>
  <StoryCard/>
  <el-backtop />
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import StoryCard from "@/components/StoryCard";
import NavigationBarNew from "@/components/NavigationBarNew";
export default {
  name: "PovertyStory",
  components: {NavigationBarNew, StoryCard, NavigationBar}
}
</script>

<style scoped>

</style>
