<template>
  <div id="header">
    <div class="header-wrapper">
      <div class="header-logo-wrapper">
        <div class="header__logo">
          <img src="../assets/img/logo.png" alt="logo image">
          <span>Бизнес маркет</span>
        </div>
        <div class="header__title">
          <span>Онлайн сервисы</span>
        </div>
      </div>
      <div class="header-login-wrapper">
        <div class="header-mobile-login-wrapper">
          <a href="#login" class="header-mobile__profile">
            <img src="../assets/img/profile.png" alt="profile image">
          </a>
          <div :class="[stateBurger ? 'open' : '','header-mobile__burger']" @click="stateBurger = !stateBurger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <a href="#login" class="header-button">
          <span>Личный кабинет</span>
        </a>
      </div>
      <div :class="[stateBurger ? 'open' : '', 'header-mobile-menu-dropdown']">
        <div :class="[stateBurger ? 'open' : '','header-mobile__burger']" @click="stateBurger = !stateBurger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header-mobile-menu-dropdown-wrapper">
          <a href="#" class="header-mobile-menu-dropdown__item">Menu item 1</a>
          <a href="#" class="header-mobile-menu-dropdown__item">Menu item 2</a>
          <a href="#" class="header-mobile-menu-dropdown__item">Menu item 3</a>
          <a href="#" class="header-mobile-menu-dropdown__item">Menu item 4</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */

  export default {
    name: 'cHeader',
    components: {},
    data() {
      return {
        stateBurger: false
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