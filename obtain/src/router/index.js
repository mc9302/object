import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Special from "../pages/special"
import Specialxq from "../pages/specialxq"
import Nav from "../pages/nav"
import Searchs from "../pages/searchs"
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
      path:'/*',
      redirect:'/home'
    }
  ]
})
