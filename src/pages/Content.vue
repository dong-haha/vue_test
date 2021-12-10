<template>

<div>
 <!-- router-view之前的是每个页面都会显示的 -->
        <!-- 返回顶部 -->
        <el-backtop></el-backtop>
        <Carousel/>
            <div style="margin-top:20px"></div>


        <!-- 根据路由，展示每页的内容 -->
        <router-view></router-view>

</div>
</template>

<script>
// 导入各种组件
import Carousel from "../components/Carousel"

export default {
    name:'Content',
    data() {
        return {
            
        }
    },
    components:{
        Carousel,
    }
}
</script>

<style >

</style>