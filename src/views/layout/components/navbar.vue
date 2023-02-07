<template>
  <div class="navbar-container">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in assRouter" :key="item.path">
        <!-- 无二级的菜单 -->
        <el-menu-item
          v-if="item.children.length == 1"
          :index="item.path"
          @click="jumpPage(item.path)"
        >
          <i :class="item.icon"></i>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
        <!-- 有二级的菜单 -->
        <el-submenu v-else>
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="el in item.children"
              :key="el.path"
              :index="el.path"
              @click="jumpPage(el.path)"
            >
              {{ el.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { ref, reactive, computed, getCurrentInstance } from "vue";
//引入useStore
import { useStore } from "vuex";

export default {
  name: "navbar",
  setup(props) {
    const { ctx } = getCurrentInstance();

    const store = useStore();
    // 获取当前账号匹配的路由
    const assRouter = store.state.permission.assRouter;

    // 获取左侧列表显示状态
    const isCollapse = computed(() => {
      return store.state.configSys.isCollapse;
    });
    // 控制路由跳转
    const jumpPage = (url) => {
      ctx.$router.push({ path: url });
    };

    return {
      isCollapse,
      assRouter,
      jumpPage,
    };
  },
};
</script>
<style scoped>
.navbar-container {
  height: 100%;
}
.navbar-container .el-menu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 400px;
}
</style>