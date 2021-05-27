<script>
  export default {
    name: 'app',
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {},
    methods: {}
  }
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  #app {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
</style>
