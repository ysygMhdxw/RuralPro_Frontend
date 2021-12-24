<template>
  <NavigationBar style="position: absolute;z-index:999;top: 0;"/>
  <div style="margin-top: 80px">
    <el-carousel height="906px" :interval="2000" arrow="always">
      <el-carousel-item>
        <div class="textLabeltab">
          <a href="https://www.jianpincn.com/"
             style="text-decoration: none;font-family: 华文中宋;font-size:50px;font-weight: bold;color: #FFFFFF">减贫数据库</a>
          <p style="color: #FFFFFF;text-align: left">
            CPAD全方位展现我国贫困地区档案、减贫政策演进、贫困成因与减贫努力、国内外减贫理论与实践、专家观点与建议、减贫数据图表，为学术提供理论指导，为政府提供决策参考，为中国减贫事业提供智力支持。</p>
        </div>
        <!--      <img src="picCarousel({{item}})" />-->
        <img src="../assets/img/jianpingdatabase.png"/>
      </el-carousel-item>
      <el-carousel-item>
        <div class="textLabeltab">
          <a href="http://f.china.com.cn/"
             style="text-decoration: none;font-family: 华文中宋;font-size:50px;font-weight: bold;color: #FFFFFF">中国扶贫在线</a>
          <p style="color: #FFFFFF;text-align: left">
            扶贫门户网站“中国扶贫在线”网站由国务院新闻办公室领导，国家重点新闻网站中国网及中国发展门户网承建。旨在打造最具权威性、影响力和专业化的扶贫外宣平台，建成国际化的中国扶贫信息国情库，成为中外网民了解和认识中国扶贫状态的百科全书。
          </p></div>
        <!--      <img src="picCarousel({{item}})" />-->
        <img src="../assets/img/chinacountyassistanceonline.jpg"/>
      </el-carousel-item>
      <el-carousel-item>
        <div class="textLabeltab">
          <a href="http://f.china.com.cn/"
             style="text-decoration: none;font-family: 华文中宋;font-size:50px;font-weight: bold;color: #FFFFFF">中国扶贫网</a>
          <p style="color: #FFFFFF;text-align: left">
            中国扶贫网是中国扶贫办的一个官方网站，办刊宗旨是宣传党中央、国务院及各级党委、政府扶贫政策与扶贫经验，报道扶贫及其他公益慈善搭领域新闻事件，分析探讨扶贫理论及扶贫战略，反映国际扶贫动态，建国内扶贫组织与国际扶贫机构的沟通交流平台，推动我国扶贫公益事业的发展。
          </p>
        </div>
        <!--      <img src="picCarousel({{item}})" />-->
        <img src="../assets/img/zhongguoshehuifupinwang.jpg"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "FormalPage",
  components: {NavigationBar},
  mounted() {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL); //这里有没有都无所谓，最好是有以防万一
      window.addEventListener('popstate', this.back, false);
      // 回退时执行goback方法
    }
  },
  destroyed(){
    window.removeListener('popstate', this.back,false)
  },
  data() {
    return {}
  },
  methods: {
    back(){
      //无法实现
      this.$emit('change',false)

    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.textLabeltab {
  position: absolute;
  width: 500px;
  padding-top: 20px;
  padding-bottom: 20px;
  top: 600px;
  padding-left: 100px;
  padding-right: 50px;
  border-radius: 0px 10px 10px 0px;
  background-color: rgba(0, 0, 0, 0.4);

}
</style>
