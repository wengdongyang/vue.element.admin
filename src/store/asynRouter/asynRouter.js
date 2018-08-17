/*
 * @Author: wdy
 * @Date:   2018-06-13 17:27:15
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-19 17:34:57
 */

import * as types from '@/store/mutation-types';

const state = {
  asynRouter: [] // 异步路由
};

const getters = {
  asynRouter: state => state.asynRouter // 异步路由
};

const mutations = {
  // 异步路由
  [types.SET_ASYN_ROUTER](state, asynRouter) {
    state.asynRouter = asynRouter;
  }
};

const actions = {
  // 异步路由
  setAsynRouter({commit, state}, asynRouter) {
    return new Promise((resolve) => {
      commit(types.SET_ASYN_ROUTER, asynRouter);
      resolve()
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
