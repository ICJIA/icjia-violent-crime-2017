import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;
import lodash from 'lodash';
window._ = window.lodash = lodash;
require('./directives/placeholders');
require('animate.css')

import Meta from 'vue-meta'
Vue.use(Meta)

import tether from 'tether'
import bootstrap from 'bootstrap-sass'
// import './scss/base.scss';

import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-10798495-18' 
})
import App from './App'

import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    base: __dirname,
    routes: routes
})




var vue = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')
