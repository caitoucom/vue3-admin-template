<template>
  <div class="list-container">
    <!-- 搜索 -->
    <el-row class="search-box">
      <el-form :model="searchForm" label-width="80px">
        <el-col :span="6">
          <el-form-item label="姓名">
            <el-input
              v-model="searchForm.name"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="地址">
            <el-input
              v-model="searchForm.address"
              placeholder="请输入地址"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" class="padl20">
          <el-button type="primary">搜索</el-button><el-button>重置</el-button>
        </el-col>
      </el-form>
    </el-row>
    <!-- 列表 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" align="center">
      </el-table-column>
    </el-table>
    <!-- total 数据总数量 page-size每页多少 -->
    <div class="pagination-box">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
        :page-size="10"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { ref, reactive, toRefs, getCurrentInstance } from "vue";
export default {
  name: "summarize",
  setup() {
    // 当前组件实例
    const { proxy } = getCurrentInstance();
    const state = reactive({
      searchForm: {
        name: "",
        address: "",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
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

    // 页码改变回调
    const currentChange = (thisPage) => {
      console.log(thisPage);
    };

    return {
      ...toRefs(state),
      currentChange,
    };
  },
};
</script>
<style lang="scss" scoped>
.list-container {
  background: #fff;
  height: 100%;
  .search-box {
    padding: 50px 20px 0px 20px;
    .padl20 {
      padding-left: 100px;
    }
  }
  .pagination-box {
    height: 120px;
    margin-top: 50px;
    text-align: right;
  }
}
</style>