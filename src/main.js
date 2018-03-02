// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from '../node_modules/mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import Zepto from 'zepto'
//import this components if need,example :import HighCharts from 'highcharts'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
