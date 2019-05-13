import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)
import ceshi from '../components/ceshi'
// 登录页面
import Login from '../components/login/login'
import SIdentify from '../components/login/identify'

//导航
import mainNav from '../components/main/mainNav'

//基地管理
import baser from '../components/base/baser'
import baseDetail from '../components/base/baseDetail'
import baseAdministratorList from '../components/base/baseAdministratorList'
import addBase from '../components/base/addBase'
//用户详情
import userDetail from '../components/common/userDetail'

//管理员管理
import administrator from '../components/administrator/administrator'

//安全员管理
import safety from '../components/safety/safety'

//任务分配
import task from '../components/task/task'

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/identify',
      name: 'SIdentify',
      component: SIdentify
    },
    {
      path: '/mainNav',
      name: 'mainNav',
      component: mainNav,
      children: [
        // 基地管理
        {
          path: '/mainNav',
          redirect: '/baser'
        },
        {
          path: '/baser',
          name: 'baser',
          component: baser,
        },
        {
          path:'/baser/baseDetail',
          name:'baseDetail',
          component:baseDetail
        },
        {
          path:'/baser/addBase',
          name:'addBase',
          component:addBase
        },
        {
          path:'/baser/baseDetail/baseAdministratorList',
          name:'baseAdministratorList',
          component:baseAdministratorList
        },
        //用户详情
        {
          path:'/baser/baseDetail/baseAdministratorList/userDetail',
          name:'userDetail',
          component:userDetail
        },
        //管理员管理
        {
          path: '/administrator',
          name: 'administrator',
          component: administrator,
        },
        //用户详情
        {
          path:'/administrator/userDetail',
          name:'userDetail',
          component:userDetail,
        },
        {
          path: '/safety',
          name: 'safety',
          component: safety,
        },
        {
          path: '/task',
          name: 'task',
          component: task,
        },
        {
          path: '/ceshi',
          name: 'ceshi',
          component: ceshi,
        }
      ]
    }
  ]
})
