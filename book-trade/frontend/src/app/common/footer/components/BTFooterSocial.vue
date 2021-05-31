<script>
export default {
  name: 'BTFooterSocial',
  methods: {
    handleClickSocial() {
      alert('open modal pls');
    },
  }
};
</script>

<template>
  <div class="social">
    <h4>Следите за новостями в наших социальных сетях</h4>
    <div class="social__wrapper">
      <button
        class="social__button"
        type="button"
        @click.prevent="handleClickSocial"
      >
        <img
          class="social__image"
          src="~@/assets/img/socials/vk.png"
          alt="vk"
        >
      </button>
      <button
        class="social__button"
        type="button"
        @click.prevent="handleClickSocial"
      >
        <img
          class="social__image"
          src="~@/assets/img/socials/facebook.png"
          alt="facebook"
        >
      </button>
      <button
        class="social__button"
        type="button"
        @click.prevent="handleClickSocial"
      >
        <img
          class="social__image"
          src="~@/assets/img/socials/instagram.png"
          alt="instagram"
        >
      </button>
      <button
        class="social__button"
        type="button"
        @click.prevent="handleClickSocial"
      >
        <img
          class="social__image"
          src="~@/assets/img/socials/twitter.png"
          alt="twitter"
        >
      </button>
      <button
        class="social__button"
        type="button"
        @click.prevent="handleClickSocial"
      >
        <img
          class="social__image"
          src="~@/assets/img/socials/tiktok.png"
          alt="tiktok"
        >
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social {
}

.social__wrapper {
}

.social__button {
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

.social__image {
  max-width: 1.5rem;
  width: 100%;
}
</style>