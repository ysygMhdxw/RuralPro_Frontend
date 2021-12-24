<template>

    <div id="nav" class="nav" :class = "{'nav-top': navBox.active}"
         :style = "top = navBox.top" @load = "navLoad">

      <ul class="title">
        <li class="column li1">
          <div class="nav1" @click = "gotoformalpage">
            <img src="../assets/img/official.svg" alt="减贫政策">
            <span class="nav1-item">减贫政策</span>
          </div>
        </li>

        <li class="column li2">
          <div class="nav1" @click = "gototimelinepage">
            <img src="../assets/img/povertydvlopTime.svg" alt="减贫岁月">
            <span class="nav1-item">减贫岁月</span>
          </div>
        </li>

        <li class="column li3">
          <div class="nav1" @click = "gotoProvertyStory">
            <img src="../assets/img/story.svg" alt="减贫故事">
            <span class="nav1-item">减贫故事</span>
          </div>
        </li>

        <li class="column li4" @mouseover = "navShow" @mouseout = "navHide">
          <div class="nav1">
            <img src="../assets/img/county.svg" alt="数说减贫">
            <span class="nav1-item">数说减贫</span>
          </div>
          <div class="dl dl4" :style = "{'display':navBox.display}">
            <div class="dd">
              <span>减贫数据纵览</span>
            </div>
            <div class="dd" @click="gotoProvertyData">
              <span>减贫可视化数据</span>
            </div>
          </div>
        </li>

        <li class="column li5">
          <div class="nav1">
            <img src="../assets/img/information.svg" alt="减贫资讯">
            <span class="nav1-item">减贫资讯</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import {Location} from '@element-plus/icons'
export default {
  name: "NavigationBar",
  components: {
    Location
  },
  mounted() {
    window.addEventListener('scroll', this.watchScroll);
  },
  data() {
    return {
      navBox: {
        top: '89vh',
        height: 0,
        active: false,
        display: 'none'
      },
      isHover: false
    };
  },
  destroyed() {
    // 移除事件监听
    window.removeEventListener("scroll", this.watchScroll);
  },
  methods: {
    gotoProvertyStory(){
      this.$router.replace("/povertyStory")
    },
    gotoProvertyData(){
      this.$router.replace("/dataVisualization")
    }
    ,
    gototimelinepage(){
      this.$router.replace("/unfinished")
    }
    ,
    gotoformalpage(){
      this.$router.replace("/formal")
    }
    ,
    navLoad(){
      this.navBox.height = $('.nav').height();
      this.navBox.overflow = 'hidden';
    }
    ,
    navShow(){
      this.navBox.display = 'block';
    }
    ,
    navHide(){
      this.navBox.display = 'none';
    }
    ,
    watchScroll() {
      let scrollTop =
          document.documentElement.scrollTop ||
          document.body.scrollTop;

      if (scrollTop > 10) {
        this.navBox.top = '0';
        this.navBox.active = true;
      }
      else {
        this.navBox.top = this.navBox.height + 'px';
        this.navBox.active = false;
      }
    }

  }
}

</script>

<style scoped>

li {
  list-style: none;
}

.nav-active {
  float: left;
  width: 87.5%;
  position: fixed;
  left: 6.25%;
  z-index: 42345;
  top: 89vh;
}

.nav-active li {
  float: left;
  width: 20%;
  height: 100%;
  margin: 0;
}

.nav {
  width: 87.5%;
  position: fixed;
  left: 6.25%;
  z-index: 42345;
  top: 89vh;
}

.nav ul {
  height: 89vh;
}

.nav li {
  float: left;
  width: 20%;
  margin: 0;
}

.nav img {
  position: relative;
  left: -15px;
  top: 6px;
  width: 25px;
}

/* .li2 {
  height: 114px;
} */

.li4 {
  height: 80px;
}

/* .li5 {
  height: 76px;
} */

.nav1-item {
  line-height: 57px;
  text-decoration: none;
  color: #fff;
}

.nav1 {
  width: 98%;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  background: transparent;
  transition: all 0.3s ease;
  position: relative;
  border: none;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
  7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(315deg, #f1939c 0%, #e3b4b8 74%);
}

.nav1:hover {
  background: #bd3131;
  opacity: 90%;
  box-shadow: none;
  cursor: pointer;
}

.nav1:before,
.nav1:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
  4px 4px 5px 0px #0002;
  transition: 400ms ease all;
}

.nav1:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}

.nav1:hover:before,
.nav1:hover:after {
  width: 100%;
  transition: 800ms ease all;
}

/* 导航栏吸顶 */

.nav-top {
  animation: navshow2 1s ease;
  animation-fill-mode: forwards;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
}

@keyframes navshow2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 响应式布局：分辨率宽度小于1000px导航栏消失 */

@media screen and (max-width: 1000px) {
  .nav {
    display: none;
  }
}

.dl {
  position: absolute;
  bottom: 89vh;
  font-size: 12px;
  background: #fff;
  border: solid 1px #aaa;
  border-bottom: none;
  width: 19.5%;
  /*-webkit-transition: height 200ms ease-in;*/
  /*-moz-transition: height 200ms ease-in;*/
  /*-o-transition: height 200ms ease-in;*/
  /*transition: height 200ms ease-in;*/
  /*border-radius: 5px 5px 0 0;*/
}

.dd {
  height: 40px;
  border-bottom: solid 1px #aaa;
  text-align: center;
  /*border-radius: 5px;*/
}

.dd:last-child {
  border-bottom: none;
}

.dd:hover {
  height: 40px;
  background-color: #BD3131;
}

.dd:hover span {
  color: #FFFFFF;
}

.dd span {
  line-height: 40px;
  font-size: 13px;
  cursor: pointer;
  color: #456;
  font-family: 华文中宋;
}

.nav-top .dl {
  position: absolute;
  font-size: 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  width: 19.5%;
  /*border-radius: 0 0 5px 5px;*/
}

.nav-top .dd:first-child {
  border-top: none;
}

/* .nav-top .dl2 {
  top: 57px;
  height: 114px;
} */

.nav-top .dl4 {
  top: 57px;
  height: 80px;
}

</style>
