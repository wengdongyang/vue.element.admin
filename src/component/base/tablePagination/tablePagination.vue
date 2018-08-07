<template>
  <div class="table-pagination">
    <slot name="form" />
    <div class="tool-bar">
      <el-button-group class="custom-toolbar">
        <slot name="toolbar" />
      </el-button-group>
      <el-button-group class="base-toolbar">
        <el-button icon="el-icon-refresh" size="mini" @click="getTableData"></el-button>
      </el-button-group>
    </div>
    <el-table :data="tableData.rows" size="mini" border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column v-for="(el, idx) in propsColumns" :key="idx" :prop="el.prop" :label="el.label" :minWidth="el.minWidth || el.width || 80">
        <template slot-scope="scope" :scope="newSlotScope ? 'scope' : false ">
          <span v-if="el.filter">
            {{ Vue.filter(el['filter'])(scope.row[el.prop]) }}
          </span>
          <span v-else-if="el.slotName">
            <slot :name="el.slotName" :row="scope.row" :$index="scope.$index" />
          </span>
          <span v-else>
            {{ el.render ? el.render(scope.row) : scope.row[el.prop] }}
          </span>
        </template>
      </el-table-column>
      <slot name="table-append" />
    </el-table>
    <el-pagination :current-page="form.pageNo" :page-size="form.pageSize" @size-change="handleSizeChange" @current-change="handleCurrentChange" layout="total, sizes, prev, pager, next, jumper" :total="tableData.total" background>
    </el-pagination>
  </div>
</template>
<script>
import { deepClone } from 'outils';
import { mixinsObject, mixinsArray } from '@/util/utils.js';
import { tablePaginationConfig } from '@/assets/js/config.js'; // table的定义文件

import { request } from '@/util/request.js';
import getApiKey from '@/api/api.js';

export default {
  name: 'ec-table-pagination',
  mixins: [],
  // 从父组件接受的属性
  props: {
    // 表格基础定义
    propsConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    // 列参数定义
    propsColumns: Array,
    // 传递的form参数
    propsForm: {
      type: Object,
      default () {
        return {}
      }
    },
    // url 定义
    propsApiKey: String
  },
  // 组件
  components: {},
  data() {
    return {
      form: {
        pageSize: tablePaginationConfig.pageSize,
        pageNo: 1
      }, // form相关参数
      apiKey: '', // url 定义
      config: {}, // 表格基础定义
      columns: [], // 列参数定义
      tableData: {
        total: 0,
        rows: []
      }
    }
  },
  // 计算属性
  computed: {},
  // 事件挂载
  methods: {
    /**
     * [initConfig 根据传入的数据，初始化]
     */
    initProps() {
      let _this = this;
      mixinsObject(_this.config, _this.propsConfig);
      mixinsObject(_this.form, _this.propsForm);
      mixinsArray(_this.columns, _this.propsColumns);
      _this.apiKey = _this.propsApiKey;
    },
    /**
     * [handleSizeChange 处理每页条数改变的函数]
     * @param  {[type]} val [description]
     */
    handleSizeChange(val) {
      let _this = this;
      _this.form.pageSize = val;
      _this.handleCurrentChange(1)
    },
    /**
     * [handleCurrentChange 处理页码改变的函数]
     * @param  {[type]} val [description]
     */
    handleCurrentChange(val) {
      let _this = this;
      _this.form.pageNo = val;
      _this.getTableData()
    },
    /**
     * [getTableData 核心方法，获取数据]
     * @return {[type]} [description]
     */
    getTableData() {
      let _this = this;
      let _form = deepClone(_this.form);
      request({
        url: getApiKey(_this.apiKey)
      }, _form).then((res) => {
        _this.tableData.total = res['total'];
        _this.tableData.rows = res['rows'];
      }, (err) => {
        console.log(err)
      });
    }
  },
  watch: {
    propsForm: {
      handler(val, oldVal) {
        let _this = this;
        let _form = _this.form;
        for (let key in val) {
          _form[key] = val[key]
        }
      },
      deep: true
    }
  },
  // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
  beforeCreate() {},
  // 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
  created() {},
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {},
  // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
  // 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
  mounted() {
    this.$nextTick(function() {
      this.initProps();
      this.getTableData();
    })
  },
  // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
  // 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
  beforeUpdate() {},
  // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
  // 注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：
  updated() {
    this.$nextTick(function() {})
  },
  // keep-alive 组件激活时调用。
  activated() {},
  // keep-alive 组件停用时调用。
  deactivated() {},
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy() {},
  // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
  destroyed() {},
  // 当捕获一个来自子孙组件的错误时被调用
  errorCaptured(err, vm, info) {
    console.error('errorCaptured', err, vm, info)
  }
}

</script>
<style lang="scss" scoped>
.table-pagination {
  .tool-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .custom-toolbar {
      flex: 1;
    }
    .base-toolbar {
      text-align: right;
    }
  }
  .el-pagination {
    margin-top: 10px;
    text-align: right;
  }
}

a.text-btn {
  display: inline-block;
  padding-right: 10px;
  margin-right: 10px;
}

</style>
