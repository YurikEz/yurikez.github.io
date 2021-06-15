<script>
export default {
  name: 'BTHeaderMenu',
  props: {
    activeMenuName: {
      type: String,
      default: null,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSwitchTab(path) {
      this.$emit('switch-tab', path);
    },
  }
};
</script>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        v-for="({ id, label, name, path }) in menu"
        :key="id"
        class="menu__item"
      >
        <a
          :class="[
            { 'menu__link--active' : activeMenuName === name },
            'menu__link',
          ]"
          @click.prevent="handleSwitchTab(path)"
        >
          {{ label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
}

.menu__list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.menu__item {
}

.menu__link {
  text-decoration: none;
  color: var(--linkText);
  
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  cursor: pointer;
  text-transform: uppercase;
  
  &--active {
    text-decoration: underline;
  }
  
  &:hover,
  &:focus-within {
    opacity: 0.7;
  }
}
</style>