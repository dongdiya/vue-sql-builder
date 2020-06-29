<template>
  <div>
    <!--    由下拉框组成，首项选择一个表，其余列表项都是join表-->
    <el-select v-model="row.field" placeholder="选择组字段">
      <el-option-group
              v-for="group in fieldsForSelect"
              :key="group.alias"
              :value="group.name"
              :label="group.name + '(' + group.alias + ')'">
        <el-option
                v-for="item in group.fields"
                :key="item.name"
                :label="group.alias + '.' + item.name"
                :value="group.alias + '.' + item.name">
        </el-option>
      </el-option-group>
    </el-select>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      index: Number,
      row: Object
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'tableNames',
        'fieldsForTable',
        'fieldsForNotTable',
        'fieldsForOptions',
        'fieldsForSelect'
      ])
    },
    created() {
    },
    watch: {
      row: {
        deep: true,
        immediate: true,
        handler: function (val) {
          this.$emit('buildSQL');
        }
      }
    },
    methods: {
      addRow() {
        return {
          left: '',
          right: ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
