// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import '../static/js/screen'
import Router from 'vue-router'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.use(Router);

import router from './router/index.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: c => c(App),
  router,
})
