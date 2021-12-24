<template>
<div style="margin: 0px;padding: 0px">

  <canvas id="caibaojian" width="1000px" height="860" style="margin: 0">时间</canvas>
  <el-card class="card" shadow="always" style="position: absolute; width: 460px; height:300px;z-index: 99;top: 250px;left: 670px;margin: 0;padding: 30px">
   <h2 style="font-family: 华文中宋;font-size: 40px"><span style="color: #BD3131">致</span>远方</h2>
    <h1>包葵阳</h1>
    <p>我漫步在城市的灯光</p>
    <p>你坚守在北风的猴场</p>
    <p>你守着重荫山和月亮</p>
    <p>还有炊烟和童年的梦想</p>
  </el-card>
</div>
</template>

<script>
export default {
  name: "TimeLineHome",
  mounted() {
    this.drawRectangle();
  },
  methods:{
    drawRectangle(){
      var bg = document.getElementById('caibaojian');
      var ctx = bg.getContext('2d');
//填充三角形（等边）
      ctx.beginPath();
      var height = 904;//计算等边三角形的高
      ctx.moveTo(1803,0); //从A（100,0）开始
      ctx.lineTo(-90,height);//从A(100,0)开始，画到B (0,173)结束
      ctx.lineTo(1803,height); //B(0,173)-C(200,173)
//ctx.fillStyle='#00ff00';//以纯色绿色填充
      var grd = ctx.createLinearGradient(0,0,200,0);//使用渐变颜色填充,从(0,0)到(200,0) （左到右）
      grd.addColorStop(0,"#BD3131"); //起始颜色
      grd.addColorStop(1,"#BD3131"); //终点颜色
      ctx.fillStyle=grd; //以上面定义的渐变填充
      ctx.fill(); //闭合形状并且以填充方式绘制出来

      var ctx = bg.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.save();
      ctx.arc(333, 703, 20, 0, Math.PI*2, false);
      ctx.fillStyle="#FFFFFF"
      ctx.fill();
      ctx.strokeStyle="#BD3131"
      // ctx.restore();
      ctx.stroke();


      var ctx = bg.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.save();
      ctx.arc(553, 593, 20, 0, Math.PI*2, false);
      ctx.fillStyle="#FFFFFF"
      ctx.fill();
      ctx.strokeStyle="#BD3131"
      // ctx.restore();
      ctx.stroke();

      var ctx = bg.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.save();
      ctx.arc(850, 455, 20, 0, Math.PI*2, false);
      ctx.fillStyle="#FFFFFF"
      ctx.fill();
      ctx.strokeStyle="#BD3131"
      // ctx.restore();
      ctx.stroke();

      var ctx = bg.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.save();
      ctx.arc(1210,280, 20, 0, Math.PI*2, false);
      ctx.fillStyle="#FFFFFF"
      ctx.fill();
      ctx.strokeStyle="#BD3131"
      // ctx.restore();
      ctx.stroke();

      var ctx = bg.getContext("2d");
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.save();
      ctx.arc(1500, 147, 20, 0, Math.PI*2, false);
      ctx.fillStyle="#FFFFFF"
      ctx.fill();
      ctx.strokeStyle="#BD3131"
      // ctx.restore();
      ctx.stroke();


      //左上方标题
      var context = bg.getContext("2d");
      context.font      = "normal 36px STZhongsong";
      context.fillStyle = "#000000";
      context.fillText("历程", 100,140);
      ctx.moveTo(100,170);
      ctx.lineTo(200,170);
      ctx.lineWidth=5;
      ctx.strokeStyle="#BD3131";
      ctx.stroke();

      var context = bg.getContext("2d");
      context.font      = "normal 30px STZhongsong";
      context.fillStyle = "#FFF";
      context.fillText("2015年 中共中央国务院印发《中共中央国务院关于打赢脱贫攻坚战的决定》", 365,714);

      var context = bg.getContext("2d");
      context.font      = "normal 30px STZhongsong";
      context.fillStyle = "#FFF";
      context.fillText("2019年 中央一号文件再次聚焦“三农”，提出2020年确保农村贫困人口脱贫", 593, 603,);

      var context = bg.getContext("2d");
      context.font      = "normal 34px STZhongsong";
      context.fillStyle = "#FFF";
      context.fillText("我国脱贫攻坚战取得全面胜利", 1260, 400,);
      var context = bg.getContext("2d");
      context.font      = "normal 34px STZhongsong";
      context.fillStyle = "#FFF";
      context.fillText("832个贫困县全部摘帽", 1310, 440,);
      var context = bg.getContext("2d");
      context.font      = "normal 34px STZhongsong";
      context.fillStyle = "#FFF";
      context.fillText("现行标准下9899万农村贫困人口全部脱贫", 1160, 480,);

      var context = bg.getContext("2d");
      context.font      = "normal 150px STZhongsong";
      context.fillStyle = "#BD3131";
      context.fillText("2021", 270, 480,);

      var context = bg.getContext("2d");
      context.font      = "normal 30px STZhongsong";
      context.fillStyle = "#FFF";
      context.fillText("2021年 《中国的全面小康》白皮书发布", 1245,295,);

      var context = bg.getContext("2d");
      context.font      = "normal 30px STZhongsong";
      context.fillStyle = "#FFF";
      context.fillText("未完待续……", 1530, 155,);
    }
  }
}
</script>

<style scoped>
>>>.el-card__body {

  padding: 0;

}
p{
  line-height: 35px;
  font-size: 20px;
  font-weight: bold;
  font-family: "华文仿宋";
}
</style>
