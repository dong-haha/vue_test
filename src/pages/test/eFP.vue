<template>
    <div>
        <h6 style="font-style: italic;"> Brassica napus eFP Browser</h6>
         <el-divider></el-divider>
        <Echarts_map/>
            <div style="margin-top:20px"></div>

       <h6> 庖丁解牛</h6>
          <el-divider></el-divider>
       <Echarts_map02/>
    </div>
</template>

<script>
import Echarts_map from "../../components/Echarts_map"
import Echarts_map02 from "../../components/Echarts_map02"
export default {
    components:{
        Echarts_map,
        Echarts_map02,

    }

}
</script>

<style>

</style>