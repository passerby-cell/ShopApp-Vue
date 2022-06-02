import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default [{
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      // 通过路由元信息判断Footer是否显示
      showFooter: true,
    }
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      showFooter: false
    }
  },
  {
    path: '/Register',
    component: Register,
    meta: {
      showFooter: false
    }
  },
  {
    name: 'search',
    // ?:用于指定params参数可传可不传,没有问号时,不传params参数时路径会出现丢失的情况
    path: '/search/:keyword?',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    name: 'detail',
    path: '/detail/:skuId',
    component: Detail,
    meta: {
      showFooter: true
    }
  },
  {
    name: 'addtocart',
    path: '/addtocart',
    component: AddCartSuccess,
    meta: {
      showFooter: true,
    }
  },
  {
    name: 'shopcart',
    path: '/shopcart',
    component: ShopCart,
    meta: {
      showFooter: true,
    }
  },
  //重定向到home
  {
    path: '*',
    redirect: '/home'
  },
]