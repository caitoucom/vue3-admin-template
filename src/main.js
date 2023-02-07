import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './app.css'

// 导入路由拦截
import './permission'

import { post, get } from "@/utils/request";

// cookies
import { VueCookieNext } from 'vue-cookie-next'
VueCookieNext.config({ expire: '7d' })

// 导入element-plus
import installElementPlus from './plugins/element'

import 'lib-flexible'

const app = createApp(App)

installElementPlus(app)

app.config.globalProperties.$post = post;
app.config.globalProperties.$get = get;

app.use(store).use(router).use(VueCookieNext).mount('#app')
