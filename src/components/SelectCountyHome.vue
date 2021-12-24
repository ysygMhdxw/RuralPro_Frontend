<template>
  <el-select v-model="value" clearable placeholder="云南省" style="margin-top: 8px">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default {
  name: "SelectCountyHome",
  mounted() {
  },
  data(){
    return{
      countydata:[],
      options: ref([
        {
          value: 'Yunnan',
          label: '云南省',
        },
        {
          value: 'Beijing',
          label: '北京市',
        },
        {
          value: 'Tianjin',
          label: '天津省',
        },
        {
          value: 'Hebei',
          label: '河北省',
        },
        {
          value: 'Shanxi',
          label: '山西省',
        },
        {
          value: 'Inner Mongoria',
          label: '内蒙古',
        },
        {
          value: 'Liaoning',
          label: '辽宁省',
        },
        {
          value: 'Jilin',
          label: '吉林省',
        },
        {
          value: 'Heilongjiang',
          label: '黑龙江',
        },
        {
          value: 'Shanghai',
          label: '上海市',
        },
        {
          value: 'Jiangsu',
          label: '江苏省',
        },
        {
          value: 'Zhejiang',
          label: '浙江省',
        },
        {
          value: 'Anhui',
          label: '安徽省',
        },
        {
          value: 'Fujian',
          label: '福建省',
        },
        {
          value: 'Jiangxi',
          label: '江西省',
        },
        {
          value: 'Henan',
          label: '河南省',
        },
        {
          value: 'Sichuan',
          label: '四川省',
        },
        {
          value: 'Chongqing',
          label: '重庆省',
        },
        {
          value: 'Hainan',
          label: '海南省',
        },
        {
          value: 'Guangxi',
          label: '广西省',
        },
        {
          value: 'Hubei',
          label: '湖北省',
        },
        {
          value: 'Guizhou',
          label: '贵州省',
        },{
          value: 'Shanxi',
          label: '陕西省',
        },{
          value: 'Gansu',
          label: '甘肃省',
        },{
          value: 'Qinghai',
          label: '青海',
        },{
          value: 'Xinjiang',
          label: '新疆',
        },{
          value: 'Ningxia',
          label: '宁夏',
        },{
          value: 'Taiwan',
          label: '台湾',
        },{
          value: 'Hong Kong',
          label: '香港特别行政区',
        },
        {
          value: 'Macao',
          label: '澳门特别行政区',
        }
      ]),
      value:ref('')
    }},
  methods:{
    setCountyDescription(){

    }
  }
}
</script>

<style scoped>

/*//修改的是el-input的样式*/
/*//一种方法是设置最里层el-input__inner的背景色 外层的两级父元素设置为透明色*/
/*//另一种方法是从el-select到el-input__inenr的背景色都设置为需要的颜色*/
/deep/ .el-select,
/deep/ .el-input,
/deep/ .el-input__inner{
  background-color:#BD3131 ;
  color:#fff;
  border:0px;
  border-radius:0px;
  text-align: center;
}
/deep/.el-input__inner {

  border: 0px solid #a1a3ad;
  border-left-width: 0;
  border-radius: 10px;
  background-color: #BD3131;
  --el-input-placeholder-color: #FFFFFF;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  --el-input-text-color: #FFFFFF;
  color: #FFFFFF;
}
/*el-input聚焦的时候 外层的border会有一个样式*/
/deep/ .el-select .el-input.is-focus .el-input__inner{
  border:0px;
  border-radius: 20px;
}

/*修改的是el-input上下的小图标的颜色*/
/deep/ .el-select .el-input .el-select__caret{
  color:#fff;
}

/*修改总体选项的样式 最外层*/
/deep/ .el-select-dropdown{
  background-color: #08164d;
  margin: 0px;
  border:0px;
  border-radius: 0px;
}

/*修改单个的选项的样式*/
/deep/ .el-select-dropdown__item{
  background-color: transparent;
  color:#fff;
}

/*item选项的hover样式*/
/deep/ .el-select-dropdown__item.hover,
/deep/ .el-select-dropdown__item:hover{
  color:#f0a1a8;
}

/*修改的是下拉框选项内容上方的尖角*/
/deep/ .el-popper .popper__arrow, .el-popper .popper__arrow::after{
  display: none;
}
</style>
