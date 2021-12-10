<template>
  <div>
      <el-divider class="green_style"></el-divider>

      <el-row :gutter="10">
            <el-col :span="2" :offset="8"><img src="@/assets/img/card.jpg" class="image" /> </el-col> 
            <el-col :span="2"><img src="@/assets/img/card.jpg" class="image" /></el-col>
            <el-col :span="2"><img src="@/assets/img/card.jpg" class="image" /></el-col>
            <el-col :span="2"><img src="@/assets/img/card.jpg" class="image" /></el-col>
            </el-row>
        <p style=" text-align:center;font-size:8pt;margin-top:5px;margin-bottom:4px">Copyright © 2020-2030 All rights reserved  Contact us: yqy@mail.hzau.edu.cn</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.green_style {
    background-color: #67c23a !important;
    margin-left: 15% !important;
    margin-right: 15% !important;
    width: 70% !important;
    height: 3px !important;
}

</style>