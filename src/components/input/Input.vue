<template>
  <div class="form-wrapper">
    <top-bar title="预约单"></top-bar>

    <div class="from-input">
        <Winput title="姓名" type="text" placeholder="请输入姓名" v-model="clientName"></Winput>
        <Winput title="身份证号" type="text" placeholder="请输入身份证号码" v-model="idNumber"></Winput>
        <Winput title="性别" type="text" placeholder="性别"></Winput>
        <Winput title="预约套餐" type="text" placeholder="2018白领超值全面健康筛查套餐"></Winput>
        <Winput title="预约加项包" type="text" placeholder="肿瘤重大阳性筛查"></Winput>
        <Winput title="预约时间" type="text" placeholder="YYYY - MM - DD"></Winput>
        <Winput title="预约门店" type="text" placeholder="深圳第一分院"></Winput>
        <Wbutton btnVal="确认提交"></Wbutton>
    </div>
    
  </div>
</template>

<script>


import TopBar from '../topbar/TopBar'
import Winput from '../winput/Winput'
import Wbutton from '../wbutton/Wbutton'

export default {
  components:{
      TopBar,
      Winput,
      Wbutton
  },
  props:{},
  data(){
    return {
       clientName: '',
       idNumber: ''
    }
  },
  watch:{},
  computed:{},
  methods:{
      
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
    .from-input {
        padding-bottom: .3rem;

    }
</style>