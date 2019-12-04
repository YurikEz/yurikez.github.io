<template>
  <div v-if="targetIE" id="app">
    <h2>Вы в IE, скачайте более современный браузер</h2>
  </div>
  <div v-else id="app">
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
      return {
        targetIE: false
      }
    },
    props: {},
    computed: {},
    watch: {},
    created() {
      if (navigator.userAgent === 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)' || navigator.userAgent === 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E)') {
        // Вычисляем ie
        this.targetIE = true
      } else {
        this.targetIE = false
      }
    },
    mounted() {},
    methods: {}
  }
</script>