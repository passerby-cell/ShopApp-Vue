import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import VueRouter from 'vue-router'
import 'animate.css'
//注册三级联动组件为全局组件
import TypeNav from '@/components/TypeNav/index.vue'
import Banner from '@/components/Banner/index.vue'
import Pagination from '@/components/Pagination/index.vue'
//引入mock模块
import './mock/mockServer.js'
//引入swiper样式
import 'swiper/css/swiper.css'


import router from '@/router'


Vue.use(VueRouter)
//vc使用全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Banner.name, Banner)
Vue.component(Pagination.name, Pagination)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')