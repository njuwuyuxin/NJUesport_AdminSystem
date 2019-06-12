import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import App from './App.vue'
import AdminPage from'./components/AdminPage'
import indexManage from'./components/indexManage'
import activitiesManage from'./components/activitiesManage'
import about from'./components/about'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(VueRouter);
const router=new VueRouter({
	routes:[
		{path:"/",component:AdminPage},
		{path:"/indexManage",component:indexManage},
		{path:"/activitiesManage",component:activitiesManage},
		{path:"/about",component:about},		
	],
	mode:"history"
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
