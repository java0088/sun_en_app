import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

Vue.prototype.goPage = function(url,data) {
	console.log('yes')
	uni.navigateTo({
		url:url,
		animationType: 'slide-in-right',
		animationDuration: 2000
	})
}


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
