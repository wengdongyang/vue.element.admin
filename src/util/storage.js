/*
 * @Author: wdy
 * @Date:   2018-06-13 09:31:31
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-13 10:00:23
 */
const storage = window.sessionStorage;
export function getStorage(key = '') {
  try {
    return JSON.parse(storage.getItem(key))
  } catch (err) {
    return ''
  }
}
export function setStorage(key = '', val) {
  storage.setItem(key, JSON.stringify(val))
}
export function removeStorage(key = '') {
  storage.removeItem(key)
}
export function clearStorage() {
  return storage.clear()
}
