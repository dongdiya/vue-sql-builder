<template>
  <div class="sql-console">
    <pre>
        <code>{{ $store.state.SQL }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .sql-console {
        padding: 0 10px;
        background: black;
        color: lightcyan;
        font-size: 16px;
        position: fixed;
        bottom: 0px;
        left: 5px;
        right: 5px;
        text-align: left;
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
