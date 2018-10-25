<template>
  <div class="form-wrapper">
    <top-bar title="预约单"></top-bar>

    <div class="from-input">
        <Winput title="姓名" type="text" placeholder="请输入姓名"></Winput>
        <Winput title="身份证号" type="text" placeholder="请输入身份证号码"></Winput>
        <Winput title="性别" type="text" placeholder="请输入身份证号码"></Winput>
        <Winput title="预约时间" type="text" placeholder="YYYY - MM - DD"></Winput>
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
        padding: .2rem;

    }
</style>