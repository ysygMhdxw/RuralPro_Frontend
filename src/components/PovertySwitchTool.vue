<template>
  <div>
  <div id="wrap">
    <div id="div1" class="block" @click="swithPlatform(1)" :style="{'background-color':color1}">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%;" >
        <p style="font-size: 23px;font-family: 华文中宋;right: 30%" :style="{'color':tcolor1}">关于扶贫</p>
        <p style="font-size: 15px;font-family: 宋体;padding-top: 5px;" :style="{'color':tcolor1}">提供用户直达平台，使用户更加便利的了解当下权威的减贫网站，深刻了解减贫途径并切实的减贫到实处。
        </p>
      </div>
      <img class="set" :src="src1" style="width:30px;height:30px;position: relative;top:40%;right:38%"/>
    </div>
    <div id="div2" class="block" @click="swithPlatform(2)"  :style="{'background-color':color2}">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;right: 30%" :style="{'color':tcolor2}">扶贫组织</p>
        <p style="font-size: 15px;font-family: 宋体;padding-top: 5px;" :style="{'color':tcolor2}">社会扶贫作为一项复杂的工作，扶贫组织在其中有很强地补短板作用，在我国的扶贫工作实践中不可或缺。
        </p>
      </div>
      <img class="set" :src="src2" style="width:30px;height:30px;position: relative;top:40%;right:38%"/>
    </div>
    <div id="div3" class="block" @click="swithPlatform(3)" style="background-color: white" :style="{'background-color':color3}">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;right: 30%" :style="{'color':tcolor3}">国际扶贫组织</p>
        <p style="font-size: 15px;font-family: 宋体;padding-top: 5px;" :style="{'color':tcolor3}">改革开放以来，中国的扶贫取得了巨大的成绩，其中国际扶贫组织发挥了不可忽视的促进作用和催化作用。
        </p>

      </div>
      <img class="set" :src="src3" style="width:30px;height:30px;position: relative;top:40%;right:38%"/>
    </div>
  </div>
  <div id="wrap1" style="position:relative;top:15%;padding-bottom: 50px;">
      <div v-for="eachplatform in platformlist" class="Grid-cell block2" >
        <a :href="eachplatform.url" style="text-decoration: none" >
          <img style="width:100%;height: 50%" :src="eachplatform.pic"/>
          <div style="background-color: #B55959;height: 35px;width:10px;border:#B55959;border-style: solid;border-width: 2px;margin:auto;left: 0;right:0;position: relative;top:-5%"></div>
          <p style="color:black; font-size: 23px;padding-top: 10px;font-family: 华文中宋">{{eachplatform.webname}}</p>
          <p style="color:black;text-align: left;padding: 20px;font-size:15px;font-family: 宋体">&nbsp;&nbsp;{{eachplatform.introduction}}</p>
          <img style="width:10%;height:10%;position: relative;float: right;bottom:18px;right: 0px;" src="../assets/img/plus.svg"/>
        </a>
      </div>
  </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import targpic from "@/assets/img/set.svg";
import ppic from "@/assets/img/setBlack.svg";

export default {
  name: "PovertySwitchTool",
  props:{
    introduction:String,
    url:URL,
    pic:URL,
    webname:String,
  },
  mounted(){
    this.swithPlatform(1);
  },
  data() {
    return {
      platformlist:[],
      flag:1,
      src1:"../assets/img/setBlack.svg",
      src2:"../assets/img/set.svg",
      src3:"../assets/img/set.svg",
      color1:"#B55959",
      color2:"#FFFFFF",
      color3:"#FFFFFF",
      tcolor1:"#FFFFFF",
      tcolor2:"#000000",
      tcolor3:"#000000",
    }
  },
  methods: {
    swithPlatform(k){
      this.flag=k;
      var targcolor="#B55959";

      var ttcolor="#FFFFFF";
      var pcolor="#FFFFFF";

      var ptcolor="#000000";

      var type;
      if(k===1) {
        type = "platform";
       this.src1=targpic;this.src2=ppic;this.src3=ppic;
       this.color1=targcolor;this.color2=pcolor;this.color3=pcolor;
       this.tcolor1=ttcolor;this.tcolor2=ptcolor;this.tcolor3=ptcolor;
      }
      else if(k===2) {
        type = "inorganization";
        this.src2=targpic;this.src1=ppic;this.src3=ppic;
        this.color2=targcolor;this.color1=pcolor;this.color3=pcolor;
        this.tcolor1=ptcolor;this.tcolor2=ttcolor;this.tcolor3=ptcolor;
      }
      else {
        type = "outorganization";
        this.src3=targpic;this.src2=ppic;this.src1=ppic;
        this.color3=targcolor;this.color2=pcolor;this.color1=pcolor;
        this.tcolor1=ptcolor;this.tcolor2=ptcolor;this.tcolor3=ttcolor;
      }
      request.get("platform/"+type).then(res => {
        console.log(res);
        this.platformlist=res.data;
      })
    },

  }
}
</script>

<style scoped>
#wrap {
  display: flex;
  justify-content: center;
}
#wrap1 {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.block {
  width: 30%;
  height: 220px;
  background-color: #B55959;
  border-style: solid;
  border-width: 2px;
}

.block2 {
  width: 25%;
  height: 420px;
  background-color: white;
  border-style: solid;
  border-width: 2px;
}

.set :hover{
  animation: rotate360 .5s ease-out 0s;
}
/*包含以下四种的链接*/
a {
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>
