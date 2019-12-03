<template>
  <div id="main">
    <Banner />
    <Service />
    <PopularService />
    <Buy />
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */
  import Banner from './Banner'
  import Service from './Service'
  import PopularService from './PopularService'
  import Buy from './Buy'

  export default {
    name: 'cMain',
    components: {
      Banner,
      Service,
      PopularService,
      Buy
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