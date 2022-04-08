<template>
  <div class="block" style="height:100%;margin: 0px;padding: 0px;width: 100%">
    <div style="position: absolute;z-index:2;left: 20px;top: 30px">
      <div >
        <img src="../assets/img/symbol.svg" style="position: absolute;z-index: 2;left: 20px;top: 20px;width:100px;height: 100px"/>
      </div>
      <div class="fontTitle" style="position:relative;left: 150px;top: 40px">
        <h1 style="font-size: 50px;font-family: 华文中宋;color:#BD3131;text-shadow: 2px 2px #f6f6f6">心心乡惜</h1>
      </div>
      <div style="position:relative;left: 1300px;top: 0px">
        <form id="content">
          <input type="text" name="input" class="input" id="search-input">
          <button type="reset" class="search" id="search-btn"></button>
        </form>
      </div>
    </div>
    <video id="v1" autoplay loop muted style="width: 100%;">
      <source src="../assets/video/frontpage_video.mp4" style="width:100%;margin: 0px;padding: 0px" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "BackgroundPic",
  data(){
    return{
     src:require("../assets/img/ECNU_pic.jpg"),
    }
  },
  mounted() {
    this.searchbar();
  },
  methods:{
    searchbar(){
      const input = document.getElementById("search-input");
      const searchBtn = document.getElementById("search-btn");

      const expand = () => {
        searchBtn.classList.toggle("close");
        input.classList.toggle("square");
      };

      searchBtn.addEventListener("click", expand);

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

input {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border: 4px solid #BD3131;
  border-radius: 50%;
  background: none;
  color: #BD3131;
  font-size: 16px;
  font-weight: 400;
  font-family: Roboto;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
  padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out,
  padding 0.2s;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search {
  background: none;
  position: absolute;
  top: 0px;
  left: 70px;
  height: 50px;
  width: 50px;
  padding: 0;
  border-radius: 100%;
  outline: 0;
  border: 0;
  color: inherit;
  cursor: pointer;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}

.search:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 4px;
  background-color: #BD3131;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-top: 26px;
  margin-left: 17px;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close {
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

.close:before {
  content: "";
  position: absolute;
  width: 27px;
  height: 4px;
  margin-top: -1px;
  margin-left: -13px;
  background-color: #BD3131;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
}

.close:after {
  content: "";
  position: absolute;
  width: 27px;
  height: 4px;
  background-color: #BD3131;
  margin-top: -1px;
  margin-left: -13px;
  cursor: pointer;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.square {
  box-sizing: border-box;
  padding: 0 40px 0 10px;
  width: 300px;
  height: 50px;
  border: 4px solid #BD3131;
  border-radius: 0;
  background: none;
  color: #BD3131;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
  padding 0.2s;
  transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
  padding 0.2s;
  -webkit-transition-delay: 0.4s, 0s, 0.4s;
  transition-delay: 0.4s, 0s, 0.4s;
  -webkit-transform: translate(-100%, -50%);
  -ms-transform: translate(-100%, -50%);
  transform: translate(-100%, -50%);
}
h1::before {
  transform: scaleX(0);
  transform-origin: bottom right;
  color: #000;
}

h1:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
  color: #000;
}

h1::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: #BD3131;
  color: #000;
  z-index: -1;
  transition: transform .3s ease;
}

h1 {
  position: relative;
  font-size: 5rem;
}

html {
  block-size: 100%;
  inline-size: 100%;
}

body {
  min-block-size: 100%;
  min-inline-size: 100%;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  font-family: system-ui, sans-serif;
}

@media (orientation: landscape) {
  body {
    grid-auto-flow: column;
  }
}

</style>
