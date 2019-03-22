import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/reset.css'

new Vue({
    el: '#app',
    render: h => h(App),
    router
})