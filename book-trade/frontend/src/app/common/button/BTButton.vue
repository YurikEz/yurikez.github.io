<script>
export default {
  name: 'BTButton',
  props: {
    additionalClass: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClickButton() {
      this.$emit('click');
    },
  }
};
</script>

<template>
  <button
    :class="[
      additionalClass,
      'b-t-button',
    ]"
    type="button"
    @click.prevent="handleClickButton"
  >
    <span>{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.b-t-button {
  background: none;
  outline: none;
  border: 1px solid var(--linkText);;
  color: var(--linkText);
  cursor: pointer;
  padding: 0.5rem;
  
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  
  &:hover,
  &:focus-within {
    opacity: 0.7;
  }
}
</style>