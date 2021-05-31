<script>
import BTModal from './app/common/modal/BTModal';
import BTHeader from './app/common/header/BTHeader';
import BTFooter from './app/common/footer/BTFooter';
import { MENU } from './constants';

export default {
  name: 'app',
  components: {
    BTModal,
    BTHeader,
    BTFooter,
  },
  data() {
    return {
      activeMenuName: null,
      isAuth: false,
      currentUser: {
        name: 'Юрий',
        lastname: 'Елманов',
      },
    };
  },
  computed: {
    // isAuth() {
    //   return false;
    // },
    isAdmin() {
      return false;
    },
    menu() {
      return MENU;
    },
  },
  watch: {
    $route(to) {
      this.activeMenuName = to.name;
    }
  },
  methods: {
    handleSwitchTab(path) {
      this.$router.push({ path });
    },
    handleOpenAuth() {
      this.$refs.modal.handleOpenModal();
      this.isAuth = true;
    },
    handleLogout() {
      console.log('logout');
      this.isAuth = false;
    },
  }
};
</script>

<template>
  <div id="app" class="book-trade">
    <b-t-header
      :isAuth="isAuth"
      :currentUser="currentUser"
      :activeMenuName="activeMenuName"
      :menu="menu"
      @switch-tab="handleSwitchTab"
      @open-auth="handleOpenAuth"
      @logout="handleLogout"
    />
    <router-view/>
    <b-t-footer
      :menu="menu"
    />
    <b-t-modal ref="modal"/>
  </div>
</template>

<style lang="scss">
:root {
  --white: #ffffff;
  --black: #000000;
  --linkText: darkorange;
  --footerText: #7c7f84;
  --bodyBackground: #f7f7f7;
  --red: red;
  
  --defaultWidth: 1280px;
  --roundRadius: 1rem;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--bodyBackground);
  font-family: 'Noto Sans Hanifi Rohingya';
}

#app {
  margin: 0 auto;
}
</style>
