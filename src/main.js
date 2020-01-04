import Vue from 'vue'
import App from './App.vue'
import ZUI from '@/index.js'
import router from './router'
Vue.config.productionTip = false
Vue.use(ZUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
