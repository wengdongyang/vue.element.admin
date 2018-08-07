/*
 * @Author: wdy
 * @Date:   2018-06-13 17:27:15
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-20 18:06:07
 */

import * as types from '@/store/mutation-types';
import { Message } from 'element-ui';
import router from '@/router/index.js';
/**
 * [isAlivedNav 判断一个nav是否存在]
 * @param  {[type]}  subnav     [description]
 * @param  {[type]}  subNavList [description]
 * @return {Boolean}            [description]
 */
function isAlivedNav(subnav, subNavList) {
  let _isAlivedNav = false;
  subNavList.forEach(element => {
    if (element['pathUrl'] === subnav['pathUrl']) {
      _isAlivedNav = true
    }
  });
  return _isAlivedNav
}

function getSubNavListIndex(subNavUrl, subNavList) {
  let _subNavListIndex = -1;
  subNavList.forEach((el, idx) => {
    if (el['pathUrl'] === subNavUrl) {
      _subNavListIndex = idx
    }
  });
  return _subNavListIndex
}

const state = {
  subNavList: [{
    pathName: '主页',
    pathUrl: '/dashboard'
  }], // 子菜单列表
  historyNavList: ['/dashboard'] // 历史菜单
}

const getters = {
  subNavList: state => state.subNavList, // 子菜单列表
  historyNavList: state => state.historyNavList // 历史菜单
};

const mutations = {
  // 新增某个菜单
  [types.ADD_NAV](state, subNav) {
    let _subNavUrl = subNav.pathUrl; // 插入的url地址
    let _subNavList = state.subNavList; // 子菜单列表
    let _historyNavList = state.historyNavList; // 历史菜单列表
    // if 存在，将当前插入的url设置成目标url，并且在历史菜单中将其放在最后一个
    if (isAlivedNav(subNav, _subNavList)) {
      let _historyNavIndex = _historyNavList.indexOf(_subNavUrl);
      state.historyNavList.splice(_historyNavIndex, 1);
      state.historyNavList.push(_subNavUrl);
      router.push({
        path: _subNavUrl
      });
    } else {
      _subNavList.push(subNav);
      state.historyNavList.push(_subNavUrl);
      router.push({
        path: _subNavUrl
      })
    }
  },
  // 删除某个菜单
  [types.DEL_NAV](state, subNav) {
    let delSubNavUrl = subNav.pathUrl;
    let _subNavList = state.subNavList;
    let _historyNavList = state.historyNavList;
    let _subNavListIndex = getSubNavListIndex(delSubNavUrl, _subNavList);
    let _historyNavListIndex = _historyNavList.indexOf(delSubNavUrl);
    if (_historyNavList.length === 1 || _subNavList.length === 1) {
      Message({
        message: '最后一个tab标签无法删掉呦！',
        type: 'warning'
      })
    } else {
      if (_historyNavListIndex === _historyNavList.length - 1) {
        router.push({
          path: _historyNavList[_historyNavListIndex - 1]
        });
      }
      state.subNavList.splice(_subNavListIndex, 1);
      state.historyNavList.splice(_historyNavListIndex, 1);
    }
  },
  // 激活某个菜单
  [types.ACTIVE_NAV](state, subNav) {
    let _subNavUrl = subNav.pathUrl; // 激活的url地址
    let _historyNavList = state.historyNavList; // 历史菜单列表
    let _historyNavIndex = _historyNavList.indexOf(_subNavUrl);
    state.historyNavList.splice(_historyNavIndex, 1);
    state.historyNavList.push(_subNavUrl);
    router.push({
      path: _subNavUrl
    });
  }
}

const actions = {
  // 新增某个菜单
  addNav({ commit, state }, subNav) {
    commit(types.ADD_NAV, subNav);
  },
  // 删除某个菜单
  delNav({ commit, state }, subNav) {
    commit(types.DEL_NAV, subNav);
  },
  // 激活某个菜单
  activeNav({ commit, state }, subNav) {
    commit(types.ACTIVE_NAV, subNav);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
