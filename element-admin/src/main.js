// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import i18n from './lang'
import Cookies from 'js-cookie'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
// 全局 css
// import './styles/index.scss'
// import './icons'
// import './errorLog'
import './mock'
import './permission'
// import 'normalize.css/normalize.css'
import * as filters from './filters'

Vue.use(Element, {
  // set element-ui default size
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

// register global `utility` filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
