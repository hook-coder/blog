import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from '../router'
import 'element-ui/lib/theme-chalk/index.css'
import 'default-passive-events'; //去除element警告！

// Vue.config.productionTip = false
Vue.use(ElementUI) //插件使用
Vue.use(router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
