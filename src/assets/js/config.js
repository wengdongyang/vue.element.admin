/*
 * @Author: wdy
 * @Date:   2018-06-13 11:30:10
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-25 11:37:03
 */

// 配置基础请求ajax路径
const baseUrl = 'http://localhost:8080/api';

// 配置ajax
const requestConfig = {
  method: 'post'
}
// 远程select配置
const remoteSelectConfig = {
  pageSize: 20,
  pageNo: 1
};
// 表格常量参数定义
const tablePaginationConfig = {
  pageSize: 20
}
export {
  baseUrl,
  requestConfig,
  remoteSelectConfig,
  tablePaginationConfig
}
