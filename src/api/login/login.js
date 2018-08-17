/*
 * @Author: wdy
 * @Date:   2018-06-13 11:42:40
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-21 17:12:24
 */
// import { baseUrl } from '@/assets/js/config.js';
import { request } from '@/util/request.js';
import getApiKey from '@/api/api.js';

function login(params) {
  return request({
    url: getApiKey('login')
  }, params)
}

function userPower(params) {
  return request({
    url: getApiKey('userPower')
  }, params)
}

export {
  login,
  userPower
}
