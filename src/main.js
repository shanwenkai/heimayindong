import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
// 引入 Vant
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import '@/styles/index.less'

Vue.config.productionTip = false
// 把Vant 全局注册
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
