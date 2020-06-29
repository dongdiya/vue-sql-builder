import Vue from 'vue'
import Vuex from 'vuex'
import moduleData from './moduleData'
import { fromSql, whereSql, selectSql} from './query'
const mapper = {
  from: fromSql,
  where: whereSql,
  select: selectSql
}
Vue.use(Vuex)
const query = {
  namespaced: true,
  state: () => ({
    sql: '',
    list: [],
    type: ''// select/from/where
  }),
  mutations: {
    init(state, type) {
      state.type = type;
    },
    buildSql(state, list) {
      state.list = list;
      console.log(mapper[state.type]);
      state.sql = mapper[state.type](state.list);
    }
  }
}
const store = new Vuex.Store({
  state: {
    tables: [],//源数据
    tableMap: new Map(),//数据map
    currenttables: [],//tableName,alias
    SQL: '',
  },
  getters: {
    tableNames: state => {
      return state.tables.map(item => item.name);
    },
    fieldsForTable: state => table => {
      return table ? state.tables.find(item => item.name == table).fields : [];
    },
    fieldsForNotTable: state => table => {
      return state.tables.filter(item => item.name != table);
    },
    fieldsForOptions: state => {
      console.log('???????????')
      return state.currenttables.map(item => {
        item.fields[0].name == '*' && item.fields.shift();
        item.name = item.tableName;
        return item
      }).sort((x, y) => {
        return x.alias - y.alias;
      });
    },
    fieldsForSelect: state => {
      console.log('???????????')
      return [{name: '*',alias: '*', fields:[{name: '*'}]},...state.currenttables.map(item => {
        item.name = item.tableName;
        item.fields[0].name != '*' && item.fields.unshift({name: '*'});
        return item
      }).sort((x, y) => {
        return x.alias - y.alias;
      })];
    },
  },
  mutations: {
    init (state, data) {
      state.tables = data;
      state.tables.map(item=>{
        state.tableMap.set(item.name, item.fields)
      })
      store.commit('select/init', 'select');
      store.commit('from/init', 'from');
      store.commit('where/init', 'where');
    },
    updateCurrentOptions (state, {type, obj}) {
      console.log(obj,type);
      if (type == 'add') {
        obj.fields = state.tableMap.get(obj.tableName);
        let index = state.currenttables.findIndex(item => item.alias == obj.alias);
        if (index > -1) {
          state.currenttables[index] = obj;
        } else {
          state.currenttables.push(obj)
        }
      } else if (type == 'delete') {
        state.currenttables = state.currenttables.filter(item => item.alias != obj.alias)
      }
    },
    buildSQL(state, {type, list}) {
      let tag = type.toLowerCase();
      store.commit(`${tag}/buildSql`, list);
      state.SQL = [state.select.sql, state.from.sql, state.where.sql].join('\n')
    },
  },
  actions: {
    getData({commit}, data) {
      commit('init', data);
    }
  },
  modules: {
    sqlData: moduleData,
    select: query,
    where: query,
    from: query
  }
})
export default store;