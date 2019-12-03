<template>
  <div id="service">
    <h2>Какую задачу вы решаете?</h2>
    <div class="service-wrapper">      
      <div class="service-navigation">
        <div class="service-navigation__item" v-for="(item, index) in serviceNavigation" :key="index" @click="pickedService = item.id">
          <div :class="[pickedService === item.id ? 'active' : '', 'service-navigation__button']">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
      <div class="service-product">
        <div v-show="item.idNav === pickedService" class="service-product__item" v-for="(item, index) in service" :key="index">
          <div class="service-product__item-wrapper">
            <div class="service-product__logo">
              <img :src="require('../assets/img/'+ item.logo +'.png')" alt="logo">
            </div>
            <div class="service-product__title">
              <span>{{ item.title }}</span>
            </div>
            <div class="service-product__text">
              <span>{{ item.text }}</span>
            </div>
            <div class="service-product__value" v-html="item.value">
            </div>
            <a :href="'#'+ item.idNav" class="service-product__button">
              <span>Подробнее</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */

  export default {
    name: 'cService',
    components: {},
    data() {
      return {
        pickedService: 0,
        serviceNavigation: [{
          id: 0,
          name: 'Реклама и продвижение'
        }, {
          id: 1,
          name: 'Автоматизация процессов'
        }, {
          id: 2,
          name: 'IT и безопасность'
        }, {
          id: 3,
          name: 'Работа с клиентской базой'
        }],
        service: [{
          idNav: 0,
          logo: 'logo',
          title: 'Голосовой робот',
          text: 'Облачная платформа голосового робота для совершения автоматических звонков по готовым сценариям',
          value: '<span class="service-product__quantity"><span>10</span> звонков бесплатно</span>'
        }, {
          idNav: 0,
          logo: 'logo',
          title: 'МТС Коммуникатор',
          text: 'Услуга для корпоративных клиентов МТС, позволяющая организовать простой способ общения с клиентами',
          value: '<span class="service-product__price">от <span>3 180</span> ₽/мес</span>'
        }, {
          idNav: 0,
          logo: 'logo',
          title: 'Цифровой ассистент',
          text: 'Наймите электронного сотрудника для общения с клиентами. Готовые решения для корпоративных клиентов МТС',
          value: ''
        }, {
          idNav: 0,
          logo: 'logo2',
          title: 'Push for site',
          text: 'Все, что нужно, чтобы лучше общаться с посетителями сайта и превращать их в покупателей.',
          value: '<span class="service-product__price">от <span>1 592</span> ₽</span>'
        }, {
          idNav: 1,
          logo: 'logo',
          title: 'Голосовой робот',
          text: '',
          value: ''
        }, {
          idNav: 1,
          logo: 'logo',
          title: 'МТС Коммуникатор',
          text: '',
          value: ''
        }, {
          idNav: 1,
          logo: 'logo',
          title: 'Цифровой ассистент',
          text: '',
          value: ''
        }, {
          idNav: 1,
          logo: 'logo2',
          title: 'Push for site',
          text: '',
          value: ''
        }, {
          idNav: 1,
          logo: 'logo',
          title: 'Голосовой робот',
          text: '',
          value: ''
        }, {
          idNav: 1,
          logo: 'logo',
          title: 'МТС Коммуникатор',
          text: '',
          value: ''
        }, {
          idNav: 1,
          logo: 'logo',
          title: 'Цифровой ассистент',
          text: '',
          value: ''
        }, {
          idNav: 1,
          logo: 'logo2',
          title: 'Push for site',
          text: '',
          value: ''
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