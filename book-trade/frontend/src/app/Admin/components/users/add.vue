<script>
  export default {
    name: 'admin-user-add',
    props: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        form: {
          login: '',
          password: '',
          access: null,
        },
      };
    },
    methods: {
      onCreate() {
        this.$emit('create-user', this.form);
      },
    }
  }
</script>

<template>
  <div class="admin-user-add">
    <template v-if="isAdmin">
      <h2>Создание пользователя</h2>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Login">
          <el-input v-model="form.login"/>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password"/>
        </el-form-item>
        <el-form-item label="Access">
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
