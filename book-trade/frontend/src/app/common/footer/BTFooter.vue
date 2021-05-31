<script>
import BTFooterCopyright from './components/BTFooterCopyright';
import BTFooterSocial from './components/BTFooterSocial';
import BTFooterSupport from './components/BTFooterSupport';

export default {
  name: 'BTFooter',
  components: {
    BTFooterCopyright,
    BTFooterSocial,
    BTFooterSupport,
  },
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  methods: {}
};
</script>

<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__inner">
        <b-t-footer-social/>
        <b-t-footer-support/>
      </div>
      <div class="footer__inner">
        <b-t-footer-copyright/>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  h4 {
    color: var(--footerText);
    cursor: default;
  }
}
</style>

<style lang="scss" scoped>
.footer {
  background-color: var(--white)
}

.footer__wrapper {
  max-width: var(--defaultWidth);
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 0;
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}
</style>
