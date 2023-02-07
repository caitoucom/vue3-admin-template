import router from './router'
import store from './store'
import { getRouter, getToken, removeAll } from "@/utils/auth";

// 页面跳转顶部滚动条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


NProgress.configure({
    showSpinner: false
})

const whiteList = ['/']  // 白名单数组

// 开始路由跳转之前
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // to 将要进入页面的path
    // from 上次页面的路由对象
    // next 进入下一个页面方法

    // 登陆的唯一标识
    let key = getToken('Admin-Token')
    if (key) {
        if (to.path == '/') {
            removeAll()
            next()
        } else {
            if (store.state.permission.assRouter.length == 0) {
                // 后台过来的路由
                const ssrouter = JSON.parse(getRouter('ssrouter'));
                let rou = await store.dispatch('updateRouter', ssrouter)
                console.log(rou)
                rou.forEach(item => {
                    router.addRoute(item)
                })

                console.log(router.getRoutes())

                // replace: true 不能返回上一次路由
                // to 找匹配的路由找不到重复执行，通过vuex中router是否为空判断是否找到next()放行
                next({ ...to, replace: true })
            } else {
                next()
            }
        }
    } else {
        // 拿不到登陆唯一标识全部导向登陆页面
        // 目标是否在登陆白名单
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/')
        }
    }
})

// 路由跳转成功之后
router.afterEach(() => {
    NProgress.done()
})