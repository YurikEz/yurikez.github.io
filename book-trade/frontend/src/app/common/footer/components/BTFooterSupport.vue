<script>
import BTButton from '../../button/BTButton';

export default {
  name: 'BTFooterSupport',
  components: {
    BTButton,
  },
  methods: {
    handleClickButton() {
      alert('open modal pls');
    },
  }
};
</script>

<template>
  <div class="support">
    <h4>Служба поддержки</h4>
    <b-t-button
      text="8 (999) 999-99-99"
      @click="handleClickButton"
    />
    <a
      class="support__link"
      href="mailto:support@booktrade.com"
    >
      support@booktrade.com
    </a>
  </div>
</template>

<style lang="scss" scoped>
.support {
  .b-t-button {
    margin: 0 1rem 0 0;
  }
}
.support__link {
  text-decoration: none;
  color: var(--linkText);
  
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  
  &:hover,
  &:focus-within {
    opacity: 0.7;
  }
}
</style>