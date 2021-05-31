<script>
import BTButton from '../button/BTButton';
import BTHeaderLogo from './components/BTHeaderLogo';
import BTHeaderSearch from './components/BTHeaderSearch';
import BTHeaderMenu from './components/BTHeaderMenu';
import BTHeaderProfile from './components/BTHeaderProfile';

export default {
  name: 'BTHeader',
  components: {
    BTButton,
    BTHeaderLogo,
    BTHeaderSearch,
    BTHeaderMenu,
    BTHeaderProfile,
  },
  props: {
    isAuth: {
      type: Boolean,
      default: false,
    },
    currentUser: {
      type: Object,
      default: () => ({}),
    },
    activeMenuName: {
      type: String,
      default: null,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleSwitchTab(path) {
      this.$emit('switch-tab', path);
    },
    handleOpenAuth() {
      this.$emit('open-auth');
    },
    handleLogout() {
      this.$emit('logout');
    },
  }
};
</script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <b-t-header-logo/>
      <b-t-header-search/>
      <b-t-header-menu
        :activeMenuName="activeMenuName"
        :menu="menu"
        @switch-tab="handleSwitchTab"
      />
      <template v-if="isAuth">
        <b-t-header-profile
          :currentUser="currentUser"
          @logout="handleLogout"
        />
      </template>
      <template v-else>
        <b-t-button
          text="Войти"
          @click="handleOpenAuth"
        />
      </template>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: var(--white);
  margin: 0 auto;
  z-index: 5;
}

.header__wrapper {
  display: flex;
  align-items: center;
  gap: 5rem;
  max-width: var(--defaultWidth);
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  
  & > *:last-child {
    margin-left: auto;
  }
}
</style>
