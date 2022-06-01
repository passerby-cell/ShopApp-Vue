//Home组件的仓库
import {
  reqCategoryList,
  reqBannerList,
  reqFloorList
} from '@/api'
//准备actions,用于响应组件中的动作
const actions = {
  //通过api里面的接口函数发送请求,获取服务器的数据
  async categoryList({
    commit
  }) {
    let result = await reqCategoryList()
    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },

  //通过mock里面的接口函数发送请求,获取服务器的数据
  async bannerList({
    commit
  }) {
    let result = await reqBannerList()
    if (result.code === 200) {
      commit('BANNERLIST', result.data)
    }
  },
  //通过mock里面的接口函数发送请求,获取服务器的数据
  async floorList({
    commit
  }) {
    let result = await reqFloorList()
    if (result.code === 200) {
      commit('FLOORLIST', result.data)
    }
  }
}
//准备mutations,用于操作数据--state
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },

  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST(state, floorList) {
    state.floorList = floorList
  },
}
//准备state,用于存储数据
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
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