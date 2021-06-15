<script>
import BTButton from '../../button/BTButton';

export default {
  name: 'edit',
  components: {
    BTButton,
  },
  props: {
    payload: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      form: {
        id: this.payload.id,
        name: this.payload.name,
        author: this.payload.author,
        tags: this.payload.tags.map(item => String(item)),
      },
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    handleEditBook() {
      this.$emit('edit-book', this.form);
    },
  }
};
</script>

<template>
  <el-form
    ref="form-add-book"
    class="form-add-book"
    :model="form"
    label-width="120px"
    label-position="top"
  >
    <el-form-item label="Название книги">
      <el-input v-model="form.name"/>
    </el-form-item>
    <el-form-item label="Автор книги">
      <el-input v-model="form.author"/>
    </el-form-item>
    <el-form-item label="Теги">
      <el-select
        v-model="form.tags"
        placeholder="Выберете теги"
        multiple
      >
        <el-option label="Бесплатно" value="1"/>
        <el-option label="Обмен" value="2"/>
      </el-select>
    </el-form-item>
    <div class="form-edit-book__buttons-wrapper">
      <b-t-button
        additionalClass="fill"
        text="Изменить"
        @click="handleEditBook"
      />
    </div>
  </el-form>
</template>

<style lang="scss" scoped>
.form-edit-book__buttons-wrapper {
  & > * {
    width: 100%;
    margin: 0.5rem auto;
  }
}
</style>