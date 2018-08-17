/*
 * @Author: wdy
 * @Date:   2018-06-13 10:22:38
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-26 10:56:42
 */
import Mock from 'mockjs';
import getApiKey from '@/api/api.js';

import {login, userPower} from './login/login.js';
import {normalPaperList, randomPaperList} from './paper/paper.js'

import {remoteSelect} from './common/select.js'; // 加载远程数据

function creatJson(url, data) {
  let _data = {
    code: 0,
    data: data,
    msg: 'succeed'
  };
  Mock.mock(url, _data).setup({
    timeout: 1000
  });
}

// 公共mock
const baseMock = {remoteSelect};

// 业务mock
const customMock = {login, userPower, normalPaperList, randomPaperList};

// mock合集
const mocks = Object.assign(baseMock, customMock);

Object.keys(mocks).forEach(key => {
  creatJson(getApiKey(key), mocks[key]);
})
