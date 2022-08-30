<template>
  <div class="outer">
    <div class="form-wrapper">
      <h3>减贫数读</h3>
      <div class="red-line"></div>
      <div class="form-container">
        <div class="form-item" v-for="(item, index) in items" :key="index"
             ref="rotate" @mouseenter="rotate(index)" @mouseleave="stop(index)">
          <span class="form-data">{{item.data}}</span>
          <p class="data-explain">{{item.explain}}</p>
          <div class="rotate-flower"></div>
        </div>
      </div>
      <div class="btns">
        <span class="dot" v-for="(dotItem, dotIndex) in 3" ref="dot" @click="change(dotIndex
        )"></span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DataForm",
  data() {
    return {
      curIndex: 0,
      items1: [{
        data: '2020',
        explain: '2020年实现全面小康'
      },{
        data: '10',
        explain: '提前10年完成联合国2030减贫目标'
      },{
        data: '7.7亿',
        explain: '改革开放以来，中国7.7亿农村贫困人口摆脱贫困'
      },{
        data: '70%',
        explain: '中国减贫人口占全球同期减贫人口70%以上'
      },{
        data: '9899万',
        explain: '十八大以来，9899万农村贫困人口全部脱贫'
      },{
        data: '832',
        explain: '832个贫困县全部摘帽'
      },{
        data: '12.8万',
        explain: '12.8万个贫困村全部出列'
      },{
        data: '960万',
        explain: '全国960万人口通过易地搬迁实现脱贫'
      }],
      items2: [{
        data: '12.8万',
        explain: '12.8万个贫困村全部出列'
      },{
        data: '90万',
        explain: '90万户贫困人口住上安全住房'
      },{
        data: '1021万',
        explain: '累计对1021万贫困妇女和妇女骨干进行各类技能培训'
      },{
        data: '2000万',
        explain: '2000多万贫困患者得到分类救治'
      },{
        data: '2000万',
        explain: '近2000万名群众享受低保和特困救助供养'
      },{
        data: '2400万',
        explain: '2400多万困难和重度残疾人收到生活和护理补贴'
      },{
        data: '110万',
        explain: '全国贫困地区新改建公路110万公里，长度可绕地球27圈'
      },{
        data: '99%',
        explain: '贫困地区农网供电可靠率达到99%'
      }],
      items3: [{
        data: '98%',
        explain: '贫困村同4G和光纤比例达98%'
      },{
        data: '25.5万',
        explain: '全国累计选派25.5万个驻村工作队'
      },{
        data: '300万',
        explain: '300多万名第一书记和驻村干部'
      },{
        data: '1.6万亿',
        explain: '中央、省、市县财政累计投入专项扶贫资金近1.6万亿元'
      },{
        data: '7100亿',
        explain: '扶贫小额信贷累计发放7100多亿元'
      }],
      items: null,
      timer: null
    }
  },
  mounted() {
    this.$refs.dot[0].className += ' active';
    this.items = this.items1;
    this.timer = setInterval(() => {
      this.change((this.curIndex + 1) % 3);
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    // 清除当前定时器并重置
    clearAndReset() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.change((this.curIndex + 1) % 3);
      }, 2000);
    },

    // 开启花朵旋转效果，清除定时器
    rotate: function(index) {
      this.$refs.rotate[index].className += ' active';
      clearInterval(this.timer);
    },

    // 关闭花朵旋转效果，开启定时器
    stop: function(index) {
      this.$refs.rotate[index].classList.remove('active');
      this.timer = setInterval(() => {
        this.change((this.curIndex + 1) % 3);
      }, 2000);
    },

    // 切换页面，清除并重置定时器
    change: function(index) {
      this.curIndex = index;
      let curItem = this.$refs.dot[index];
      curItem.classList.remove('active');
      curItem.className += ' active';
      this.$refs.dot[(index + 1) %3].classList.remove('active');
      this.$refs.dot[(index + 2) %3].classList.remove('active');
      if(index === 0) {
        this.items = this.items1;
      }
      if(index === 1) {
        this.items = this.items2;
      }
      if(index === 2) {
        this.items = this.items3;
      }
      this.clearAndReset();
    }
  }
}
</script>

<style scoped>
  @keyframes rotates {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .outer {
    background-color: #f3f2ef;
    width: 100%;
    height: 550px;
  }

  .form-wrapper {
    position: relative;
    top: -50px;
    overflow: hidden;
    margin: 0 auto;
    width: 70%;
    background-color: #fff;
    padding-bottom: 50px;
  }

  h3 {
    position: relative;
    font-size: 30px;
    color: #333;
    letter-spacing: 4px;
    margin-top: 60px;
    padding-bottom: 24px;
  }

  h3::before {
    width: 36px;
    height: 7px;
    margin-left: -18px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    z-index: 12;
    background: #b70031;
    content: "";
  }

  .form-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .form-item {
    position: relative;
    flex: 1;
    height: 150px;
    text-align: center;
    width: calc(100% / 4);
    min-width: calc(100% / 4);
    max-width: calc(100% / 4);
  }

  .form-item:hover {
    cursor: pointer;
  }

  .form-data {
    display: inline-block;
    width: 100%;
    font-size: 36px;
    color: #b70031;
    margin-top: 52px;
    font-weight: bold;
  }

  .data-explain {
    display: inline-block;
    width: 100%;
    font-size: 13px;
    padding: 0 20px 0 20px;
    color: #a0a0a0;
    line-height: 20px;
    margin-top: 10px;
  }

  .rotate-flower {
    width: 160px;
    height: 160px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 0px;
    z-index: 99;
    margin-left: -80px;
    background: url(../assets/img/flower.svg) no-repeat center;
    opacity: 0;
    transition: all 0.2s ease;
    animation: rotates 4s linear infinite;
    background-size: 100%;
  }

  .active .rotate-flower {
    opacity: 1;
  }

  .red-line {
    width: 100px;
    height: 4px;
    left: 50px;
    top: 80px;
    background: #a31f34;
    position: absolute;
    left: 60px;
    top: 98px;
    z-index: 23;
    transform: rotate(-37deg);
  }

  .btns {
    overflow: hidden;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    opacity: 0.5;
    border-radius: 50%;
    background-color: #a31f34;
    margin: 0 8px;
  }

  .dot.active {
    width: 18px;
    height: 18px;
    opacity: 1;
  }

  .dot:hover {
    cursor: pointer;
  }
</style>