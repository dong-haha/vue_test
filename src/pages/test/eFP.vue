<template>
    <div>
     <Card01> 
            <template v-slot:title><span style="font-style: italic;">Search genes and libraries</span></template>
            <template v-slot:body> <Form ></Form></template>
    </Card01>          
             <div style="margin-top:20px"></div>


    <h6 style="font-style: italic;"> Brassica napus eFP Browser</h6>
    <el-divider></el-divider> 
    <Echarts_map ></Echarts_map>
            <div style="margin-top:100px"></div>


     <Card01> 
            <template v-slot:title><h6 style="font-style: italic;"> 庖丁解牛(测试)</h6></template>
            <template v-slot:body>  <Echarts_map02/></template>
    </Card01>          
             <div style="margin-top:20px"></div>


    </div>
</template>

<script>
import Echarts_map from "../../components/Echarts_map"
import Echarts_map02 from "../../components/Echarts_map02"
import Form from "../../components/Form"
import Card01  from "../../components/Card01"

export default {
    components:{
        Echarts_map,
        Echarts_map02,
        Form,
        Card01,
    }

}
</script>

<style>

</style>