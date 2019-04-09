import Vue from 'vue'
import store from './store'

// 可以在生产环境显示这个 error-log
if (processor.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function (err, vm, info) {
    Vue.nextTick(() => {
      store.dispatch('addErrorLog', {
        err,
        vm,
        info,
        url: window.location.href
      })
      console.error(err, info)
    })
  }
}
