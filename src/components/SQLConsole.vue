<template>
  <div class="sql-console">
    <pre>
        <code>{{ $store.state[this.$SqlBuilderNamespace].SQL }}</code>
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
        z-index: 100;
        min-height: 100px;
        padding: 0 10px;
        background: black;
        color: lightcyan;
        font-size: 16px;
        position: sticky;
        bottom: 0px;
        left: 5px;
        right: 5px;
        text-align: left;
        pre {
            display: block;
            padding: 0;
            margin: 0;
            font-size: inherit;
            color: inherit;
            word-break: break-all;
            word-wrap: break-word;
            background-color: inherit;
            border: none;
        }
    }
</style>
