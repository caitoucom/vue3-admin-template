import { routerMap } from '@/router/index'

const permission = {
    state: {
        assRouter: []
    },
    mutations: {
        setAssRouter(state, msg) {
            state.assRouter = msg
        }
    },
    actions: {
        updateRouter({ commit }, data) {
            // routerMap 为本地路由
            // serverRouter 后端给的路由
            // 进行比对将组件放进component中
            let serverRouter = data
            serverRouter.forEach(item => {
                item.component = routerMap[item.component]
                item.children.forEach(ele => {
                    ele.component = routerMap[ele.component]
                })
            })
            commit('setAssRouter', serverRouter)
            return serverRouter;
        }
    },
    getters: {}
}

export default permission