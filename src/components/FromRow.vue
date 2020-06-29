<template>
  <div>
<!--    由下拉框组成，首项选择一个表，其余列表项都是join表-->
    <el-select v-if="!first" v-model="row.joinType" placeholder="请选择">
      <el-option label="inner join" value="inner join"></el-option>
      <el-option label="left join" value="left join"></el-option>
      <el-option label="right join" value="right join"></el-option>
      <el-option label="full join" value="full join"></el-option>
    </el-select>
    <el-select v-model="row.tableName"
               @change="$store.commit('updateCurrentOptions', {type: 'add',obj: row})"
               filterable placeholder="请选择">
      <el-option
              v-for="item in tableNames"
              :key="item"
              :value="item">
      </el-option>
    </el-select>
    as {{ row.alias }}
  <template v-if="!first">
      on
      <div>
          <div v-for="(item0,index) in row.onList" :key="item0.__ob__.dep.id">
              <span v-if="index > 0">AND</span>
              <el-select v-model="item0.left" placeholder="选择字段">
                  <el-option
                          v-for="item in fieldsForTable(row.tableName)"
                          :key="item.name"
                          :label="row.alias + '.' + item.name"
                          :value="row.alias + '.' + item.name">
                  </el-option>
              </el-select>
              =
              <el-select v-model="item0.right" placeholder="选择组字段">
                  <el-option-group
                          v-for="group in fieldsForOptions"
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
              <el-button @click="row.onList.splice(index + 1, 0, addRow())" type="primary" icon="el-icon-plus" circle></el-button>
              <el-button v-if="row.onList.length > 1" @click="row.onList.splice(index, 1)" type="danger" icon="el-icon-delete" circle></el-button>
          </div>
      </div>
  </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        msg: String,
        first: Boolean,
        index: Number,
        row: Object
    },
    computed: {
    ...mapGetters([
        'tableNames',
        'fieldsForTable',
        'fieldsForNotTable',
        'fieldsForOptions'
    ])
    },
    created() {
    },
    watch: {
        row: {
            deep: true,
            immediate: true,
            handler: function (val) {
              if (this.first && val.tableName ||
                  (!this.first && val.joinType && val.tableName)) {
                  console.log('emit',val)
                    this.$emit('buildSQL');
              }

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
