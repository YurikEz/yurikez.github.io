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
    disabled: {
      type: Boolean,
      default: false,
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
    :disabled="disabled"
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
  
  &.fill {
    width: 100%;
    margin: 1rem auto;
    text-transform: uppercase;
    background-color: var(--linkText);
    color: var(--white);
    border-radius: 5px;
  }
  
  &.background-red {
    background-color: var(--red);
    border-color: var(--red);
  }
  
  &.background-blue {
    background-color: var(--blue);
    border-color: var(--blue);
  }
  
  &.background-grey {
    background-color: var(--grey);
    border-color: var(--grey);
  }
  
  &:hover,
  &:focus-within {
    opacity: 0.7;
  }
  
  &[disabled] {
    color: var(--footerText);
    border-color: var(--footerText);
    cursor: not-allowed;
    background-color: transparent;
  }
}
</style>