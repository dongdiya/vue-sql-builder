<template>
  <Draggable :list="list" :addRow="addRow" @change="list=$event">
    <template v-slot="{item, index}">
      <SelectRow :row="item" :index="index" @buildSQL="buildSQL"></SelectRow>
    </template>
  </Draggable>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SelectRow from "./SelectRow";
  import Draggable from "./Draggable";

  export default {
    name: 'HelloWorld',
    components: {SelectRow, Draggable},
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
          this.buildSQL();
        }
      }
    },
    mounted() {
    },
    data() {
      return {
        list: [{
          field: ''
        }],
      }
    },
    methods: {
      addRow() {
        return {
          field: ''
        }
      },
      buildSQL() {
        this.$store.dispatch('buildSQL', {type: 'SELECT', list: this.list})
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
