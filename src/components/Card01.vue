<template>
<!-- 使用组件时需要使用template v-slot:title和body -->
<div>
    <el-card  class="box-card" shadow="hover" style="margin-top:5px">
    <div slot="header" class="clearfix">
        <slot name="title">title</slot>
    </div>
    <div class="text item">
        <slot name="body">body</slot>
    </div>
    </el-card>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

}
</script>

<style>
.el-card__header{
    background-color:#d9ead3 ;
}
</style>