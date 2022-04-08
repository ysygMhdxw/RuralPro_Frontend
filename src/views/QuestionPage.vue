<template>
  <NavigationBarNew style="position: absolute;z-index:999;top: 0;"/>
  <div class="formalpageqa" style="background-color: #FCF8F5;">
    <div style="height:80px;"></div>
    <img src="../assets/img/tag.png" style="margin-left: 210px;width: 40px;height: 40px;display:inline-block;" alt="">
    <h2 style="margin-left: 20px; font-size: 40px; color:#7C3637;display:inline-block;">减贫知识问答</h2>
    <div class="judgement-module" style="display:flex;" v-for="(eItem, ind) in judgeList" v-show="ind + 1== se">
      <div class="title-des">
        <img src="../assets/img/square-icon.png" style="margin-left: 235px;width: 25px;height: 25px;display:inline-block;" alt="">
        <h3 style="margin-left: 20px;margin-top: 50px;font-size: 30px;color:#7C3637;display:inline-block;">判断题</h3>
        <div style="margin-left: 280px;margin-top: 20px;width: 200px;color:#7C3637;">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
      </div>
      <div class="card" style="cursor: pointer; width: 800px;" ontouchstart="this.classList.toggle('hover');">
        <div class="container" style="margin-left: 140px;">
          <div class="front">
            <img src="../assets/img/formalpagebg.jpg" style="width: 100%;height: 400px;border-radius: 10px" alt="">
            <div class="inner">
              <p style="font-size:20px">{{eItem.title}}</p>
              <span>请翻转查看答案和解析</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>{{eItem.answer}}</p>
            </div>
          </div>
        </div>
        <div class="all-arrow-things">
          <div class="CardsList-navControl previousButton">
            <span class="UIIconButton" @click="pre">
              <img src="../assets/img/arrow-l.png" style="width: 40px;height: 40px;" alt="">
            </span>
          </div>
          <div class="CardsList-navControl progressIndex" style="font-style: italic; font-size:140%;color:#7C3637;position: relative;top: 50%;transform: translateY(20%); padding-left:20px; padding-right:20px;">
            <span class="UIText" style="display: inline-block;">{{se}}/10</span>
          </div>
          <div class="CardsList-navControl nextButton">
            <span class="UIIconButton" @click="ne">
              <img src="../assets/img/arrow-r.png" style="width: 40px;height: 40px" alt="">
            </span>
          </div>
          <div class="CardsList-navControl share" style="padding-left:400px;">
            <span class="UIIconButton">
              <img src="../assets/img/share-icon.png" style="width: 40px;height: 40px" alt="">
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="selection-module" v-for="(eachItem, index) in list" v-show="index + 1==seq">
      <div class="title-des">
        <img src="../assets/img/square-icon.png" style="margin-left: 235px;width: 25px;height: 25px;display:inline-block;" alt="">
        <h3 style="margin-left: 20px;margin-top: 50px;font-size: 30px;color:#7C3637;display:inline-block;">十个选择题趣味问答</h3>
        <div style="margin-left: 280px;margin-top: 20px;width: 1000px;color:#7C3637;">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</div>
      </div>
      <div class="big-card" style="width: 1200px;">
        <div class="container2" style="margin-left:350px;margin-top:40px;">
          <div class="front2" style="position:relative;">
            <img src="../assets/img/formalpagebg2.jpg" style="width: 100%;height: 500px;border-radius: 10px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);" alt="">
            <div class="inner2" style="position:absolute;top:100px;left:100px;">
              <div class="position" style="font-size:40px;font-style: italic;color:#7C3637;padding-bottom:40px;">{{index + 1}}</div>
              <div class="choiceQuestion-examMode" style="text-align: center;padding-bottom: 50px;">
                <div class="qaDescription">
                  <p>
                    <span style="font-family: 楷体;font-size:20px;">{{eachItem.title}}（ &nbsp;&nbsp;）。</span>
                  </p>
                </div>
                <div class="choice-box">
                  <ul class="choices">
                    <li style="padding-top: 30px;">
                      <input class="u-tbi" id="op_1" type="radio" :name="index" @change="radioChange(index, 'A')">
                      <label class="u-tbl f-pr f-cb" for="op_1">
                        A.<span style="font-family: 楷体;font-size:20px;">{{eachItem.option1}}</span>
                      </label>
                    </li>
                    <li style="padding-top: 30px;">
                      <input class="u-tbi" id="op_2" type="radio" :name="index" @change="radioChange(index, 'B')">
                      <label class="u-tbl f-pr f-cb" for="op_2">
                        B.<span style="font-family: 楷体;font-size:20px;">{{eachItem.option2}}</span>
                      </label>
                    </li>
                    <li style="padding-top: 30px;">
                      <input class="u-tbi" id="op_3" type="radio" :name="index" @change="radioChange(index, 'C')">
                      <label class="u-tbl f-pr f-cb" for="op_3">
                        C.<span style="font-family: 楷体;font-size:20px;">{{eachItem.option3}}</span>
                      </label>
                    </li>
                    <li style="padding-top: 30px;">
                      <input class="u-tbi" id="op_4" type="radio" :name="index" @change="radioChange(index, 'D')">
                      <label class="u-tbl f-pr f-cb" for="op_4">
                        D.<span style="font-family: 楷体;font-size:20px;">{{eachItem.option4}}</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="all-arrow2-things">
          <div class="CardsList-navControl count">
            <svg width="400px" height="40px" style="margin-left: 380px;">
              <circle cx="15px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[0]!=0" cx="15px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="55px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[1]!=0" cx="55px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="95px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[2]!=0" cx="95px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="135px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[3]!=0" cx="135px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="175px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[4]!=0" cx="175px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="215px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[5]!=0" cx="215px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="255px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[6]!=0" cx="255px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="295px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[7]!=0" cx="295px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="335px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[8]!=0" cx="335px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle cx="375px" cy="19px" r="10px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
              <circle v-show="selected[9]!=0" cx="375px" cy="19px" r="3px" stroke="#7C3637" fill="transparent" stroke-width="2px"/>
            </svg>
          </div>
          <div class="CardsList-navControl previousButton" style="margin-left:50px;">
            <span class="UIIconButton" @click="previous" >
              <img src="../assets/img/arrow-l.png" style="width: 40px;height: 40px;" alt="">
            </span>
          </div>
          <div class="CardsList-navControl progressIndex" style="font-style: italic; font-size:140%;color:#7C3637;position: relative;top: 50%;transform: translateY(20%); padding-left:20px; padding-right:20px;">
            <span class="UIText" style="display: inline-block;">{{seq}}/10</span>
          </div>
          <div class="CardsList-navControl nextButton">
            <span class="UIIconButton" @click="next">
              <img src="../assets/img/arrow-r.png" style="width: 40px;height: 40px" alt="">
            </span>
          </div>
          <div class="submitContainer">
            <div class="submitBtn" @click="calculate">提交</div>
          </div>
        </div>
        <div class="GradeCount" v-show="scoreFlag" style="margin-left:385px; font-size:25px; color:#7C3637; margin-top:30px;">
          <span style="display: inline-block;font-weight: bold;">您的得分为</span>
          <span style="display: inline-block; padding-left:25px; padding-right:25px; font-style: italic;">{{score}}</span>
          <span style="display: inline-block;font-weight: bold;">分</span>
        </div>
      </div>
    </div>
    <div style="height:80px;"></div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import NavigationBarNew from "@/components/NavigationBarNew";
