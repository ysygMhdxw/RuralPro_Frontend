<template style="margin: 0">
  <div class="wrapper">
    <NavigationBarNew style="position: absolute;top: 0;z-index:999;"/>
    <div class="slider-container">
      <div class="item">
        <img v-if="currentIndex == 0" src="../assets/img/img_slide2.jpg">
        <img v-else-if="currentIndex == 1" src="../assets/img/img_slide1.jpg">
        <img v-else src="../assets/img/img_slide3.jpg">
      </div>
      <div class="card-container">
        <div class="tag" >{{this.dataList[currentIndex].tag}}</div>
        <div class="main-container">
          <div class="title">{{this.dataList[currentIndex].title}}</div>
          <div class="content"  >{{this.dataList[currentIndex].content}}</div>
        </div>
        <ul>
          <li v-for="(dItem, dIndex) in dataList" @click="gotoPage(dIndex)">
            <div v-if="dIndex == currentIndex" class="dot-fill" v-on:mouseover="stopInv()" v-on:mouseout="runInv()"></div>
            <div v-else class="dot" v-on:mouseover="stopInv()" v-on:mouseout="runInv()"></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="news-container">
        <div class="hide" v-show="false" v-for="(nItem, nIndex) in newsList"></div>
        <div @click="getnews" class="item" v-for="(nItem, nIndex) in newsList">
          <div class="date">{{nItem.date}}</div>
          <div class="tag">{{nItem.tag}}</div>
          <div class="title">{{nItem.title}}</div>
          <div class="content">{{nItem.content}}</div>
        </div>
    </div>
  </div>

</template>

