<script>
  export default {
    name: 'admin-post-add',
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
        form: {
          title: '',
          description: '',
          access: null,
        },
      };
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
      onCreate() {
        const createDate = this.formatDate(new Date());
        this.$emit('create-post', { ...this.form, author: this.currentUser.id, created_date: createDate }, true);
      },
    }
  }
</script>

<template>
  <div class="admin-post-add">
    <template v-if="isAdmin">
      <h2>Создание поста</h2>
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
          <el-button type="primary" @click="onCreate">Создать</el-button>
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
