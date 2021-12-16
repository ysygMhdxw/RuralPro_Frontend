<template>

  <div id="nav" class="nav" v-bind:style="top=margin+'px'" :class="{
     'fix-nav': navBarFixed}">

    <el-row class="title" style="align-content: center">
      <el-col class="column" :span="2" >
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5" @click="gotopopulation">
          <img src="../assets/img/population.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>人口</span>
        </button>
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-2">
          <img src="../assets/img/economy.svg" width="25" height="27" style="padding-top:8px;padding-right: 4px"/>
          <span>经济</span>
        </button>
        <ul>
          <li><a href="">经济核算</a></li>
          <li><a href="">公共财政和投资发展</a></li>
          <li><a href="">市场消费</a></li>
        </ul>

      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-3">
          <img src="../assets/img/livelihood.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>民生</span>
        </button>
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-4">
          <img src="../assets/img/county.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>农业和农村</span>
        </button>
        <ul>
          <li><a href="">农业</a></li>
          <li><a href="">农村基本情况</a></li>
        </ul>
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-5">
          <img src="../assets/img/industry.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>工业</span>
        </button>
        <ul>
          <li><a href="">工业产品</a></li>
          <li><a href="">工业企业</a></li>
        </ul>

      </el-col>

      <el-col class="column" :span="2">
      </el-col>

    </el-row>
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
    window.addEventListener('scroll', this.watchScroll)
  },
  data() {
    return {
      margin: 1000,
      navBarFixed: false,
    };
  },
  destroyed() {
    // 移除事件监听
    window.removeEventListener("scroll", this.watchScroll);
  },
  methods: {
    gotopopulation(){
      this.$router.replace("/population")
    }
    ,
    watchScroll() {

      // 滚动的距离
      var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      // 容器的高度
      var offsetTop = document.querySelector("#nav").offsetHeight;

      console.log("scrollTop=>", scrollTop, "  offsetTop=>", offsetTop);
      //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
      if (scrollTop > offsetTop) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }


    }
  }
}

</script>

<style scoped>
/* 导航 */
.nav {
  position: absolute;
  background-color: rgba(249, 249, 249, 0.77);
  top: 85%;
  width: 100%;
  height: 60px;
  margin-top: 0px;
}

/* 固定导航 */
.fix-nav {
  position: fixed;
  top: 0;
  z-index: 999;
}

button {
  margin: 10px;
}

.custom-btn {
  width: 250px;
  height: 50px;
  color: #fff;
  padding: 5px 5px;
  font-family: 华文中宋;
  font-weight: 100;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
  7px 7px 20px 0px rgba(0, 0, 0, .1),
  4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
}

/* 5 */
.btn-5 {
  width: 300px;
  height: 50px;
  font-size: 20px;
  line-height: 40px;
  padding: 0;
  margin: 2px;
  border: none;
  background-color: #f0ecfc;
  background-image: linear-gradient(315deg, #e3b4b8 0%, #f1939c 74%);
}

.btn-5-2 {
  background-image: linear-gradient(315deg, #f1939c 0%, #e3b4b8 74%);
}

.btn-5-3 {
  background-image: linear-gradient(315deg, #e3b4b8 0%, #f1939c 74%);
}

.btn-5-4 {
  background-image: linear-gradient(315deg, #f1939c 0%, #e3b4b8 74%);
}

.btn-5-5 {
  background-image: linear-gradient(315deg, #e3b4b8 0%, #f1939c 74%);
}

.btn-5:hover {
  color: #FFFFFF;
  background: #BD3131;
  opacity: 90%;
  box-shadow: none;
}

.btn-5:before,
.btn-5:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #a7535a;
  box-shadow: /*-1px -1px 5px 0px #fff,*/ 7px 7px 20px 0px #0003,
  4px 4px 5px 0px #0002;
  transition: 400ms ease all;
}

.btn-5:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}

.btn-5:hover:before,
.btn-5:hover:after {
  width: 100%;
  transition: 800ms ease all;
}

.column:hover ul {
  display: block;
}

.column> ul {
  position: absolute;
  display: none;
}


.nav a {
  text-decoration: none;
  font-family: 华文中宋;
}

.column> ul > li > a {
  margin-left: 10px;
  width: 300px;
  line-height: 40px;
  color: #456;
  background-color: #FFFFFF;
  text-align: center;
  border: 1px solid #ccc;
  border-top: none;
  display: block;
}
.column> ul > li>a:hover {
  color: #FFFFFF;
  background-color: #BD3131;
  height: 40px;
}
ul{
  list-style: none;
}

</style>