<script>
import NavigationBarNew from "@/components/NavigationBarNew";
export default {
  name: "CountyNews",
  components: {NavigationBarNew},
  data() {
    return {
      dataList: [
        {
          title: '后减贫时代贫困治理研究的最新理论',
          content: ' 2019年10月，党的十九届四中全会提出“建立解决相对贫困的长效机制”，围绕相对贫困治理尤其是相对贫困治理长效机制的研究日渐丰富。谢伏瞻院长在中国社会科学院国情调研特大项目成果发布会上指出：“要深刻总结脱贫攻坚经验，...',
          tag: '扶贫日系列'
        },
        {
          title: '妇女贫困问题研究书单',
          content: '对于男性而言，贫困妇女的家庭事务负担更重却缺乏话语权，心理压力更大却缺乏理解，在社会生活各领域易受到不公正对待却容易习以为常。由于自身脆弱性较高，加之社会意识中普遍存在着忽视妇女需要的现象，导致贫困妇女脱贫难度更大。...',
          tag: '特别策划'
        },
        {
          title: '中国贫困治理研究书单',
          content: '中国社会科学院当代中国马克思主义政治经济学创新智库对国内外贫困治理的理论、实践、中国经验和中国案例等进行了系统整理，总结中国消除绝对贫困、全面建成小康社会成果与经验，形成中国贫困治理研究的核心书单，共计收录图书56种。...',
          tag: '扶贫日系列'
        }
      ],
      newsList: [
        {
          title: '数说巩固拓展脱贫攻坚成果这一年',
          content: '2021年是巩固拓展脱贫攻坚成果同乡村振兴有效衔接的第一年，经过各方面共同努力，脱贫攻坚成果得到巩固拓展，守住了不发生规模性返贫的底线，全面推进乡村振兴实现良好开局。...',
          tag: '减贫数据库',
          date: '2022-02-25'
        },
        {
          title: '唐仁健：巩固脱贫攻坚成果 全面推进乡村振兴',
          content: '3月5日上午，十三届全国人大五次会议开幕会结束后，首场“部长通道”采访活动举行，部分列席会议的国务院有关部委负责人通过网络视频方式接受采访。...',
          tag: '减贫数据库',
          date: '2022-03-07'
        },
        {
          title: '减贫脱贫 交通先行——各界人士共话可持续交通与消除贫困',
          content: '交通在全球消除贫困中扮演什么角色、疫情下如何巩固减贫脱贫成果……第二届联合国全球可持续交通大会10月14日至16日在北京举行，“消除贫困”...',
          tag: '南方网',
          date: '2021-10-17'
        },
        // {
        //   title: '标题4标题4标题4标题4标题4标题4标题4',
        //   content: '内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4...',
        //   tag: 'tag4tag4',
        //   date: '2022-04-07'
        // },
        // {
        //   title: '标题5标题5标题5标题5标题5标题5标题5标题5标题5标题5',
        //   content: '内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4...',
        //   tag: 'tag5tag5',
        //   date: '2022-04-07'
        // },
        // {
        //   title: '标题6标题6标题6标题6标题6标题6标题6标题6标题6',
        //   content: '内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6...',
        //   tag: 'tag6tag6',
        //   date: '2022-04-07'
        // }
      ],
      currentIndex: 0,  // 默认显示图片
      timer: null  // 定时器
    }
  },
  computed: {
    //下一张
    nextIndex() {
      if(this.currentIndex == this.dataList.length - 1) {
        return 0;
      }else {
        return this.currentIndex + 1;
      }
    }
  },
  mounted() {
    this.runInv();
  },
  methods: {
    //临时跳转链接

      getnews(){
        window.location.href = 'https://www.jianpincn.com/zgjpsjk/zxzx/671549.html';
      },

    // 切换图片
    gotoPage(index) {
      this.currentIndex = index;
    },
    // 定时器
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 3000)
    },
    // 关闭定时器
    stopInv() {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    float: left;
    width: 25px;
    cursor: pointer;
  }

  .slider-container {
    max-width: 1330px;
    margin: 0 auto;
    position: relative;
    margin-top: 85px;
  }

  .slider-container .item {
    height: 590px;
    width: 66%;
  }

  .slider-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-container {
    width: 45%;
    height: 66%;
    position: absolute;
    background: url("../assets/img/card_bg.png") no-repeat center 0;
    background-size: 100% 100%;
    right: 0;
    bottom: 20%;
  }

  .card-container li {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-container ul {
    position: absolute;
    bottom: 10%;
    right: 15%;
  }

  .card-container .tag {
    position: absolute;
    top: 10%;
    right: 15%;
    color: #fff;
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    padding: 0px 15px;
    background: url("../assets/img/tag-bg.svg") no-repeat center 0;
    background-size: 100% 100%;
  }

  .main-container {
    position: absolute;
    top: 30%;
    left: 16%;
    width: 420px;
    height: 160px;
    text-align: left;
  }

  .main-container:hover {
    cursor: pointer;
  }

  .main-container .title {
    color: #333;
    font-size: 20px;
    font-family: 华文中宋;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .main-container .content {
    font-size: 14px;
    font-family: 宋体;
    color: #555;
    line-height: 30px;
  }

  .dot, .dot-fill {
    width: 12px;
    height: 12px;
    border: 1px solid #BD3131;
    border-radius: 50%;
  }

  .dot-fill {
    background-color: #BD3131;
  }

  .news-container {
    text-align: left;
    font-size: 12px;
    margin: 0 auto;
    margin-top: 35px;
    width: 1375px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .news-container .hide {
    position: absolute;
  }

  .news-container .item {
    position: relative;
    width: 31.5%;
    padding: 20px;
    border: 1px solid #999;
    box-shadow: 1px 1px 5px 1px #bbb;
    border-radius: 3px;
    margin-bottom: 25px;
  }

  .news-container .item:hover {
    cursor: pointer;
  }

  .news-container .date {
    display: inline-block;
    color: #777;
  }

  .news-container .tag {
    display: inline-block;
    position: absolute;
    top: 9%;
    right: 6%;
    color: #fff;
    height: 30px;
    line-height: 30px;
    padding: 0px 13px 0 20px;
    background: url("../assets/img/tag-bg.svg") no-repeat center 0;
    background-size: 100% 100%;
  }

  .news-container .title {
    font-size: 14px;
    color: #000;
    margin-top: 20px;
  }

  .news-container .content {
    margin-top: 10px;
  }

</style>
