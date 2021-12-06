<template>

<div>

<el-backtop></el-backtop>
    <!-- 各种组件展示 -->
    <Carousel/>
            <div style="margin-top:20px"></div>
    <Card01/>
           <div style="margin-top:20px"></div>
    <Table/>
            <div style="margin-top:20px"></div>
    <Card02/> 
             <div style="margin-top:20px"></div>
    <Timeline/>




  <router-view></router-view>
</div>
</template>

<script>
// 导入各种组件
import Carousel from "../components/Carousel"
import Card01  from "../components/Card01"
import Table  from "../components/Table"
import Card02 from "../components/Card02"
import Timeline from "../components/Timeline"


export default {
    name:'Content',
    data() {
        return {
            
        }
    },
    components:{
        Carousel,
        Card01,
        Table,
        Card02,
        Timeline,

    }
}
</script>

<style >
 margin{margin:10px}

</style>