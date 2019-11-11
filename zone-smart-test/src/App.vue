<template>
  <div id="app">
    <div class="button" @click="getChannels()">
      <span>Получить каналы</span>
    </div>
    <div class="filter">
      <select class="channels" v-if="channels != undefined" @change="getCategory($event)">
        <option value="none"></option>
        <option :value="item.id" v-for="(item, index) in channels" :key="index">{{ item.name }}</option>
      </select>
      <select class="category" v-if="category != undefined" @change="getAspect($event)">
        <option value="none"></option>
        <option :value="item.id" v-for="(item, index) in category" :key="index">{{ item.name }}</option>
      </select>
    </div>
    <Loading v-if="loading"/>
    <div v-else class="aspect">
      <template v-for="(item, index) in aspect">
        <div v-if="item.aspectMode === 'SELECTION_ONLY'" :key="index">
          <h3>{{ item.localizedAspectName }}</h3>
          <select>
            <option value="none"></option>
            <option :value="itemValues" v-for="(itemValues, indexValues) in item.aspectValues" :key="indexValues">{{itemValues}}</option>
          </select>
        </div>
        <div v-else :key="index">
          <h3>{{ item.localizedAspectName }}</h3>
          <template v-if="item.aspectValues != undefined">
            <input :value="itemInputValues" v-for="(itemInputValues, indexInputValues) in item.aspectValues" :key="indexInputValues" type="text" />
          </template>
          <p v-else >Нет данных!</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
  import axios from 'axios'
  import Loading from './components/Loading'


  export default {
    name: 'cApp',
    components: {
      Loading
    },
    data() {
      return {
        authEmail: 'admin@zonesmart.ru',
        authPass: '4815162342',
        token: '',
        refreshToken: '',
        channels: undefined,
        category: undefined,
        aspect: undefined,
        loading: false
      }
    },
    props: {},
    computed: {},
    watch: {},
    created() {
      axios.post('http://utss.su/api/auth/jwt/create/', {
        email: this.authEmail,
        password: this.authPass
      })
        .then(res => {
          console.log('Создали токен:')
          console.log(res)
          this.token = res.data.access
          this.refreshToken = res.data.refresh
        })
        .catch(rej => {
          console.log('Ошибка создания токена:')
          console.log(rej)
        })
    },
    mounted() {},
    methods: {
      async getAspect(event) {
        this.loading = true
        let selectedID = event.target.value
        if (selectedID === 'none') {
          this.aspect = undefined
          this.loading = false
        } else {
          if (await this.checkToken()) this.aspect = await this.GetEbayProductCategoryAspects(selectedID)
        }
      },
      async getCategory(event) {
        this.loading = true
        let selectedID = event.target.value
        if (selectedID === 'none') {
          // reset
          this.category = undefined
          this.aspect = undefined
          this.loading = false
        } else {
          if (await this.checkToken()) this.category = await this.GetEbayProductCategoryList(selectedID)
        }
      },
      async getChannels () {
        this.loading = true
        if (await this.checkToken()) this.channels = await this.GetUserChannels()
      },
      GetEbayProductCategoryAspects(id) {
        return new Promise((res, rej) => {
          axios({
            method: 'get',
            url: `http://utss.su/api/ebay/product/category/${id}/get_aspects/`
          })
            .then(data => {
              console.log('Получили аспекты:')
              console.log(data)
              this.loading = false
              res(data.data)
            })
            .catch(err => {
              console.log('Ошибка получения аспектов:')
              console.log(err)
              rej(err)
            })
        })
      },
      GetEbayProductCategoryList(id) {
        return new Promise((res, rej) => {
          axios({
            method: 'get',
            url: `http://utss.su/api/ebay/product/category/?level=&parent_id=&channel_id=1&is_leaf=True&category_id=${id}`
          })
            .then(data => {
              console.log('Получили категории:')
              console.log(data)
              this.loading = false
              res(data.data.results)
            })
            .catch(err => {
              console.log('Ошибка получения категорий:')
              console.log(err)
              rej(err)
            })
        })
      },
      GetUserChannels() {
        return new Promise((res, rej) => {
          axios({
            method: 'get',
            url: 'http://utss.su/api/user_channel/',
            headers: {
              'Authorization': `JWT ${this.token}`
            }
          })
            .then(data => {
              console.log('Получили каналы:')
              console.log(data)
              this.loading = false
              res(data.data.results)
            })
            .catch(err => {
              console.log('Ошибка получения каналов:')
              console.log(err)
              rej(err)
            })
        })
      },
      async checkToken() {
        const statusJWTVerify = await this.JWTVerify(this.token)
        if (statusJWTVerify === 200) {
          return true
        } else {
          this.token = await this.JWTRefresh(this.refreshToken)
          this.checkToken()
        }
      },
      JWTVerify(token) {
        return new Promise((res, rej) => {
          axios.post('http://utss.su/api/auth/jwt/verify/', {
            token: token
          })
            .then(data => {
              console.log('Токен годен:')
              console.log(data)
              res(data.status)
            })
            .catch(err => {
              console.log('Токен просрочен:')
              console.log(err)
              rej(err)
            })
        })
      },
      JWTRefresh(token) {
        return new Promise((res, rej) => {
          axios.post('http://utss.su/api/auth/jwt/refresh/', {
            refresh: token
          })
            .then(data => {
              console.log('Обновили токен:')
              console.log(data)
              res(data.data.access)
            })
            .catch(err => {
              console.log('Ошибка обновления токена:')
              console.log(err)
              rej(err)
            })
        })
      }
    }
  }
</script>