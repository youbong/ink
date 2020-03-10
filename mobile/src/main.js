import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import routerPath from './router/routerPath'

import './assets/css/common.css';

Vue.config.productionTip = false
Vue.prototype.$routerPath = routerPath;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
