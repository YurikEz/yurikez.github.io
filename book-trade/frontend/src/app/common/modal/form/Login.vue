<script>
import BTButton from '../../button/BTButton';

export default {
  name: 'login',
  components: {
    BTButton,
  },
  props: {},
  data() {
    return {
      form: {
        login: null,
        password: null,
      },
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    handleLogin() {
      this.$emit('login', this.form);
    },
    handleOpenRegister() {
      this.$emit('open-register');
    },
    handleOpenForgetPassword() {
      this.$emit('open-forget-password');
    },
  }
};
</script>

<template>
  <el-form
    ref="form-login"
    class="form-login"
    :model="form"
    label-width="120px"
    label-position="top"
  >
    <el-form-item label="Логин">
      <el-input v-model="form.login"/>
    </el-form-item>
    <el-form-item label="Пароль">
      <el-input v-model="form.password" type="password" autocomplete="off"/>
    </el-form-item>
    <div class="form-login__buttons-wrapper">
      <b-t-button
        additionalClass="fill"
        text="Войти"
        @click="handleLogin"
      />
      <b-t-button
        text="Зарегистрироваться"
        @click="handleOpenRegister"
      />
      <b-t-button
        text="Забыл пароль"
        disabled
        @click="handleOpenForgetPassword"
      />
    </div>
  </el-form>
</template>

<style lang="scss" scoped>
.form-login__buttons-wrapper {
  & > * {
    width: 100%;
    margin: 0.5rem auto;
  }
}
</style>