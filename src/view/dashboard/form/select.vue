<template>
  <div class="dashboard-select" id="dashboardSelect">
    <ec-normal-select :props-config="selectConfig" :props-options="selectOptions" :props-data.sync="selectValue" :props-caption-data.sync="selectLabel"></ec-normal-select>
    <ec-multiple-select :props-config="multipleSelectConfig" :props-options="multipleSelectOptions" :props-data.sync="multipleSelectValue" :props-caption-data.sync="multipleSelectLabel"></ec-multiple-select>
    <ec-remote-select :props-config="ecRemoteSelectConfig" :props-data.sync="remoteSelectValue" :props-caption-data.sync="remoteSelectLabel"></ec-remote-select>
  </div>
</template>
<script>
export default {
  name: 'dashboardSelect',
  mixins: [],
  // 从父组件接受的属性
  props: {},
  // 组件
  components: {},
  data() {
    return {
      // 普通下拉
      selectConfig: {
        label: '普通测试', // 搜索的label
        multiple: true, // 是否开启多选
        filterable: false, // 是否开启搜索功能
        placeholder: '请选择', // placeholder
        disabled: false, // select是否禁用
        clearable: true // select是否可以被清空
      },
      selectOptions: [],
      selectValue: '2',
      selectLabel: '普通测试2',
      // 多选下拉
      multipleSelectConfig: {
        label: '多选测试', // 搜索的label
        placeholder: '请选择', // placeholder
        disabled: false // select是否禁用
      },
      multipleSelectOptions: [],
      multipleSelectValue: '2',
      multipleSelectLabel: '多选测试2',
      // 远程搜索
      ecRemoteSelectConfig: {
        label: '远程测试', // 搜索的label
        apiConfig: 'ecRemoteSelectApiConfig', // 远程url的key
        disabled: false, // select是否禁用
        placeholder: '请输入' // placeholder
      },
      remoteSelectValue: '',
      remoteSelectLabel: ''
    }
  },
  // 计算属性
  computed: {},
  // 事件挂载
  methods: {},
  watch: {},
  // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
  beforeCreate() {},
  // 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
  created() {
    this.selectOptions = [0, 1, 2, 3].map(item => {
      return {
        label: `普通测试${item + 1}`,
        value: `${item + 1}`,
        disabled: Boolean((item + 1) % 2)
      }
    });
    this.multipleSelectOptions = [0, 1, 2, 3].map(item => {
      return {
        label: `多选测试${item + 1}`,
        value: `${item + 1}`,
        disabled: Boolean((item + 1) % 2)
      }
    })
  },
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount() {},
  // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
  // 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：
  mounted() {
    this.$nextTick(function() {})
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
.dashboard-select {}

</style>
