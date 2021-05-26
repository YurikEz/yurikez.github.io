<script>
  export default {
    name: 'post-list',
    props: {
      currentUser: {
        type: Object,
        default: () => ({}),
      },
      posts: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {};
    },
    computed: {
      availablePosts() {
        return this.posts.filter(({ access }) => access <= this.currentUser.access);
      },
    },
    methods: {
      handleButtonClick(type, id = null) {
        this.$emit('button-click', { type, id });
      },
    }
  }
</script>

<template>
  <div class="post-list">
      <div class="post-list__header">
        <h1>Список постов</h1>
        <el-button
          class="post-list__button"
          type="success"
          @click="handleButtonClick('post-add')"
        >
          Добавить пост
        </el-button>
      </div>
      <div class="post-list__wrapper">
        <div
          v-for="post in availablePosts"
          :key="post.id"
          class="card"
        >
          <h3 class="card__title">{{ post.title }} - {{ post.access }}</h3>
          <div class="card__controls">
            <el-button
              class="card__button"
              type="primary"
              :disabled="post.access !== currentUser.access"
              @click="handleButtonClick('post-edit', post.id)"
            >
              Редактировать
            </el-button>
            <el-button
              class="card__button"
              type="danger"
              :disabled="post.access !== currentUser.access"
              @click="handleButtonClick('delete-post', post.id)"
            >
              Удалить
            </el-button>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
  .post-list {
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
