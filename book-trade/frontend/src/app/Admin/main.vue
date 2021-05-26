<script>
  export default {
    name: 'admin-panel',
    props: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    methods: {
      handleTransitionPage(type) {
        this.$router.push({ name: type });
      },
    }
  }
</script>

<template>
  <div class="admin-panel">
    <template v-if="isAdmin">
      <el-button @click="handleTransitionPage('admin-users')">Посмотреть список пользователей</el-button>
      <el-button @click="handleTransitionPage('admin-posts')">Посмотреть список постов</el-button>
    </template>
    <template v-else>
      <h3>Вы не администратор</h3>
    </template>
  </div>
</template>

<style lang="scss">
</style>
