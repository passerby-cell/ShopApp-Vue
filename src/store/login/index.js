import {
  reqUserLogin
} from '@/api'
//准备actions,用于响应组件中的动作
const actions = {
  async userLogin({
    commit
  }, user) {
    let result = await reqUserLogin(user)
    if (result.code === 200) {
      commit('LOGIN', result.data)
    }
  }
}
//准备mutations,用于操作数据--state
const mutations = {
  LOGIN(state, data) {
    state.LoginInfo = data
    localStorage.setItem('token', data.token)
  }
}
//准备state,用于存储数据
const state = {
  LoginInfo: {}
}
const getters = {}
//创建并暴露store
export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}