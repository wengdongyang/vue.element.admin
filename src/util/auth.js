/*
 * @Author: wdy
 * @Date:   2018-06-13 09:31:31
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-13 14:39:03
 */
import { getStorage, setStorage, removeStorage } from './storage';
const authKey = 'sessionId';
export function getSessionId() {
  return getStorage(authKey)
}
export function setSessionId(val) {
  setStorage(authKey, val)
}
export function removeSessionId(key = '') {
  removeStorage(authKey)
}
