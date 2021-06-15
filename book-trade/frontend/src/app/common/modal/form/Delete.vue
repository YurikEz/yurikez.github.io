<script>
import BTButton from '../../button/BTButton';

export default {
  name: 'Delete',
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
    return {};
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    handleDeleteBook() {
      this.$emit('delete-book');
    },
    handleCloseModal() {
      this.$emit('close-modal');
    },
  }
};
</script>

<template>
  <div class="delete">
    <h3 class="delete__description">{{ payload.name }}</h3>
    <div class="delete__buttons-wrapper">
      <b-t-button
        additionalClass="fill background-red"
        text="Удалить"
        @click="handleDeleteBook"
      />
      <b-t-button
        additionalClass="fill background-grey"
        text="Не удалять"
        @click="handleCloseModal"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.delete__buttons-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
}
</style>