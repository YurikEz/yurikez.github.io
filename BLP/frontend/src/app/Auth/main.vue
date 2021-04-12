<script>
  export default {
    data() {
      return {
        form: {
          login: '',
          password: '',
        },
      };
    },
    methods: {
      handleLogin(form) {
        this.$emit('login', form);
      },
    }
  }
</script>

<template>
  <div class="auth">
    <div class="auth__wrapper">
      <h1 class="auth__title">Auth</h1>
      <el-form
        :model="form"
        status-icon
        label-width="120px"
        class="auth__form"
      >
        <el-form-item label="User" prop="user">
          <el-input type="text" v-model="form.login" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input type="password" v-model="form.password" autocomplete="off"/>
        </el-form-item>
        <el-button
          type="primary"
          class="auth__button"
          @click="handleLogin(form)"
        >
          login
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
  .auth {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 300px;
      margin: 0 auto;
    }
    &__title {
      width: 100%;
      margin: 1rem auto;
      text-align: center;
    }
    &__form {}
    
    &__button {
      width: 100%;
    }
  }
</style>
