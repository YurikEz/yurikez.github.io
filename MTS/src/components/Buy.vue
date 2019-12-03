<template>
  <div id="buy">
    <h2>Покупка с корпоративного счета в пару кликов</h2>
    <div class="buy-wrapper">
      <div class="buy-benefit">
        <div class="buy-benefit__item" v-for="(item, index) in benefits" :key="index">
          <div class="buy-benefit__icon">
            <img :src="require('../assets/img/buy-icon-'+ (item.id + 1) +'.png')" alt="benefit">
          </div>
          <span>{{ item.text }}</span>
        </div>
        <a href="#" class="buy-benefit__button">
          <span>Смотреть все сервисы</span>
        </a>
      </div>
      <div class="buy-image">
        <img src="../assets/img/buy.png" alt="benefit image, human">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */

  export default {
    name: 'cBuy',
    components: {},
    data() {
      return {
        benefits: [{
          id: 0,
          text: 'В Бизнес маркете вы можете купить полезные сервисы для бизнеса онлайн'
        }, {
          id: 1,
          text: 'Оплата с вашего корпоративного мобильного счета'
        }, {
          id: 2,
          text: 'Счет за услуги в привычном формате'
        }, {
          id: 3,
          text: 'Покупка и доступ к услугам в режиме онлайн'
        }, {
          id: 4,
          text: 'Просто выберите номер корпоративный мобильный номер, с которого вы хотите оплатить бизнес услугу. Онлайн сервисы предоставляются сразу же после оплаты.'
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