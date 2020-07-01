import moduleData from './moduleData'
import { fromSql, whereSql, selectSql} from './query'
const mapper = {
  from: fromSql,
  where: whereSql,
  select: selectSql
}
const query = {
  namespaced: true,
  state: () => ({
    sql: '',
    list: [],
    type: ''// select/from/where
  }),
  mutations: {
    init(state, type) {
      console.log('没进来？？')
      state.type = type;
    },
    buildSql(state, list) {
      state.list = list;
      console.log(state);
      console.log(mapper[state.type]);
      state.sql = mapper[state.type](state.list);
    }
  }
}
const _store = {
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
    //全部可选项
    optionForAll: state => {
      return state.currenttables.map(item => {
        item.name = item.tableName;
        return item
      }).sort((x, y) => {
        return x.alias - y.alias;
      });
    },
  },
  mutations: {
    init (state, data) {
      state.tables = data;
      state.tables.map(item=>{
        state.tableMap.set(item.name, item.fields)
      })
    },
    updateCurrentOptions (state, {type, obj}) {
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
  },
  actions: {
    init({commit}, data) {
      commit('init', data);
      commit('select/init', 'select');
      commit('from/init', 'from');
      commit('where/init', 'where');
    },
    buildSQL({state, commit}, {type, list}) {
      let tag = type.toLowerCase();
      commit(`${tag}/buildSql`, list);
      state.SQL = [state.select.sql, state.from.sql, state.where.sql].join('\n')
      console.log(state.SQL)
    },
  },
  modules: {
    sqlData: moduleData,
    select: query,
    where: query,
    from: query
  }
}
export default _store;
