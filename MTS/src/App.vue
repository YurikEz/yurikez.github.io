<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */
  import Header from './components/Header'
  import Main from './components/Main'
  import Footer from './components/Footer'

  export default {
    name: 'cApp',
    components: {
      Header,
      Main,
      Footer
    },
    data() {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
  }
</script>