import Vue from 'vue'
import App from './App.vue'
// import ZButton from '@/components/button/index.js'
import ZUI from '@/components/index.js'
import router from './router'
console.log(ZUI)
Vue.config.productionTip = false
Vue.use(ZUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
