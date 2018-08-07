/*
 * @Author: wdy
 * @Date:   2018-06-13 10:58:29
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-26 10:56:23
 */
import { baseUrl } from '../assets/js/config.js';
const privateApiKeyList = [{
  key: 'login', // 登陆
  value: 'login'
}, {
  key: 'userPower', // 用户权限
  value: 'userPower'
}, {
  key: 'normalPaperList', // 题卷列表-普通题卷列表
  value: 'normalPaperList'
}, {
  key: 'randomPaperList', // 题卷列表-随机题卷列表
  value: 'randomPaperList'
}];

const commonApiKeyList = [{
  key: 'remoteSelect', // 远程加载数据用
  value: 'remoteSelect'
}]

const apiKeyList = privateApiKeyList.concat(commonApiKeyList); // 合并数组

const getApiKey = (keyName) => {
  let _apiKeyValue = '';
  apiKeyList.forEach((element, index) => {
    if (element['key'] === keyName) {
      _apiKeyValue = `${baseUrl}/${element['value']}.do`
    }
  });
  if (!_apiKeyValue) {
    console.error(`${keyName}不存在`)
  }
  return _apiKeyValue
}
export default getApiKey
