/*
 * @Author: wdy
 * @Date:   2018-06-25 10:52:59
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-25 10:57:16
 */
import { formatDate, formatTime, formatDateTime } from '@/filtre/time/timeFormat.js';

// 基础组件
const baseFiltre = { formatDate, formatTime, formatDateTime };
// 业务组件
const busFiltre = {};
// 组件合集
const filtres = Object.assign(baseFiltre, busFiltre);
export default (Vue) => {
  Object.keys(filtres).forEach(key => {
    Vue.filter(key, filtres[key])
  })
}
