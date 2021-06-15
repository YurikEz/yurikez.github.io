<script>
import BTButton from '../../button/BTButton';

export default {
  name: 'register',
  components: {
    BTButton,
  },
  props: {},
  data() {
    return {
      form: {
        login: null,
        email: null,
        password: null,
      },
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    handleRegister() {
      this.$emit('register', this.form);
    },
    handleOpenLogin() {
      this.$emit('open-login');
    },
  }
};
</script>

<template>
  <el-form
    ref="form-register"
    class="form-register"
    :model="form"
    label-width="120px"
    label-position="top"
  >
    <el-form-item label="Ваша электронная почта">
      <el-input v-model="form.email"/>
    </el-form-item>
    <el-form-item label="Придумайте логин, пожалуйста">
      <el-input v-model="form.login"/>
    </el-form-item>
    <el-form-item label="Придумайте пароль, пожалуйста">
      <el-input v-model="form.password" type="password" autocomplete="off"/>
    </el-form-item>
    <div class="form-register__buttons-wrapper">
      <b-t-button
        additionalClass="fill"
        text="Зарегистрироваться"
        @click="handleRegister"
      />
      <b-t-button
        text="Войти"
        @click="handleOpenLogin"
      />
    </div>
  </el-form>
</template>

<style lang="scss" scoped>
.form-register__buttons-wrapper {
  & > * {
    width: 100%;
    margin: 0.5rem auto;
  }
}
</style>