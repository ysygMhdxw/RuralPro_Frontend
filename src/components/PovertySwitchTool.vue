<template>
  <div>
  <div id="wrap">
    <div id="div1" class="block" @click="swithPlatform(1)">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;color: white;right: 30%">关于扶贫</p>
        <p style="font-size: 15px;font-family: 宋体;color: white;padding-top: 5px;">提供用户直达平台，使用户更加便利的了解当下权威的减贫网站，深刻了解减贫途径并切实的减贫到实处。
        </p>
      </div>
      <img class="set" src="../assets/img/set.svg" style="width:30px;height:30px;position: relative;top:45%;right:38%"/>
    </div>
    <div id="div2" class="block" @click="swithPlatform(2)" style="background-color: white">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;right: 30%">扶贫组织</p>
        <p style="font-size: 15px;font-family: 宋体;padding-top: 5px;">社会扶贫作为一项复杂的工作，扶贫组织在其中有很强地补短板作用，在我国的扶贫工作实践中不可或缺。
        </p>
      </div>
      <img class="set" src="../assets/img/setBlack.svg" style="width:30px;height:30px;position: relative;top:45%;right:38%"/>
    </div>
    <div id="div3" class="block" @click="swithPlatform(3)" style="background-color: white">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;right: 30%">国际扶贫组织</p>
        <p style="font-size: 15px;font-family: 宋体;padding-top: 5px;">改革开放以来，中国的扶贫取得了巨大的成绩，其中国际扶贫组织发挥了不可忽视的促进作用和催化作用。
        </p>

      </div>
      <img class="set" src="../assets/img/setBlack.svg" style="width:30px;height:30px;position: relative;top:45%;right:38%"/>
    </div>
  </div>
  <div id="wrap1" style="position:absolute;top:60%;padding-bottom: 50px;padding-right: 30px">
      <div v-for="eachplatform in platformlist" class="Grid-cell block2" >
        <a :href="eachplatform.url" style="text-decoration: none" >
          <img style="width:100%;height: 50%" :src="eachplatform.pic"/>
          <div style="height: 100px;width:10px;border:black;border-style: solid;border-width: 2px;margin:auto;left: 0;right:0"></div>
          <p style="color:black; font-size: 23px;padding-top: 20px;font-family: 华文中宋">{{eachplatform.webname}}</p>
          <p style="text-align: left;padding: 20px;font-size:15px;font-family: 宋体">  {{eachplatform.introduction}}</p>
        </a>
      </div>
  </div>
  </div>
</template>

<script>
import request from "@/utils/request";

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
    }
  },
  methods: {
    swithPlatform(k){
      this.flag=k;
      var type;
      if(k===1)type="platform";
      else if(k===2)type="inorganization";
      else type="outorganization";
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
  height: 250px;
  background-color: #B55959;
  border-style: solid;
  border-width: 2px;
}

.block2 {
  width: 25%;
  height: 400px;
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