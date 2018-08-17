/*
 * @Author: wdy
 * @Date:   2018-06-13 09:31:31
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-21 18:51:44
 */
import axios from 'axios';
import {Loading} from 'element-ui';

import {requestConfig} from '@/assets/js/config.js';

axios.interceptors.request.use((config) => {
  console.warn('url:', config['url']);
  return config
}, (error) => {
  return Promise.reject(error)
});
// 请求完成后的拦截器
axios.interceptors.response.use((response) => {
  console.warn('data', response['data']);
  return response['data']
}, (error) => {
  return Promise.resolve(error.response)
});

function errorState(response) {
  // ...隐藏loading
  // console.log(response)
}

function successState(res) {

  // ...隐藏loading
  // console.log(res)
}

const request = (opts, params) => {
  // http默认配置
  let httpDefaultOpts = {
    method: requestConfig.method,
    url: opts.url
  };
  console.warn('params', params);
  let loadingInstance;
  loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then((res) => {
      setTimeout(() => {
        loadingInstance.close();
      }, 2000);
      if (res['code'] === 0) {
        successState(res);
        resolve(res['data']);
      } else {
        console.warn('数据错误', res)
      }
    }).catch((response) => {
      setTimeout(() => {
        loadingInstance.close();
      }, 2000);
      errorState(response);
      reject(response)
    })
  });
  return promise
};
const requestNoloading = (opts, params) => {
  // http默认配置
  let httpDefaultOpts = {
    method: requestConfig.method,
    url: opts.url
  };
  console.warn('params', params);
  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then((res) => {
      if (res['code'] === 0) {
        successState(res);
        resolve(res['data']);
      } else {
        console.warn('数据错误', res)
      }
    }).catch((response) => {
      errorState(response);
      reject(response)
    })
  });
  return promise
};
export {request, requestNoloading}
