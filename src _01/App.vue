<template>
  <div>
	  <Header/>
	  <Introduce/>
	  <Content/>
	  <Footer/>
  </div>
</template>

<script>
	//引入组件
	import Header  from './components/header'
	import Content from './components/content'
	import Footer from './components/footer'
	import Introduce from './components/introduce'

	export default {
		name:'App',
		components:{
			Header:Header,
			Content:Content,
			Footer:Footer,
			Introduce:Introduce
		}
	}
</script>
<style >
html, body {
    height: 100%;
}
body {
    background-image: url("./assets/img/tensorflow.jpg");
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: fixed;
    background-size: cover;
}
a {
    text-decoration: none;
}

</style>
