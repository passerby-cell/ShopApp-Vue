// 先引入mockjs
import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'
import typeNav from './TypeNav.json'

//mock函数:
//  第一个参数:请求地址
//  第二个参数:请求数据
Mock.mock('/mock/banner', {
  code: 200,
  data: banner
})
Mock.mock('/mock/floor', {
  code: 200,
  data: floor
})
Mock.mock('/mock/product/getBaseCategoryList', {
  code: 200,
  data: typeNav
})