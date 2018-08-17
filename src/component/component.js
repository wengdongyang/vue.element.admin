/*
 * @Author: wdy
 * @Date:   2018-06-22 14:39:14
 * @Last Modified by:   wdy
 * @Last Modified time: 2018-06-25 11:17:54
 */
import ecNormalInput from '@/component/base/input/normalInput.vue';
import ecNormalSelect from '@/component/base/select/normalSelect.vue';
import ecMultipleSelect from '@/component/base/select/multipleSelect.vue';
import ecRemoteSelect from '@/component/base/select/remoteSelect.vue';

import ecNormalCascader from '@/component/base/cascader/normalCascader.vue';

import ecTablePagination from '@/component/base/tablePagination/tablePagination.vue';
// 基础组件
const baseComponents = [
  ecNormalInput,
  ecNormalSelect,
  ecMultipleSelect,
  ecRemoteSelect,
  ecNormalCascader,
  ecTablePagination
];
// 业务组件
const busComponents = [];
// 组件合集
const components = baseComponents.concat(busComponents);
export default (Vue) => {
  components.map(el => {
    return Vue.component(el.name, el);
  })
}
