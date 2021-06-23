<script>
export default {
  name: 'profile',
  components: {},
  props: {
    currentUser: {
      type: Object,
      default: () => ({}),
    },
    books: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>

<template>
  <div class="profile">
    <div class="profile-header">
      <div class="profile__avatar"></div>
      <div class="profile__info">
        <div class="profile__info-field">
          <span class="profile__info-field-name">ФИО:</span>
          <span class="profile__info-field-value">
            {{ currentUser.lastName }}
            {{ currentUser.name }}
            {{ currentUser.patronymic }}
          </span>
        </div>
        <div class="profile__info-field">
          <span class="profile__info-field-name">Логин:</span>
          <span class="profile__info-field-value">{{ currentUser.login }}</span>
        </div>
        <div class="profile__info-field">
          <span class="profile__info-field-name">Email:</span>
          <span class="profile__info-field-value">{{ currentUser.email }}</span>
        </div>
      </div>
    </div>
    <template v-if="currentUser.books.length">
      <h3>Добавленые мною книги</h3>
      <ul class="profile__books">
        <li
          v-for="book in currentUser.books"
          :key="book"
          class="profile__books-item"
        >
          {{ books.find(({ id }) => book).name }}
        </li>
      </ul>
    </template>
    <template v-if="currentUser.booking.length">
      <h3>Забронированные книги</h3>
      <ul class="profile__books">
        <li
          v-for="book in currentUser.booking"
          :key="book"
          class="profile__books-item"
        >
          {{ books.find(({ id }) => book).name }}
        </li>
      </ul>
    </template>
    <template v-if="currentUser.takeBooks.length">
      <h3>Полученые книги</h3>
      <ul class="profile__books">
        <li
          v-for="book in currentUser.takeBooks"
          :key="book"
          class="profile__books-item"
        >
          {{ books.find(({ id }) => book).name }}
        </li>
      </ul>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  background: var(--white);
  max-width: var(--defaultWidth);
  width: 100%;
  margin: 5.5rem auto 1rem;
  padding: 2rem;
}
.profile-header {
  display: flex;
}
.profile__avatar {
  display: block;
  width: 200px;
  height: 200px;
  background-color: var(--footerText);
}
.profile__info {
  margin-left: 3rem;
}
.profile__info-field {
  margin: 1rem auto;
}
.profile__info-field-name {
  font-weight: bold;
  font-size: 1.25rem;
}
.profile__info-field-value {
  font-size: 1rem;
  margin-left: 2rem;
}
</style>