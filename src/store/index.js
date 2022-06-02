import Vue from 'vue'
import Vuex from 'vuex'

import search from './search'
import home from './home'
import detail from './detail'
import cart from './cart'
import login from './login'
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
  modules: {
    search,
    home,
    detail,
    cart,
    login,
  }
})