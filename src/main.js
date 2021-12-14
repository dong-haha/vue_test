//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

import axios from 'axios'


import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

// 引入echarts
// import  echarts from 'echarts';




Vue.config.productionTip = false

//应用插件
Vue.use(VueRouter)
Vue.use(ElementUI)

// Vue.prototype.$echarts = echarts
 Vue.prototype.$http= axios

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
