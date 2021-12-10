<template>
<div>
<div class="menu">
  <el-menu
  default-active="/home" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
  background-color="#3b903b"
  text-color="white"
  router
    >
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/eFP">eFP</el-menu-item>
        <el-menu-item index="/download">Download</el-menu-item>
        <el-menu-item index="/jbrower">JBrower</el-menu-item>
        <el-menu-item index="/expression">Expression</el-menu-item>
 
       <!-- 嵌套路由 -->
        <el-submenu index="/tools" >
            <template slot="title"> tools </template>
            <el-menu-item index="/tools/test1"> test1</el-menu-item>
            <el-menu-item index="/tools/test2"> test2</el-menu-item>
            <el-menu-item index="/tools/test3"> test3</el-menu-item>
        </el-submenu>

         <el-submenu index="/help" >
            <template slot="title"> help </template>
            <el-menu-item index="/help/test4"> test4</el-menu-item>
            <el-menu-item index="/help/test5"> tes52</el-menu-item>
        </el-submenu>


     </el-menu>
</div>

</div>

</template>

<script>
export default {
    name:'Menu',

}
</script>

<style>
.el-menu-item{
   font-size: 16px !important;
   padding: 0 4% !important;
}
.el-submenu__title{
    font-size: 16px !important;
}

</style>