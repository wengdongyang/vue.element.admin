/*
 * @Author: wdy
 * @Date:   2018-06-13 17:27:15
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-19 17:37:42
 */

import * as types from '@/store/mutation-types';

const state = {
  menu: [], // 左侧菜单
  sessionId: '', // 用户id
  userPower: {} // 用户权限树，包括menu,asynRouter,粒度级按钮控制
}

const getters = {
  menu: state => state.menu, // 左侧菜单
  sessionId: state => state.sessionId, // 用户id
  userPower: state => state.userPower // 用户权限树，包括menu,asynRouter,粒度级按钮控制
};

const mutations = {
  // 左侧菜单
  [types.SET_MENU](state, menu) {
    state.menu = menu;
  },
  // 用户id
  [types.SET_SESSION_ID](state, sessionId) {
    state.sessionId = sessionId;
  },
  // 用户权限树，包括menu,asynRouter,粒度级按钮控制
  [types.SET_USER_POWER](state, userPower) {
    state.userPower = userPower;
  }
}

const actions = {
  // 左侧菜单
  setMenu({ commit, state }, menu) {
    commit(types.SET_MENU, menu);
  },
  // 用户id
  setSessionId({ commit, state }, sessionId) {
    commit(types.SET_SESSION_ID, sessionId);
  },
  // 用户权限树，包括menu,asynRouter,粒度级按钮控制
  setUserPower({ commit, state }, userPower) {
    commit(types.SET_USER_POWER, userPower);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
