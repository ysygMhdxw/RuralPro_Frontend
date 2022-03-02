<template>
  <div id="wrap">
    <div id="div1" class="block">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;color: white;right: 30%">关于扶贫</p>
        <p style="font-size: 15px;font-family: 宋体;color: white;padding-top: 5px;">提供用户直达平台，使用户更加便利的了解当下权威的减贫网站，深刻了解减贫途径并切实的减贫到实处。
        </p>
      </div>
      <img class="set" src="../assets/img/set.svg" style="width:30px;height:30px;position: relative;top:45%;right:38%"/>
    </div>
    <div id="div2" class="block" style="background-color: white">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;right: 30%">扶贫组织</p>
        <p style="font-size: 15px;font-family: 宋体;padding-top: 5px;">社会扶贫作为一项复杂的工作，扶贫组织在其中有很强地补短板作用，在我国的扶贫工作实践中不可或缺。
        </p>
      </div>
      <img class="set" src="../assets/img/setBlack.svg" style="width:30px;height:30px;position: relative;top:45%;right:38%"/>
    </div>
    <div id="div3" class="block" style="background-color: white">
      <div style="position: relative;top: 20%;text-align: left;padding-left: 10%;padding-right: 10%">
        <p style="font-size: 23px;font-family: 华文中宋;right: 30%">国际扶贫组织</p>
        <p style="font-size: 15px;font-family: 宋体;padding-top: 5px;">改革开放以来，中国的扶贫取得了巨大的成绩，其中国际扶贫组织发挥了不可忽视的促进作用和催化作用。
        </p>

      </div>
      <img class="set" src="../assets/img/setBlack.svg" style="width:30px;height:30px;position: relative;top:45%;right:38%"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "PovertySwitchTool"
}
</script>

<style scoped>
#wrap {
  display: flex;
  justify-content: center;

}

.block {
  width: 30%;
  height: 250px;
  background-color: #B55959;
  border-style: solid;
  border-width: 2px;
}

.set :hover{
  animation: rotate360 .5s ease-out 0s;
}
</style>