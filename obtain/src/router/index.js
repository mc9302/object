import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Special from "../pages/special"
import Specialxq from "../pages/specialxq"
import Nav from "../pages/nav"
import Searchs from "../pages/searchs"
import Shop from '../pages/shop'
import ShopSearch from '../pages/shopSearch'
import CommodityDetails  from '../pages/commodityDetails'
import ShopCart  from '../pages/shopcart'
import Order  from '../pages/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/special',
      name: 'Special',
      component: Special
    },
    {
      path: '/specialxq',
      name: 'Specialxq',
      component: Specialxq
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/searchs',
      name: 'Searchs',
      component: Searchs
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
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})
