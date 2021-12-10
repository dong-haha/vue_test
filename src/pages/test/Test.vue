<template>
<div>
  <div style="margin-top:20px"><el-divider></el-divider></div>
    <h6 style="text-align:center">这里是其他一些组件</h6>

    <Button/>
         <div style="margin-top:20px"></div>
    <div style="width:500px"><el-slider v-model="value1"></el-slider></div>

                     <div style="margin-top:20px"></div>
 <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </el-date-picker>

                       <div style="margin-top:20px"></div>
    <el-rate v-model="value1"></el-rate>
                        <div style="margin-top:50px"></div>

</div>
</template>

<script>
import Button from "../../components/Button"


export default {
  components:{
        Button,
    }

}
</script>

<style>

</style>