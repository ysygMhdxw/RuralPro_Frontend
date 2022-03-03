<template>
  <NavigationBarNew style="position: absolute;z-index:999;top: 0;"/>
  <img src="../assets/img/newspic.jpg" style="width: 100%;height:200px"/>
  <PovertySwitchTool style="position: absolute;width:100%;height:100%;top: 100px;padding-left: 5%;padding-right: 5%"/>


</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import NavigationBarNew from "@/components/NavigationBarNew";
import PovertySwitchTool from "@/components/PovertySwitchTool";

export default {
  name: "FormalPage",
  components: {PovertySwitchTool, NavigationBarNew, NavigationBar},
  mounted() {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL); //这里有没有都无所谓，最好是有以防万一
      window.addEventListener('popstate', this.back, false);
      // 回退时执行goback方法
    }
  },
  destroyed() {
    window.removeListener('popstate', this.back, false)
  },
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
#wrap {
  display: flex;
  justify-content: center;

}

.block {
  width: 30%;
  height: 300px;
  background-color: #B55959;
  border-style: solid;
  border-width: 2px;
}

.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
  border-style: solid;
  border-width: 2px;
}

.set :hover {
  animation: rotate360 .5s ease-out 0s;
}
</style>
