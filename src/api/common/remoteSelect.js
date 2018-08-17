/*
 * @Author: wdy
 * @Date:   2018-06-13 11:42:40
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-21 18:38:05
 */
// import { baseUrl } from '@/assets/js/config.js';
import { requestNoloading } from '@/util/request.js';
import { remoteSelectConfig } from '@/assets/js/config.js'
import getApiKey from '@/api/api.js';

function remoteSelect(params) {
  return requestNoloading({
    url: getApiKey('remoteSelect')
  }, Object.assign(params, remoteSelectConfig))
}

export {
  remoteSelect
}
