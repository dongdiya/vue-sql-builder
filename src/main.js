import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/element.js'
import QueryBuilder from './plugins/current'
// import QueryBuilder from '../dist/vueQueryBuilder.common'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({})
Vue.use(QueryBuilder, {store});

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
