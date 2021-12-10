<template>
  <div>
              <Header/>
          <div class="container">
              <Content/>
              <Footer/>
          </div>
  </div>
</template>

<script>
import Header from "./pages/Header";
import Content from "./pages/Content";
import Footer from "./pages/Footer";

export default {
  name: "App",
  components: {
    Header: Header,
    Content: Content,
    Footer,
  },
};
</script>

<style >
</style>
