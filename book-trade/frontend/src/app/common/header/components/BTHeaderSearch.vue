<script>
export default {
  name: 'BTHeaderSearch'
};
</script>

<template>
  <label class="search">
    <input
      class="search__input"
      type="text"
      placeholder="Поиск..."
    >
  </label>
</template>

<style lang="scss" scoped>
.search {
  max-width: 300px;
  width: 100%;
}

.search__input {
  width: 100%;
  border-radius: var(--roundRadius);
  padding: 0.25rem 1rem;
  color: var(--footerText);
  border: 1px solid var(--linkText);
  
  &::placeholder {
    color: var(--footerText);
  }
}
</style>