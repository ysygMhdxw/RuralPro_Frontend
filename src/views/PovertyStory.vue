<template>
  <NavigationBar style="position: absolute;top: 0;z-index:999;"/>
  <StoryCard/>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import StoryCard from "@/components/StoryCard";
export default {
  name: "PovertyStory",
  components: {StoryCard, NavigationBar}
}
</script>

<style scoped>

</style>
