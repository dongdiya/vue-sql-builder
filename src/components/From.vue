<template>
    <Draggable :list="list" :addRow="addRow" @change="list=$event">
        <template v-slot="{item, index}">
            <FromRow :first="index === 0" :row="item" :index="index" @buildSQL="buildSQL"></FromRow>
        </template>
    </Draggable>
</template>

<script>
import { mapGetters } from 'vuex'
import FromRow from "./FromRow";
import Draggable from "./Draggable";

export default {
  name: 'HelloWorld',
  components: {FromRow, Draggable},
  props: {
    msg: String
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'tableNames',
      'fieldsForTable',
      'fieldsForNotTable',
    ])
  },
  watch: {
    list: {
        deep: false,
        handler: function (val) {
            //todo 执行SQL
            console.log('总列表变化',val)
            this.$store.dispatch('buildSQL', {type: 'FROM', list: val})
        }
    }
  },
  mounted() {
    console.log(this.list)
      this.$children
  },
  data() {
    return {
      list: [{
          joinType: '',
          tableName: '',
          alias: this.$store.getters.getAlias(),//调用一次更新一次，慎用
      }],
      tableName: '',
      value: '',
    }
  },
  methods: {
      addRow() {
          return {
              joinType: '',
              tableName: '',
              alias: this.$store.getters.getAlias(),//调用一次更新一次，慎用
              onList: [{
                  left: '',
                  right: ''
              }]
          }
      },
      buildSQL() {
          this.$store.dispatch('buildSQL', {type: 'FROM', list: this.list})
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sql-table {
        display: flex;
        flex-direction: column;
        line-height: 40px;
        div {
            display: flex;
            align-items: flex-start;
        }
    }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
