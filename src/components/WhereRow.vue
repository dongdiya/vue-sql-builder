<template>
  <div class="sql-form-group">
    <el-select v-model="row.field" placeholder="选择组字段">
      <el-option-group
              v-for="group in optionForAll"
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
    <el-select v-model="row.operator" placeholder="operator">
        <el-option label="LIKE" value="LIKE"></el-option>
        <el-option label="IN" value="IN"></el-option>
        <el-option label="=" value="="></el-option>
        <el-option label="<=" value="<="></el-option>
        <el-option label="<" value="<"></el-option>
        <el-option label=">=" value=">="></el-option>
        <el-option label=">" value=">"></el-option>
        <el-option label="<>" value="<>"></el-option>
    </el-select>
    <el-input v-model="row.value"></el-input>
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
        'optionForAll'
      ])
    },
    watch: {
      row: {
        deep: true,
        handler: function (val) {
            if (val.field && val.operator && val.value) {
                this.$emit('buildSQL');
            }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