import request from "@/utils/request";

export default {
  name: "QuestionPage",
  components: {NavigationBarNew, NavigationBar},
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
    return {
      list: '',
      judgeList:[0,0,0,0,0,0,0,0,0,0],
      seq: 1,
      se: 1,
      selected: [0,0,0,0,0,0,0,0,0,0],
      scoreFlag: false,
      score: 0
    }
  },
  created(){
    this.load()
  },
  methods: {
    load(){
      request.get("/Question/get/question/data",{

      }).then(res =>{
        this.list = res.data;
        let j = 0;
        for(let i of this.list) {
          if(i.isChoice=='0'){
            this.judgeList[j] = i;
            j++;
          }
        }
        //console.log("list", this.list);
      })
    },
    pre() {
      if(!(this.se==1)) {
        this.se--;
      }
    },
    ne() {
      if(!(this.se==10)) {
        this.se++;
      }
    },
    previous() {
      if(!(this.seq==1)) {
        this.seq--;
      }
    },
    next() {
      if(!(this.seq==10)) {
        this.seq++;
      }
    },
    radioChange(index, value) {
      this.selected[index] = value;
    },
    calculate() {
      this.score = 0;
      for(let i of this.list) {
        if(i.isChoice=='1'){
          if(i.answer == this.selected[i.id-1])
            this.score += 10;
        }
      }
      this.scoreFlag = true;
    },
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

*{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
}

h1{
  font-size: 2.5rem;
  font-family: 'Montserrat';
  font-weight: normal;
  color: #444;
  text-align: center;
  margin: 2rem 0;
}

button {
  border: none;
  box-shadow: none;
}

.wrapper{
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
}

.cols{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.col{
  width: 600px;
  margin: 1rem;
  cursor: pointer;
}

.container{
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.front,
.back{
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
  border-radius: 10px;
  background-position: center;
  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 400px;
  height: 400px;
  border-radius: 10px;
  color: #fff;
}

.back{
  background: #cedce7;
  background: -webkit-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
  background: -o-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
  background: linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
}

.front:after{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  opacity: .6;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.container:hover .front,
.container:hover .back{
  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.inner{
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
  text-align: center;
}

.inner p {
  text-align: center;
}

.container .back{
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container .front{
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .back{
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .front{
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.front .inner p{
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after{
  content: '';
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #C6D4DF;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -.75rem;
}

.front .inner span{
  color: rgba(255,255,255,0.7);
  font-family: 'Montserrat';
  font-weight: 300;
}

@media screen and (max-width: 64rem){
  .col{
    width: calc(33.333333% - 2rem);
  }
}

@media screen and (max-width: 48rem){
  .col{
    width: calc(50% - 2rem);
  }
}

@media screen and (max-width: 32rem){
  .col{
    width: 100%;
    margin: 0 0 2rem 0;
  }
}

img:hover {
  cursor: pointer;
}

ul {
  list-style: none;
}

.all-arrow-things{
  display: flex;
  padding-top: 40px;
  padding-left: 150px;
}

.all-arrow2-things{
  display: flex;
  padding-top: 40px;
}

.submitContainer {
  margin-left: 70px;
  height: 44px;
}

.submitContainer:hover {
  cursor: pointer;
}

.submitBtn {
  width: 78px;
  line-height: 34px;
  height: 36px;
  border: 2px solid #7C3637;
  border-radius: 15px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  color: #7C3637;
}

</style>
