/*
 * @Author: wdy
 * @Date:   2018-06-13 09:31:31
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-20 16:52:32
 */
import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/view/login/login.vue';
import Home from '@/view/home/home.vue';
import Dashboard from '@/view/dashboard/dashboard.vue';
import Page401 from '@/view/page401/page401.vue';
import Page404 from '@/view/page404/page404.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '',
    component: Home,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: Dashboard
    }, {
      path: 'page404',
      component: Page404
    }, {
      path: 'page401',
      component: Page401
    }]
  }]
});
