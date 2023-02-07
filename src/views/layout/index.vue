<template>
  <div class="layout-container">
    <!-- 使用elementUi 布局容器快速布局-->
    <el-container class="hei100">
      <el-aside class="hei100" width="auto">
        <!-- 输出左侧列表组件 -->
        <navbar></navbar>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <!-- 输出head组件 -->
          <top></top>
        </el-header>
        <el-main class="bg">
          <!-- 使用router-view输出子路由页面 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import navbar from "./components/navbar";
import top from "./components/head";
export default {
  components: {
    navbar,
    top,
  },
};
</script>
<style lang="scss" scoped>
.layout-container {
  height: 100%;
}
.el-header {
  padding: 0;
}
.hei100 {
  min-height: 100%;
}
.bg {
  background: #f0f2f5;
}
</style>