<template>
  <div id="popular-service">
    <h2>Популярные сервисы</h2>
    <div class="popular-service-wrapper">
      <div class="popular-service__item" v-for="(item, index) in popularService" :key="index">
        <div class="popular-service-info">
          <div class="popular-service__title">
            <span>{{ item.name }}</span>
          </div>
          <div class="popular-service__text">
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="popular-service__icon">
          <img :src="require('../assets/img/popular-'+ (item.id + 1) +'.png')" :alt="item.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */

  export default {
    name: 'cPopularService',
    components: {},
    data() {
      return {
        popularService: [{
          id: 0,
          name: 'МТС Маркетолог',
          text: 'Используйте различные каналы коммуникации: SMS, ,E-mail, Viber, Баннеры, Социальные сети'
        }, {
          id: 1,
          name: 'Бесплатный вызов 8800',
          text: 'У надежного бизнеса всегда есть номер 8800'
        }, {
          id: 2,
          name: '#CloudMTS',
          text: 'Экосистема облачных сервисов для крупного бизнеса и корпораций'
        }, {
          id: 3,
          name: 'Виртуальная АТС',
          text: 'Простой способ телефонизации офиса без дополнительных затрат на оборудование'
        }]
      }
    },
    props: {},
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {}
  }
</script>