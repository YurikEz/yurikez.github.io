<script>
  export default {
    name: 'admin-user-list',
    props: {
      users: {
        type: Array,
        default: () => [],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    methods: {
      handleButtonClick(type, id = null) {
        this.$emit('button-click', { type, id });
      },
    }
  }
</script>

<template>
  <div class="admin-user-list">
    <template v-if="isAdmin">
      <div class="admin-user-list__header">
      <h1>Список пользователей</h1>
      <el-button
        class="admin-user-list__button"
        type="success"
        @click="handleButtonClick('admin-user-add')"
      >
        Добавить пользователя
      </el-button>
      </div>
      <div class="admin-user-list__wrapper">
        <div
          v-for="user in users"
          :key="user.id"
          class="card"
        >
          <h3 class="card__title">Пользователь: {{ user.login }}</h3>
          <div class="card__controls">
            <el-button
              class="card__button"
              type="primary"
              @click="handleButtonClick('admin-user-edit', user.id)"
            >
              Редактировать
            </el-button>
            <el-button
              class="card__button"
              type="danger"
              @click="handleButtonClick('delete-user', user.id)"
            >
              Удалить
            </el-button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <h3>Вы не администратор</h3>
    </template>
  </div>
</template>

<style lang="scss">
  .admin-user-list {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .card {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid lightgrey;
    
    &__title {
      margin: 0 auto 1rem;
    }
    &__controls {}
  }
</style>
