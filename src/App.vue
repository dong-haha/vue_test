<template>
  <div>
    <Header/>
    <div class="container">
      <Content/>
    </div>
  </div>
</template>

<script>
import Header from "./pages/Header";
import Content from "./pages/Content";

export default {
  name: "App",
  components: {
    Header: Header,
    Content: Content,
  },
};
</script>

<style >
</style>
