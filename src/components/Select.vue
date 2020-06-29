<template>
  <div class="sql-table">
    <!--    由下拉框组成，首项选择一个表，其余列表项都是join表-->
    <div v-for="(item, index) in list" :key="item.__ob__.dep.id">
      <el-button circle>拖</el-button>
      <el-button @click="list.splice(index+1, 0, addRow())" type="primary" icon="el-icon-plus" circle></el-button>
      <el-button v-if="list.length > 1" @click="list.splice(index, 1)" type="danger" icon="el-icon-delete" circle></el-button>
      <SelectRow :row="item" :index="index" @buildSQL="buildSQL"></SelectRow>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SelectRow from "./SelectRow";

  export default {
    name: 'HelloWorld',
    components: {SelectRow},
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
      console.log(this.list)
      this.$children
    },
    data() {
      return {
        list: [{
          field: ''
        }],
        tableName: '',
        value: '',
        row: {
          joinType: '',
          tableName: '',
          alias: this.$store.getters.getAlias(),//调用一次更新一次，慎用
          left: '',
          right: ''
        },
      }
    },
    methods: {
      addRow() {
        return {
          field: ''
        }
      },
      buildSQL() {
        this.$store.commit('buildSQL', {type: 'SELECT', list: this.list})
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
