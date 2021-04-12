<script>
  export default {
    name: 'admin-post-edit',
    props: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
      currentUser: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        foundPost: {},
        form: {
          title: this.$route.params.foundPost.title,
          description: this.$route.params.foundPost.description,
          access: this.$route.params.foundPost.access,
        },
      };
    },
    created() {
      this.foundPost = this.$route.params.foundPost;
    },
    methods: {
      formatDate(date) {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '-' + mm + '-' + yyyy;
      },
      onEdit() {
        const updatedDate = this.formatDate(new Date());
        this.$emit('edit-post', { ...this.form, author: this.currentUser.id, updated_date: updatedDate }, this.foundPost, true);
      }
    }
  }
</script>

<template>
  <div class="admin-post-edit">
    <template v-if="isAdmin">
      <h2>Редактирование поста {{ foundPost.title }}</h2>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Название">
          <el-input v-model="form.title"/>
        </el-form-item>
        <el-form-item label="Описание">
          <el-input v-model="form.description"/>
        </el-form-item>
        <el-form-item label="Уровень доступа">
          <el-input type="number" max="777" min="111" v-model="form.access"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onEdit">Изменить</el-button>
        </el-form-item>
      </el-form>
    </template>
    <template v-else>
      <h3>Вы не администратор</h3>
    </template>
  </div>
</template>

<style lang="scss">
</style>
