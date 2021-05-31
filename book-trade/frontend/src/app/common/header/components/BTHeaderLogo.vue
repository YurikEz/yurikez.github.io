<script>
export default {
  name: 'BTHeaderLogo'
};
</script>

<template>
  <div class="logo">
    <img
      class="logo__image"
      src="~@/assets/img/logo.png"
      alt="Book Trade"
    >
    <span class="logo__text">Book Trade</span>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80px;
}

.logo__image {
  max-width: 2rem;
  width: 100%;
}

.logo__text {
  margin-left: 0.5rem;
  font-weight: bold;
}
</style>