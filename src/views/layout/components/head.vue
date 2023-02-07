<template>
  <div class="head-container">
    <div class="left-box">
      <i :class="['fontsi', fontIcon]" @click="setIsCollapseFn"></i>
    </div>
    <div class="right-box">
      <el-dropdown size="medium">
        <el-button type="primary">
          小张<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item @click="dropOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { ref, reactive, getCurrentInstance } from "vue";
import { removeAll } from "@/utils/auth";
//引入useStore
import { useStore } from "vuex";

export default {
  name: "head",
  setup(props) {
    const { ctx } = getCurrentInstance();
    const store = useStore();
    const fontIcon = ref("el-icon-s-fold");

    // 退出
    const dropOut = () => {
      removeAll();
      ctx.$router.push({ path: "/" });
    };

    // 左侧列表收起展开
    const setIsCollapseFn = () => {
      store.commit("updateIsCollapse", !store.state.configSys.isCollapse);
      if (store.state.configSys.isCollapse) {
        fontIcon.value = "el-icon-s-unfold";
      } else {
        fontIcon.value = "el-icon-s-fold";
      }
    };
    return { dropOut, setIsCollapseFn, fontIcon };
  },
};
</script>
<style scoped lang="scss">
.head-container {
  height: 100%;
  border-bottom: 1px solid #ccc;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .left-box {
    width: 50%;
    .fontsi {
      font-size: 52px;
      cursor: pointer;
    }
  }
  .right-box {
    width: 50%;
    text-align: right;
  }
}
</style>