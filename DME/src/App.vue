<template>
  <div id="app">
    <h1>Телефонный справочник</h1>
    <Filters v-if="!loading" />
    <Loading v-if="loading" />
    <Table v-else />
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
  import axios from 'axios'
  import Loading from './components/Loading'
  import Filters from './components/Filters'
  import Table from './components/Table'

  export default {
    name: 'cApp',
    components: {
      Loading,
      Filters,
      Table
    },
    data() {
      return {
        loading: false
      }
    },
    props: {},
    computed: {
      profile() {
        return this.$store.getters.getProfiles
      },
      readyProfiles() {
        return this.$store.getters.getReadyProfiles
      }
    },
    watch: {},
    async created() {
      this.$store.dispatch("Profiles", await this.getProfile())
      this.$store.dispatch("ReadyProfiles", this.profile)
    },
    mounted() {},
    methods: {
      getProfile() {
        this.loading = true
        return new Promise((res, rej) => {
          axios({
            method: 'get',
            url: `https://randomuser.me/api/?results=100&nat=ie&inc=name,dob,email,phone,picture`
          })
            .then(data => {
              // console.log('Получили случайных людей:')
              // console.log(data.data.results)
              this.loading = false
              res(data.data.results)
            })
            .catch(err => {
              console.log('Ошибка:')
              console.log(err)
              rej(err)
            })
        })
      }
    }
  }
</script>