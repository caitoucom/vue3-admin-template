<template>
  <div class="sys-container">
    <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      :props="defaultProps"
    >
    </el-tree>
  </div>
</template>
<script>
import { ref, reactive, toRefs, getCurrentInstance } from "vue";
export default {
  name: "system",
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      treeData: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
    });

    // 获取当前页面数据
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

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.sys-container {
  height: 100%;
  background: #fff;
  padding: 50px;
}
</style>