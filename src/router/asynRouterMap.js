/*
 * @Author: wdy
 * @Date:   2018-06-19 15:52:15
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-26 10:51:28
 */
import Home from '@/view/home/home.vue';

const asynRouterMap = [{
  path: '/paperList',
  component: Home,
  children: [{
    path: 'normalPaperList',
    component: () =>
      import ('@/view/paper/normalPaperList.vue')
  }, {
    path: 'randomPaperList',
    component: () =>
      import ('@/view/paper/randomPaperList.vue')
  }]
}, {
  path: '/activityList',
  component: Home,
  redirect: '/activityList/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '/questionBank',
  component: Home,
  redirect: '/questionBank/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '/advertisingPicture',
  component: Home,
  redirect: '/advertisingPicture/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '/dataStandardization',
  component: Home,
  children: [{
    path: 'type',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'attribute',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'attributeValue',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'color',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'colorGroup',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'sizeArea',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'size',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'sizeGroup',
    component: () =>
      import ('@/view/other/other.vue')
  }, {
    path: 'audit',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '/systemParameter',
  component: Home,
  redirect: '/systemParameter/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '/parameterTags',
  component: Home,
  redirect: '/parameterTags/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '/parameterGroup',
  component: Home,
  redirect: '/parameterGroup/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '/votingActivity',
  component: Home,
  redirect: '/votingActivity/index',
  children: [{
    path: 'index',
    component: () =>
      import ('@/view/other/other.vue')
  }]
}, {
  path: '*',
  redirect: '/page404'
}];

export default asynRouterMap
