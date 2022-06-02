//对api进行统一的管理
import apirequest from './apiAjax'
import mockrequest from './mockAjax'

// 首页三级联动接口
export const reqCategoryList = () => mockrequest({
  url: '/product/getBaseCategoryList',
  method: 'GET',
})

// 轮播图接口
export const reqBannerList = () => mockrequest({
  url: '/banner',
  method: 'GET',
})
export const reqFloorList = () => mockrequest({
  url: '/floor',
  method: 'GET',
})

//获取搜索模块数据
export const reqSearchList = (data) => apirequest({
  url: '/list',
  method: 'POST',
  data: data,
})

//获取详情页面数据
export const reqDetailList = (data) => apirequest({
  url: `item/${data.skuId}`,
  method: 'GET',
})

//加入购物车
export const reqAddToCart = (data) => apirequest({
  url: `/cart/addToCart/${data.skuId}/${data.skuNum}`,
  method: 'POST',
})

//查询购物车列表
export const reqCartList = () => apirequest({
  url: `cart/cartList`,
  method: 'GET',
})

//删除购物车 /cart/deleteCart/{skuId}
export const reqDeleteCart = (skuId) => apirequest({
  url: `/cart/deleteCart/${skuId}`,
  method: 'DELETE',
})

//用户注册验证码 /user/passport/code
export const reqCode = (phone) => apirequest({
  url: `/user/passport/sendCode/${phone}`,
  method: 'GET',
})

//用户注册 /user/passport/register
export const reqUserRegister = (data) => apirequest({
  url: `/user/passport/register`,
  data,
  method: 'POST',
})