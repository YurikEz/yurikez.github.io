<script>
  export default {
    name: 'admin-user-edit',
    props: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        foundUser: {},
        form: {
          login: this.$route.params.foundUser.login,
          password: this.$route.params.foundUser.password,
          access: this.$route.params.foundUser.access,
        }
      };
    },
    created() {
      this.foundUser = this.$route.params.foundUser;
    },
    methods: {
      onEdit() {
        this.$emit('edit-user', this.form, this.foundUser);
      }
    }
  }
</script>

<template>
  <div class="admin-user-edit">
    <template v-if="isAdmin">
      <h2>Редактирование пользователя {{ foundUser.login }}</h2>
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
