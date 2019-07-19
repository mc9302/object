import Vue from 'vue'
import Router from 'vue-router'
import Special from '../pages/special'
import Specialxq from '../pages/specialxq'
import Knowledge from '../pages/knowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/special',
      name: 'Special',
      component: Special
    },
    {
      path: '/knowledge',
      name: 'Knowledge',
      component: Knowledge
    },
    {
      path: '/specialxq',
      name: 'Specialxq',
      component: Specialxq
    },
    {
      path:'/*',
      redirect:'/knowledge'
    }
  ]
})
