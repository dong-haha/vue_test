// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import Home from '../pages/test/Home'
import eFP from '../pages/test/eFP'
import Expression from '../pages/test/Expression'
import Tools from '../pages/test/Tools'
import Help from '../pages/test/Help'
import Test from '../pages/test/Test'
import error404  from '../pages/test/404'

//创建并暴露一个路由器
export default new VueRouter({
	// mode:"history",
	// base: '/dist/',
	routes:[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/eFP',
			component:eFP
		},
		{
			path:'/expression',
			component:Expression
		},
		{
			path:'/tools/test1',
			component:Test,
			
		},
		{
			path:'/tools/test2',
			component:Test,
			
		},
		{
			path:'/tools/test3',
			component:Test,
			
		},
		{
			path:'/help/test4',
			component:Test,
			
		},
		{
			path:'/help/test5',
			component:Test,
			
		},
		{
			path:'/jbrower',
			component:error404,
			
		},
		{
			path:'/download',
			component:error404,
			
		},

		//配置重定向
		{path:'',redirect:"home"},
	]
})
