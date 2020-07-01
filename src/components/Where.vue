<template>
  <Draggable :list="list" :addRow="addRow" @change="list=$event">
    <template v-slot="{item, index}">
      <WhereRow :row="item" :index="index" @buildSQL="buildSQL"></WhereRow>
    </template>
  </Draggable>
</template>

<script>
  import { mapGetters } from 'vuex'
  import WhereRow from "./WhereRow";
  import Draggable from "./Draggable";

  export default {
    components: {WhereRow, Draggable},
    data() {
      return {
        list: [{
          field: '',
          operator: '',
          value: ''
        }],
      }
    },
    methods: {
      addRow() {
        return {
          field: '',
          operator: '',
          value: ''
        }
      },
      buildSQL() {
        this.$store.dispatch('buildSQL', {type: 'WHERE', list: this.list})
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
