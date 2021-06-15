<script>
import BTButton from '../../button/BTButton';

export default {
  name: 'ForgetPassword',
  components: {
    BTButton,
  },
  props: {},
  data() {
    return {
      form: {
        email: null,
      }
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    handleForgetPassword() {
      this.$emit('forget-password', this.form);
    },
  }
};
</script>

<template>
  <el-form
    ref="form-forget"
    class="form-forget"
    :model="form"
    label-width="120px"
    label-position="top"
  >
    <el-form-item label="Введите вашу электронную почту">
      <el-input v-model="form.email"/>
    </el-form-item>
    <div class="form-login__buttons-wrapper">
      <b-t-button
        additionalClass="fill"
        text="Получить пароль"
        @click="handleForgetPassword"
      />
    </div>
  </el-form>
</template>

<style lang="scss" scoped>

</style>