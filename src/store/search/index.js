//Search组件的仓库
import {
  reqSearchList
} from "@/api"
//准备actions,用于响应组件中的动作
const actions = {
  // 获取search页面的信息
  async getSearchList({
    commit
  }, data = {}) {
    let result = await reqSearchList(data)
    if (result.code === 200) {
      commit('SEARCHLIST', result.data)
    }
  }
}
//准备mutations,用于操作数据--state
const mutations = {
  SEARCHLIST(state, data) {
    state.searchList = data
  }
}
//准备state,用于存储数据
const state = {
  searchList: [],
}
const getters = {}

//创建并暴露store
export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}