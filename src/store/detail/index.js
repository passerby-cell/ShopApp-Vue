import {
  reqDetailList
} from '@/api/index'
import {
  getUUID
} from '@/utils/uuid'
//准备actions,用于响应组件中的动作
const actions = {
  async detailList({
    commit
  }, data) {
    let result = await reqDetailList(data)
    if (result.code === 200) {
      commit('DETAILLIST', result.data)
    }
  }
}
//准备mutations,用于操作数据--state
const mutations = {
  DETAILLIST(state, data) {
    state.detailList = data
    state.UUID = getUUID()
  }
}
//准备state,用于存储数据
const state = {
  detailList: {},
  UUID: ''
}
//创建并暴露store
export default {
  namespaced: true,
  actions,
  mutations,
  state
}