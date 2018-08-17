/*
 * @Author: wdy
 * @Date:   2018-06-25 10:41:11
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-25 11:00:07
 */

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

const formatDate = newDate => {
  let _newDate = new Date(newDate);
  let year = _newDate.getFullYear();
  let month = _newDate.getMonth() + 1;
  let day = _newDate.getDate();
  return [year, month, day].map(formatNumber).join('/');
};

const formatTime = newDate => {
  let _newDate = new Date(newDate);
  let hour = _newDate.getHours();
  let minute = _newDate.getMinutes();
  let second = _newDate.getSeconds();
  return [hour, minute, second].map(formatNumber).join(':');
};

const formatDateTime = newDate => {
  let _newDate = new Date(newDate);
  let year = _newDate.getFullYear();
  let month = _newDate.getMonth() + 1;
  let day = _newDate.getDate();
  let hour = _newDate.getHours();
  let minute = _newDate.getMinutes();
  let second = _newDate.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

export {
  formatDate,
  formatTime,
  formatDateTime
}
