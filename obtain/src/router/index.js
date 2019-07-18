import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Shop from '../pages/shop'
import ShopSearch from '../pages/shopSearch'
import CommodityDetails  from '../pages/commodityDetails'
import ShopCart  from '../pages/shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/shopSearch',
      name: 'ShopSearch',
      component: ShopSearch
    },
    {
      path: '/commodityDetails',
      name: 'CommodityDetails',
      component: CommodityDetails
    },
    {
      path: '/shopcart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})
