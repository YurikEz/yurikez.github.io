<template>
  <div id="app">
    <Header />
    <Loading v-if="loading" />
    <router-view v-else />
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
  import Header from './components/Header'
  import Loading from './components/Loading'

  export default {
    name: 'cApp',
    components: {
      Header,
      Loading
    },
    data() {
      return {
        loading: true
      }
    },
    props: {},
    computed: {},
    watch: {},
    async created() {
      this.$store.dispatch("Course", await this.getCourse())
      this.$store.dispatch("Schedule", await this.getSchedule())
    },
    mounted() {},
    methods: {
      getCourse() {
        this.loading = true
        return new Promise((res, rej) => {
          this.axios({
            method: 'get',
            url: `https://5daca7380af117001417072a.mockapi.io/api/v1/courses`
          })
            .then(response => {
              console.log('Получили курсы')
              console.log(response)
              this.loading = false
              res(response.data)
            })
            .catch(err => {
              console.log('Ошибка:')
              console.log(err)
              rej(err)
            })
        })
      },
      getSchedule() {
        this.loading = true
        return new Promise((res, rej) => {
          this.axios({
            method: 'get',
            url: `https://5daca7380af117001417072a.mockapi.io/api/v1/lessons`
          })
            .then(response => {
              console.log('Получили занятия')
              console.log(response)
              this.loading = false
              res(response.data)
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