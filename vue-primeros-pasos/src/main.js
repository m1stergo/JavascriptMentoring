import './../node_modules/bulma/css/bulma.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Code from './components/Code.vue';

Vue.component('Code', Code);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
