<template>

<div class="container">
    <Logo></Logo>
  
    <Menu></Menu>
</div>
</template>

<script>

import Logo from "../components/Logo"
import Menu from "../components/Menu"
export default {
    name:'Header',
    components:{
        Logo:Logo,
        Menu:Menu,
        },
}
</script>

<style>

</style>