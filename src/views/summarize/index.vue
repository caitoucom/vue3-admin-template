<template>
  <div class="sum-container">
    <h1>vue 3.x 管理端后台 模板</h1>
  </div>
</template>
<script>
import { ref, reactive, toRefs, getCurrentInstance } from "vue";
export default {
  name: "summarize",
  setup() {
    // 当前组件实例
    const { proxy } = getCurrentInstance();
    const state = reactive({});
    const getPageInfo = () => {
      const loading = proxy.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 500);
    };
    getPageInfo();
    return { ...toRefs(state) };
  },
};
</script>
<style lang="scss" scoped>
.sum-container {
  background: #fff;
  height: 100%;
  h1 {
    font-size: 48px;
    text-align: center;
    padding-top: 100px;
  }
}
</style>