<template>
  <div>
      <el-divider></el-divider>

      <el-card class="box-card" shadow="hover" style="margin-top:5px;text-indent: 2em">
    <div slot="header" class="clearfix">
        <span>Linechart of submitted genes</span>
    </div>
    <div class="text item">
        <Echarts_line/>
    </div>
    </el-card>

            <div style="margin-top:20px"></div>


     <el-card class="box-card" shadow="hover" style="margin-top:5px;text-indent: 2em">
    <div slot="header" class="clearfix">
        <span> Expression Heatmap</span>
    </div>
    <div class="text item">
       <Echarts_heatmap/>
    </div>
    </el-card>
    

  </div>
</template>

<script>
import Echarts_line from "../../components/Echarts_line"
import Echarts_heatmap from "../../components/Echarts_heatmap"


export default {
    components:{
        Echarts_line,
        Echarts_heatmap,

    }

}
</script>

<style>

</style>