<template>

  <div id="nav" class="nav" v-bind:style="top=margin+'px'" :class="{
     'fix-nav': navBarFixed}">

    <el-row class="title" style="align-content: center">
      <el-col class="column" :span="2" >
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-2" @click="">
          <img src="../assets/img/official.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>减贫知识库</span>
        </button>
        <ul>
          <li><a href=""  @click="gotoformalpage">减贫平台直达</a></li>
          <li><a href="" @click="gotoquestionpage">减贫知识小问答</a></li>
        </ul>
<!--        <ul>-->
<!--          <li><a href=""  @click="gotoformalpage">减贫平台直达</a></li>-->
<!--          <li><a href="" @click="" >减贫知识问答</a></li>-->
<!--        </ul>-->
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-2" @click="gototimelinepage">
          <img src="../assets/img/povertydvlopTime.svg" width="25" height="25" style="padding-top:8px;padding-right: 4px"/>
          <span>减贫大事记</span>
        </button>

      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-3" @click="gotoProvertyStory">
          <img src="../assets/img/story.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>减贫故事</span>
        </button>
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-4">
          <img src="../assets/img/county.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>数说减贫</span>
        </button>
        <ul>
          <li><a href=""  @click="gotoProvertyData">减贫数据纵览</a></li>
          <li><a href="" @click="gotoProvertyDataScreen">减贫可视化数据</a></li>
        </ul>
      </el-col>
      <el-col class="column" :span="4">
        <button class="custom-btn btn-5 btn-5-5" @click="gotoProvertyNews">
          <img src="../assets/img/information.svg" width="25" height="25" style="padding-top: 8px;padding-right: 4px"/>
          <span>减贫资讯</span>
        </button>


      </el-col>

      <el-col class="column" :span="2">
      </el-col>

    </el-row>
  </div>
</template>

<script>
import {Location} from '@element-plus/icons'
export default {
  name: "NavigationBarNew",
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
    gotoProvertyNews(){
      this.$router.push("/countynews")
    }
    ,
    gotoProvertyStory(){
      this.$router.push("/povertyStory")
    },
    gotoProvertyData(){
      this.$router.push("/DataOverview")
    }
    ,
    gotoProvertyDataScreen(){
      this.$router.push("/DataScreen")
    }
    ,
    gototimelinepage(){
      this.$router.push("/unfinished")
    }
    ,
    gotoformalpage(){
      this.$router.push("/formal")
    }
    ,gotoquestionpage(){
      this.$router.push("/question")
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
  top: 80%;
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
  width: 60%;
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
  width: 98%;
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
  margin-left: 0px;
  width: 220%;
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
