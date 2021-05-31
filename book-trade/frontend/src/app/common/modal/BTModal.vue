<script>
export default {
  name: 'BTModal',
  components: {},
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    handleOpenModal() {
      this.isOpen = true;
    },
    handleCloseModal() {
      this.isOpen = false;
      this.$emit('close-modal');
    }
  }
};
</script>

<template>
  <div v-if="isOpen">BTModal</div>
</template>

<style lang="scss" scoped>

</style>