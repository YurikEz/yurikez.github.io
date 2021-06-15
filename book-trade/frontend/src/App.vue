<script>
import { mapActions, mapGetters } from 'vuex';

import BTModal from './app/common/modal/BTModal';
import BTHeader from './app/common/header/BTHeader';
import BTFooter from './app/common/footer/BTFooter';
import { MENU } from './constants';

// Релиз 1
// TODO: Сделать профиль
// TODO: В профиле дать возможность смотреть свои книги
// TODO: В профиле дать возможность смотреть забронированные книги
// TODO: В профиле дать возможность смотреть полученные книги
// TODO: Добавить функционал для разбронирования книги
// TODO: Написать функционал для того, что бы забрать книгу
// TODO: Написать функционал, который скрывает размещенные пользователем книги (те если я разместил книгу, то я ее не вижу в общем списке)

// Релиз 2
// TODO: Написать адаптивную верстку
// TODO: Добавить спиннер при загрузках
// TODO: Написать валидацию форм
// TODO: Написать логику для поиска по книгам

export default {
  name: 'app',
  components: {
    BTModal,
    BTHeader,
    BTFooter,
  },
  data() {
    return {
      activeMenuName: null,
    };
  },
  computed: {
    ...mapGetters([
      'isAdmin',
      'isAuth',
      'currentUser',
      'books',
    ]),
    menu() {
      return MENU;
    },
  },
  watch: {
    isAuth(newValue) {
      localStorage.setItem('isAuth', newValue);
      
      if (this.currentUser.id) {
        localStorage.setItem('currentUser', this.currentUser.id);
      }
    },
    $route(to) {
      this.activeMenuName = to.name;
    },
  },
  created() {
    this.setIsAuth(localStorage.getItem('isAuth') === 'true');

    if (localStorage.getItem('isAuth') === 'true') {
      this.getCurrentUser(localStorage.getItem('currentUser'));
    }

    this.getBooks();
  },
  methods: {
    ...mapActions([
      'login',
      'logout',
      'getCurrentUser',
      'getBooks',
      'addBook',
      'booking',
      'editBook',
      'deleteBook',
      'register',
      'forgetPassword',
      'setIsAuth',
      'setCurrentUser',
    ]),
    handleSwitchTab(path) {
      this.$router.push({ path });
    },
    handleOpenAuth() {
      this.$refs.modal.handleOpenModal('login', 'Вход');
    },
    handleLogin(payload) {
      this.login(payload).then(({ id }) => {
        this.$refs.modal.handleCloseModal();
        this.getCurrentUser(id).then(() => this.setIsAuth(true));
      });
    },
    handleLogout() {
      this.logout();
      localStorage.setItem('currentUser', null);
    },
    handleRegister(payload) {
      this.register(payload).then(() => this.$refs.modal.handleCloseModal());
    },
    handleForgetPassword(payload) {
      this.forgetPassword(payload);
    },
    handleOpenAddBook(payload) {
      this.$refs.modal.handleOpenModal('add', 'Оставить книгу', payload);
    },
    handleAddBook(book) {
      const payload = {
        ...book,
        user_id: this.currentUser.id,
      };
      
      this.addBook(payload).then(() => {
        this.$refs.modal.handleCloseModal();
        this.getBooks();
        this.getCurrentUser(this.currentUser.id);
      });
    },
    handleBooking(book) {
      const payload = {
        ...book,
        user_id: this.currentUser.id,
      };
      
      this.booking(payload).then(() => {
        this.getBooks();
        this.getCurrentUser(this.currentUser.id);
      });
    },
    handleOpenEditBook({ id }) {
      this.$refs.modal.handleOpenModal(
        'edit',
        'Редактировать информацию',
        this.books.find(({ id: bookId }) => bookId === id),
      );
    },
    handleEditBook(book) {
      const payload = {
        ...book,
        user_id: this.currentUser.id,
      };
      
      this.editBook(payload).then(() => {
        this.$refs.modal.handleCloseModal();
        this.getBooks();
      });
    },
    handleOpenDeleteBook(payload) {
      this.$refs.modal.handleOpenModal('delete', 'Удалить книгу', payload);
    },
    handleDeleteBook(book) {
      const payload = {
        ...book,
        user_id: this.currentUser.id,
      };
      
      this.deleteBook(payload).then(() => {
        this.$refs.modal.handleCloseModal();
        this.getBooks();
        this.getCurrentUser(this.currentUser.id);
      });
    },
  }
};
</script>

<template>
  <div id="app" class="book-trade">
    <b-t-header
      :isAuth="isAuth"
      :currentUser="currentUser"
      :activeMenuName="activeMenuName"
      :menu="menu"
      @switch-tab="handleSwitchTab"
      @open-auth="handleOpenAuth"
      @logout="handleLogout"
    />
    <router-view
      :isAdmin="isAdmin"
      :isAuth="isAuth"
      :currentUser="currentUser"
      :books="books"
      @open-add-book="handleOpenAddBook"
      @booking="handleBooking"
      @open-edit-book="handleOpenEditBook"
      @open-delete-book="handleOpenDeleteBook"
    />
    <b-t-footer
      :menu="menu"
    />
    <b-t-modal
      ref="modal"
      @login="handleLogin"
      @register="handleRegister"
      @forget-password="handleForgetPassword"
      @add-book="handleAddBook"
      @edit-book="handleEditBook"
      @delete-book="handleDeleteBook"
    />
  </div>
</template>

<style lang="scss">
:root {
  --white: #ffffff;
  --black: #000000;
  --linkText: darkorange;
  --footerText: #7c7f84;
  --bodyBackground: #f7f7f7;
  --red: red;
  --blue: dodgerblue;
  --grey: lightgrey;
  
  --defaultWidth: 1280px;
  --roundRadius: 1rem;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: var(--bodyBackground);
  font-family: 'Noto Sans Hanifi Rohingya';
}

#app {
  margin: 0 auto;
}
</style>
