/*
 * @Author: wdy
 * @Date:   2018-06-19 10:41:10
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-26 15:06:28
 */

import store from './store/index.js';
import router from './router/index.js';
import asynRouterMap from './router/asynRouterMap.js';

import { getSessionId } from './util/auth.js'

// 定义白名单，可以直接进入
const whiteList = ['/login'];

// 导航守卫
router.beforeEach((to, from, next) => {
  if (getSessionId()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.asynRouter.length === 0 || !store.getters.asynRouter) {
        let asynRouter = store.getters.userPower['asynRouter'];
        store.dispatch('setAsynRouter', asynRouter).then(() => {
          /**
           * [finallyasynRouter 此处应该根据用户权限的asyncRouter和本地的asyncRouterMap，生成finallyasynRouter，这里无脑了]
           */
          let finallyasynRouter = asynRouterMap || asynRouter;
          router.addRoutes(finallyasynRouter) // 动态添加可访问路由表
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})
