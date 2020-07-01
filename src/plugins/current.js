import QueryBuilder from "../components/QueryBuilder";
import Vuex from 'vuex'
import Vue from "vue"
import sqlstore from '../store'
//todo 更改绝对路径
import '@/assets/style.scss'

Vue.use(Vuex)
QueryBuilder.install = function (Vue, {store, namespace = 'vueSqlBuilder'} = {}) {
    Vue.prototype.$SqlBuilderNamespace = namespace;
    if (!store) {
        store = new Vuex.Store({})
        Vue.prototype.$store = store
    }
    store.registerModule(namespace, sqlstore);

    Vue.component(QueryBuilder.name, QueryBuilder)
}
export default QueryBuilder
