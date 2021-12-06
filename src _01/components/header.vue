<template>
    <div class="top">
        <div class="top-logo">
            <a style="padding: 10px 8px;" href="./index.html">
                <img src="@/assets//img/logo.png" style="height: 40px;">
            </a>
        </div>
        <div class="top-navi">
            <a class="top-naviBar" href="./index.html">首页</a>
            <a class="top-naviBar" href="./help.html" >帮助</a>
            <a class="top-naviBar" href="./about.html">关于</a>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'Header',
            data(){
			return {
			}

    }   }
</script>

<style>
    /* top layer */
    .top {
        
        /* flex takes no line break by default */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: white;
        border-top: 3px solid rgba(36, 52, 86, 0.75);
    }
    .top-logo {
        padding: 8px 16px;
        margin-left: 20px;
    }
    .top-navi {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .top-naviBar {
        padding: 16px 40px;
        color: rgba(0, 0, 0, 0.5);
        font-size: 16px;
    }
    .top-naviBar, .footer-link {
        transition: all 0.5s;
    }
    .top-naviBar:hover {
        color: black;
    }

</style>