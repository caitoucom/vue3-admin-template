<template>
  <div class="login-container">
    <div class="content-box">
      <div class="login-box">
        <div class="left-logo">
          <div class="logo-box"></div>
        </div>
        <div class="right-login-form">
          <div class="form-box">
            <div class="form-top">
              <span>欢迎登陆</span>
              <p>请使用您本人的账号和密码登陆</p>
            </div>
            <ul>
              <li>
                <input
                  type="text"
                  v-model="loginForm.username"
                  placeholder="账号"
                />
              </li>
              <li>
                <input
                  :type="passwordType"
                  v-model="loginForm.password"
                  placeholder="密码"
                />
                <img
                  @click="setPasswordType"
                  v-if="passwordImg"
                  :src="imgsrc"
                />
              </li>
            </ul>
            <button @click="submitLogin">登 陆</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// toRefs 解构响应式数据并不会丢失响应
import { ref, reactive, getCurrentInstance, watch, toRefs } from "vue";
import img1 from "@/assets/1601.png";
import img2 from "@/assets/1602.png";
import { setToken, setRouter } from "@/utils/auth";

export default {
  name: "login",
  setup(props, context) {
    const { proxy } = getCurrentInstance();
    // 数据
    const state = reactive({
      loginForm: { username: "", password: "" },
      passwordType: "password",
      passwordImg: false,
      imgsrc: img1,
    });

    // 监听密码框内容变化
    watch(() => {
      state.loginForm.password == ""
        ? (state.passwordImg = false)
        : (state.passwordImg = true);
    });
    // 登陆提交
    const submitLogin = () => {
      setToken("111");
      const router = [
        {
          path: "/summarize",
          name: "Summarize",
          component: "layout",
          icon: "el-icon-s-home",
          title: "概括",
          children: [
            {
              path: "/summarize",
              name: "Summarize",
              component: "summarize",
              title: "概括",
              icon: "el-icon-s-home",
            },
          ],
        },
        {
          path: "/list",
          name: "list",
          component: "layout",
          icon: "el-icon-s-release",
          title: "列表管理",
          children: [
            {
              path: "/list",
              name: "List",
              component: "list",
              icon: "el-icon-s-release",
              title: "列表管理",
            },
          ],
        },
        {
          path: "/system",
          name: "system",
          component: "layout",
          icon: "el-icon-setting",
          title: "系统管理",
          children: [
            {
              path: "/system",
              name: "system",
              component: "system",
              icon: "el-icon-setting",
              title: "权限管理",
            },
            {
              path: "/account",
              name: "account",
              component: "account",
              icon: "el-icon-date",
              title: "账号管理",
            },
          ],
        },
      ];
      setRouter(JSON.stringify(router));
      proxy.$router.push({ path: "/summarize" });
    };

    // 密码框type切换
    const setPasswordType = () => {
      if (state.passwordType == "password") {
        state.passwordType = "text";
        state.imgsrc = img2;
      } else {
        state.passwordType = "password";
        state.imgsrc = img1;
      }
    };

    // 将状态和方法在setup中返回
    return {
      ...toRefs(state),
      submitLogin,
      setPasswordType,
    };
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url("./../../assets/login-bg.jpg") no-repeat;
  background-size: cover;
  position: relative;

  .content-box {
    width: 1400px;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    .system-name {
      width: 100%;
      font-size: 55px;
      color: #fff;
      font-weight: bold;
      text-align: center;
      letter-spacing: 15px;
    }
    .login-box {
      width: 1400px;
      height: 700px;
      background: #fff;
      border-radius: 15px;
      overflow: hidden;
      margin-top: 50px;
      display: flex;
      .left-logo {
        width: 480px;
        height: 700px;
        background: url("./../../assets/logo-bg.jpg") no-repeat;
        background-size: cover;
        overflow: hidden;
        .logo-box {
          width: 140px;
          height: 140px;
          background: #fff;
          border: 4px solid #a8c8ff;
          border-radius: 50%;
          margin: 0 auto;
          margin-top: 100px;
        }
        .logo-text {
          text-align: center;
          color: #fff;
          margin-top: 20px;
          font-size: 26px;
        }
      }
      .right-login-form {
        width: 920px;
        height: 630px;
        background: #fff;
        .form-box {
          width: 530px;
          margin: 0 auto;
          margin-top: 80px;
          .form-top {
            span {
              color: #4298fd;
              font-size: 34px;
            }
            p {
              color: #b3b5b7;
              font-size: 20px;
              margin-top: 10px;
            }
          }
          ul {
            li {
              width: 100%;
              height: 80px;
              border-bottom: 1px solid #999999;
              margin-top: 35px;
              position: relative;
              input {
                width: 100%;
                border: 0;
                height: 80px;
                font-size: 24px;
              }
              img {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
              }
            }
          }
          button {
            width: 100%;
            height: 80px;
            line-height: 80px;
            background: #4298fd;
            color: #fff;
            text-align: center;
            font-size: 24px;
            border-radius: 40px;
            border: 0;
            margin-top: 90px;
            cursor: pointer;
          }
          button:hover {
            background: #66b1ff;
          }
        }
      }
    }
  }

  .footer {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 16px;
    position: absolute;
    bottom: 30px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer i {
    width: 90px;
    height: 1px;
    display: inline-block;
    background-image: linear-gradient(to right, #384e6c, #418eea);
  }
  .footer .toL {
    background-image: linear-gradient(to left, #384e6c, #418eea);
  }
}
</style>