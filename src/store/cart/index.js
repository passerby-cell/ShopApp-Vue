//购物车列表数据仓库
import {
  reqCartList
} from "@/api"
//准备actions,用于响应组件中的动作
const actions = {
  async getCartList({
    commit
  }) {
    let result = await reqCartList()
    if (result.code == 200) {
      commit('CARTLIST', result.data)
    }
  }
}
//准备mutations,用于操作数据--state
const mutations = {
  CARTLIST(state, data) {
    state.cartList = data
  }
}
//准备state,用于存储数据
const state = {
  cartList: [],
}
//创建并暴露store
export default {
  namespaced: true,
  actions,
  mutations,
  state
}