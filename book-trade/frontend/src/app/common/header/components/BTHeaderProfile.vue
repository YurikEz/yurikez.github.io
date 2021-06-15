<script>
import BTButton from '../../button/BTButton';

export default {
  name: 'BTHeaderProfile',
  components: {
    BTButton,
  },
  props: {
    currentUser: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleToggleProfile() {
      this.show = !this.show;
    },
    handleOpenProfile() {
      this.$router.push({
        path: '/profile',
      });
    },
    handleLogout() {
      this.show = false;
      this.$emit('logout');
    },
  }
};
</script>

<template>
  <div class="profile">
    <button
      class="profile__button"
      type="button"
      @click.prevent="handleToggleProfile"
    >
      <div class="profile__label">
        <span
          v-if="currentUser.lastName === null && currentUser.name === null"
          class="profile__login"
        >
          {{ currentUser.login }}
        </span>
        <span class="profile__lastName">{{ currentUser.lastName }}</span>
        <span class="profile__name">{{ currentUser.name }}</span>
      </div>
      <img
        class="profile__image"
        src="~@/assets/img/default-avatar.png"
        alt="Avatar"
      >
      <img
        :class="[
          { 'profile__button-chevron--active' : show },
          'profile__button-chevron',
        ]"
        src="~@/assets/img/chevron.png"
        alt="Chevron"
      >
    </button>
    <div
      v-if="show"
      :class="[
        { 'profile__menu--active' : show },
        'profile__menu',
      ]"
    >
      <div class="profile__menu-wrapper">
        <b-t-button
          text="Профиль"
          @click="handleOpenProfile"
        />
        <b-t-button
          additionalClass="red"
          text="Выход"
          @click="handleLogout"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  position: relative;
}

.profile__button {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  
  &:hover,
  &:focus-within {
    opacity: 0.7;
  }
}

.profile__button-chevron {
  max-width: 12px;
  width: 100%;
  transform: rotate(180deg);
  
  will-change: transform;
  transition: transform 0.2s ease-in-out;
  
  &--active {
    transform: rotate(0);
  }
}

.profile__image {
  max-width: 32px;
  width: 100%;
}

.profile__menu {
  position: absolute;
  top: 50px;
  right: 0;
  padding: 1rem;
  background: var(--white);
  border-radius: 5px;
  border: 1px solid var(--linkText);
  
  transition: opacity 0.5s ease-in-out;
  will-change: opacity;
  opacity: 0;
  
  &--active {
    opacity: 1;
  }
  
  .b-t-button {
    background-color: var(--linkText);
    color: var(--white);
    border-radius: 5px;
    
    &.red {
      background-color: var(--red);
      border-color: var(--red);
    }
  }
}

.profile__menu-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.profile__label {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  & > * {
    width: 100%;
  }
}
</style>