import Vue from 'vue'
import App from './components/App.vue'


import './static/main.scss'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
})