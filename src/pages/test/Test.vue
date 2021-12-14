<template>
<div>
  <div style="margin-top:20px"><el-divider></el-divider></div>


     <Card01> 
            <template v-slot:title> <h6 style="font-style: italic;">这里是其他一些组件</h6></template>
            <template v-slot:body>
                
                <Button/>
                        <div style="margin-top:40px"></div>
                
                <div style="width:500px"><el-slider v-model="value1"></el-slider></div>
                <p>选的值为{{value1}}</p>
                          <div style="margin-top:40px"></div>

               <el-date-picker
                      v-model="value3"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions">
               </el-date-picker>
               <p>日期为{{value3}}</p>
                             <div style="margin-top:40px"></div>
                
                <el-rate v-model="value2"></el-rate>
                  <p>评分为{{value2}}</p>
                        <div style="margin-top:50px"></div>
                
              
             </template>
    </Card01>  


</div>
</template>

<script>
import Button from "../../components/Button"
import Card01  from "../../components/Card01"


export default {
  components:{
        Button,
        Card01,
    },
    data() {
      return {
        value1:'',
        value2:'',
        value3:'',
        
      }
    },

}
</script>

<style>

</style>