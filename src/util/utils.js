/*
 * @Author: wdy
 * @Date:   2018-06-21 13:33:23
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-25 14:42:15
 */
import {deepClone} from 'outils';

/**
 * [mixinsConfig description]
 * @param  {Object} defaultConfig [description]
 * @param  {Object} propsConfig   [description]
 * @return {[type]}               [description]
 */
export function mixinsObject(defaultObject = {}, propsObject = {}) {
  let _propsObject = deepClone(propsObject);
  for (let key in _propsObject) {
    defaultObject[key] = _propsObject[key]
  }
}

export function mixinsArray(defaultArray = [], propsArray = []) {
  defaultArray = deepClone(propsArray)
}
