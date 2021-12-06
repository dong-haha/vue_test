<template>
    <el-card class="box-card" shadow="hover" >
    <div slot="header" class="clearfix">
        <span>{{card_name}}</span>
    </div>
    <div  class="text item">
        {{card_text}}
    </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            card_name: "卡片名称",
            card_text:"Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries",
            
        }
    },

}
</script>

<style>
.el-card__header{
    background-color:#d9ead3 ;
}
</style>