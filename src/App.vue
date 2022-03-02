<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<script>
import NavigationBar from "@/components/NavigationBar";
import AsideBar from "@/components/AsideBar";
import BodyMap from "@/components/BodyMap";

export default {
  components: {BodyMap, AsideBar, NavigationBar}
}
</script>
