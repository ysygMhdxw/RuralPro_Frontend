<template style="margin: 0">
  <div class="wrapper">
    <NavigationBarNew style="position: absolute;top: 0;z-index:999;"/>
    <div class="slider-container">
      <div class="item">
        <img v-if="currentIndex == 0" src="../assets/img/img_slide1.jpg">
        <img v-else-if="currentIndex == 1" src="../assets/img/img_slide2.jpg">
        <img v-else src="../assets/img/img_slide3.jpg">
      </div>
      <div class="card-container">
        <div class="tag">{{this.dataList[currentIndex].tag}}</div>
        <div class="main-container">
          <div class="title">{{this.dataList[currentIndex].title}}</div>
          <div class="content">{{this.dataList[currentIndex].content}}</div>
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
        <div class="item" v-for="(nItem, nIndex) in newsList">
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
          title: '标题1标题1标题1标题1标题1标题1标题1',
          content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1...',
          tag: 'tag1tag1'
        },
        {
          title: '标题2标题2标题2标题2标题2标题2标题2标题2标题2',
          content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2...',
          tag: 'tag2tag2'
        },
        {
          title: '标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3',
          content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3...',
          tag: 'tag3tag3'
        }
      ],
      newsList: [
        {
          title: '标题1标题1标题1标题1标题1标题1标题1',
          content: '内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1...',
          tag: 'tag1tag1',
          date: '2022-04-07'
        },
        {
          title: '标题2标题2标题2标题2标题2标题2标题2标题2标题2',
          content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2...',
          tag: 'tag2tag2',
          date: '2022-04-07'
        },
        {
          title: '标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3',
          content: '内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3内容3...',
          tag: 'tag3tag3',
          date: '2022-04-07'
        },
        {
          title: '标题4标题4标题4标题4标题4标题4标题4',
          content: '内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4...',
          tag: 'tag4tag4',
          date: '2022-04-07'
        },
        {
          title: '标题5标题5标题5标题5标题5标题5标题5标题5标题5标题5',
          content: '内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4内容4...',
          tag: 'tag5tag5',
          date: '2022-04-07'
        },
        {
          title: '标题6标题6标题6标题6标题6标题6标题6标题6标题6',
          content: '内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6内容6...',
          tag: 'tag6tag6',
          date: '2022-04-07'
        }
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
    font-size: 17px;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .main-container .content {
    font-size: 14px;
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
