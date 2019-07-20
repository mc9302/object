import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Course from '../pages/course'
import Total from '../pages/total'
import Nenglixueyuan from '../pages/nenglixueyuan'
import Shangxueyuan from '../pages/shangxueyuan'
import Kexuexueyuan from '../pages/kexuexueyuan'
import Shiyexueyuan from '../pages/shiyexueyuan'
import Renwensheke from '../pages/renwensheke'
import Zhengzaigengxin from '../pages/zhengzaigengxin'
import Default from '../pages/default'
import Morestudy from  '../pages/morestudy'
import Latestnew from '../pages/latestnew'
import Details from '../pages/details'
import Bottombar from '../pages/bottombar'
import Givefriend from '../pages/givefriend'
import Freelisten from '../pages/freelisten'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      children:[
        {path:"total",name:"Total",component:Total},
        {path:"nenglixueyuan",name:"Nenglixueyuan",component:Nenglixueyuan},
        {path:"shangxueyuan",name:"Shangxueyuan",component:Shangxueyuan},
        {path:"kexuexueyuan",name:"Kexuexueyuan",component:Kexuexueyuan},
        {path:"shiyexueyuan",name:"Shiyexueyuan",component:Shiyexueyuan},
        {path:"renwensheke",name:"Renwensheke",component:Renwensheke},
        {path:"zhengzaigengxin",name:"Zhengzaigengxin",component:Zhengzaigengxin},
        {path:"morestudy",name:"Morestudy",component:Morestudy},
        {path:"latestnew",name:"Latestnew",component:Latestnew},
      ]
    },
    {
      path: '/default',
      name: 'Default',
      component: Default
    },
    {
      path: '/details',
      name: 'Details',
      component: Details  
    },
    {
      path: '/bottombar',
      name: 'Bottombar',
      component: Bottombar
    },
    {
      path: '/givefriend',
      name: 'Givefriend',
      component: Givefriend
    },
    {
      path: '/freelisten',
      name: 'Freelisten',
      component: Freelisten
    },
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})
