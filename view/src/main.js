// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.BASE_URL
Vue.use(VueAxios, axios)
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
