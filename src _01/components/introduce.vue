<template>
  <div class="intro">
    <div class="intro-title">
      <div class="intro-text">
        <p>网站部分功能仍在完善中</p>
        <p>每个模块里请勿多次提交，服务器资源有限！！</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'Introduce',
    data() {
        return {};
    },
    };
</script>

<style>
    .intro {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* inherit form body */
    flex: 1;
    padding: 39.72px 64.27px;
    background-color: rgba(0, 0, 0, 0.25);
    }
    .intro-title {
    color: white;
    font-size: 40px;
    }
    .intro-text {
    margin: 20px 0px;
    color: inherit;
    font-size: 18px;
    }
</style>