<script>
  export default {
    name: 'admin-post-list',
    props: {
      posts: {
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
  <div class="admin-post-list">
    <template v-if="isAdmin">
      <div class="admin-post-list__header">
        <h1>Список постов</h1>
        <el-button
          class="admin-post-list__button"
          type="success"
          @click="handleButtonClick('admin-post-add')"
        >
          Добавить пост
        </el-button>
      </div>
      <div class="admin-post-list__wrapper">
        <div
          v-for="post in posts"
          :key="post.id"
          class="card"
        >
          <h3 class="card__title">{{ post.title }} - {{ post.access }}</h3>
          <div class="card__controls">
            <el-button
              class="card__button"
              type="primary"
              @click="handleButtonClick('admin-post-edit', post.id)"
            >
              Редактировать
            </el-button>
            <el-button
              class="card__button"
              type="danger"
              @click="handleButtonClick('delete-post', post.id)"
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
  .admin-post-list {
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
