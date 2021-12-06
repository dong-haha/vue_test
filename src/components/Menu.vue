<template>
<div>
<div class="menu">
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="green"
    text-color="#fff"
    active-text-color="#ffd04b">
        <el-menu-item index="1">
                <router-link  to="/home">Home</router-link>
        </el-menu-item>
        <el-menu-item index="2">
                <router-link  to="/eFP">eFP</router-link>
        </el-menu-item>
        <el-menu-item index="3">
                <router-link  to="/download">Download</router-link>
        </el-menu-item>
        <el-menu-item index="4">
                <router-link  to="/expression">Expression</router-link>
        </el-menu-item>
        <el-menu-item index="5">
                <router-link  to="/jbrower">JBrower</router-link>
        </el-menu-item>


        <el-submenu index="6">
            <template slot="title">tools</template>
            <el-menu-item index="6-1">
                <router-link  to="/tools/test1">test1</router-link>
            </el-menu-item>
            <el-menu-item index="6-2">
                 <router-link  to="/tools/test2">test2</router-link>
            </el-menu-item>
            <el-menu-item index="6-3">
                 <router-link  to="/tools/test3">test3</router-link>
            </el-menu-item>
        </el-submenu>


        <el-submenu index="7">
            <template slot="title">Help</template>
            <el-menu-item index="7-1">
                 <router-link  to="/help/test4">test4</router-link>
            </el-menu-item>
            <el-menu-item index="7-2">
                 <router-link  to="/help/test5">test5</router-link>
            </el-menu-item>
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

<style  scoped>
.menu{
    margin-top: 30px;
}
/* .el-menu-item{
    font-size: 15px;
} */

.a{
    color: red;
}
</style>