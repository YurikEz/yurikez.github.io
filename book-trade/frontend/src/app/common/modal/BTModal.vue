<script>
import Login from './form/Login';
import Register from './form/Register';
import Add from './form/Add';
import Edit from './form/Edit';
import Delete from './form/Delete';

export default {
  name: 'BTModal',
  components: {
    Login,
    Register,
    Add,
    Edit,
    Delete,
  },
  props: {},
  data() {
    return {
      isOpen: false,
      component: null,
      title: null,
      payload: null,
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  methods: {
    handleOpenModal(component, title, payload) {
      this.isOpen = true;
      this.component = component;
      this.title = title;
      this.payload = payload;
    },
    handleCloseModal() {
      this.isOpen = false;
      this.component = null;
      this.title = null;
      this.payload = null;
    },
    handleLogin(payload) {
      this.$emit('login', payload);
    },
    handleOpenLogin() {
      this.handleOpenModal('login', 'Вход');
    },
    handleRegister(payload) {
      this.$emit('register', payload);
    },
    handleOpenRegister() {
      this.handleOpenModal('register', 'Регистрация');
    },
    handleForgetPassword(payload) {
      this.$emit('forget-password', payload);
    },
    handleOpenForgetPassword() {
      this.handleOpenModal('forget-password', 'Восстановление доступа');
    },
    handleAddBook(payload) {
      this.$emit('add-book', payload);
    },
    handleEditBook(payload) {
      this.$emit('edit-book', payload);
    },
    handleDeleteBook() {
      this.$emit('delete-book', this.payload);
    },
  }
};
</script>

<template>
  <div
    v-if="isOpen"
    class="modal"
  >
    <div class="modal__wrapper">
      <header class="modal__header">
        <h3 class="modal__title">{{ title }}</h3>
        <button
          class="modal__button-close"
          type="button"
          @click="handleCloseModal"
        />
      </header>
      <main class="modal__main">
        <component
          :is="component"
          :payload="payload"
          @login="handleLogin"
          @register="handleRegister"
          @forget-password="handleForgetPassword"
          @open-login="handleOpenLogin"
          @open-register="handleOpenRegister"
          @open-forget-password="handleOpenForgetPassword"
          @add-book="handleAddBook"
          @edit-book="handleEditBook"
          @delete-book="handleDeleteBook"
          @close-modal="handleCloseModal"
        />
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 640px;
  width: 100%;
  padding: 1rem;
  box-sizing: content-box;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 0 1px var(--footerText);
  transform: translate(-50%, -50%);
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

.modal__title {
  font-size: 2.5rem;
  margin: 0 auto;
  width: 100%;
}

.modal__button-close {
  position: relative;
  width: 15px;
  height: 15px;
  margin-left: auto;
  
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  
  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    width: 15px;
    height: 2px;
    background-color: var(--footerText);
  }
  
  &::before {
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
  
  &:hover,
  &:focus-within {
    opacity: 0.7;
  }
}

.modal__main {
  margin: 2rem auto 0;
}

</style>

<style lang="scss">
.modal {
  .el-form {
  }
  
  .el-form-item {
    margin-bottom: 1rem;
  }
  
  .el-form--label-top .el-form-item__label,
  .el-form-item__label {
    line-height: 1;
    padding-bottom: 1rem;
  }
  
  .el-form-item__content {
  }
  
  .el-input {
  }
  
  .el-input__inner {
  }
  
  .el-select {
    width: 100%;
  }
}
</style>