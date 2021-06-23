<script>
import BTButton from '../common/button/BTButton';
import { TAGS } from '../../constants';

export default {
  name: 'booktrade',
  components: {
    BTButton,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAuth: {
      type: Boolean,
      default: false,
    },
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
  computed: {
    TAGS() {
      return TAGS;
    },
  },
  methods: {
    handleOpenAddBook() {
      this.$emit('open-add-book', { userId: this.currentUser.id });
    },
    handleBooking(id) {
      this.$emit('booking', { id });
    },
    handleTaken(id) {
      this.$emit('taken', { id });
    },
    handleOpenEditBook(payload) {
      this.$emit('open-edit-book', payload);
    },
    handleOpenDeleteBook(payload) {
      this.$emit('open-delete-book', payload);
    },
  }
};
</script>

<template>
  <article class="booktrade">
    <section class="book__banner">
      <div class="book__banner-info">
        <h1>Книгообмен</h1>
        <h3>Здесь можно оставить свою книгу</h3>
        <b-t-button
          v-if="isAuth"
          additionalClass="fill"
          text="Оставить книгу"
          @click="handleOpenAddBook"
        />
      </div>
    </section>
    <section v-if="books.length">
      <h2>Нас можно забрать уже сегодня</h2>
      <div class="booktrade__wrapper">
        <div
          v-for="({ id, image, name, author, tags, userId, booked, taken }) in books"
          :key="id"
          class="book__inner"
        >
          <div class="book">
            <div class="book__image-wrapper">
              <img
                class="book__image"
                src="~@/assets/img/default-book.jpg"
                :alt="image.alt"
              >
              <div
                v-if="userId === currentUser.id || isAdmin"
                class="book__image-controls"
              >
                <button
                  class="book__button book__button--orange"
                  type="button"
                  @click.prevent="handleOpenEditBook({ id })"
                >
                  <img
                    class="book__button-icon"
                    src="~@/assets/img/edit.png"
                    alt="edit"
                  >
                </button>
                <button
                  class="book__button book__button--red"
                  type="button"
                  @click.prevent="handleOpenDeleteBook({ id, name })"
                >
                  <img
                    class="book__button-icon"
                    src="~@/assets/img/delete.png"
                    alt="delete"
                  >
                </button>
              </div>
            </div>
            <h5 class="book__title">{{ name }}</h5>
            <p class="book__author">{{ author }}</p>
            <div class="book__tags">
              <div
                v-for="tag in tags.map(tagId => TAGS[tagId])"
                :key="tag.label"
                :class="[
                  tag.additionalClass,
                  'book__tag',
                ]"
              >
                {{ tag.label }}
              </div>
            </div>
            
            <div class="book__control">
              <template v-if="isAuth">
                <b-t-button
                  v-if="userId !== currentUser.id && !booked && !taken"
                  additionalClass="fill"
                  text="Забронировать :)"
                  @click="handleBooking(id)"
                />
    
                <b-t-button
                  v-else-if="userId !== currentUser.id && booked && !taken && currentUser.booking !== null &&
                  currentUser.booking.includes(id)"
                  additionalClass="fill"
                  text="Забрать"
                  @click="handleTaken(id)"
                />
    
                <b-t-button
                  v-else-if="booked && !taken"
                  additionalClass="fill"
                  disabled
                  text="Забранированно"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.booktrade {
  background: var(--white);
  max-width: var(--defaultWidth);
  width: 100%;
  margin: 5.5rem auto 1rem;
  border-radius: var(--roundRadius);
  
  h1 {
    font-size: 64px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 32px;
    margin: 0 auto;
    text-align: center;
  }
  
  h3 {
    font-size: 24px;
    margin: 0 auto;
  }
  
  section {
    margin: 2rem auto;
  }
}

.booktrade__wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  margin: 2rem auto;
}

.book__inner {
}

.book__banner {
  position: relative;
  background-image: url('~@/assets/img/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  max-width: var(--defaultWidth);
  width: 100%;
  height: 300px;
}

.book__banner-info {
  position: absolute;
  top: 50px;
  right: 100px;
}

.book__banner-image {
  max-width: 100%;
}

.book {
  max-width: calc(var(--defaultWidth) / 5);
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.book__image {
  max-width: 100%;
}

.book__image-wrapper {
  position: relative;
}

.book__image-controls {
  position: absolute;
  top: 0;
  right: 0;
}

.book__button {
  outline: none;
  border: none;
  cursor: pointer;
  
  transition: opacity 0.2s ease-in-out;
  will-change: opacity;
  
  &--orange {
    background-color: var(--linkText);
  }
  
  &--red {
    background-color: red;
  }
  
  &:hover,
  &:focus-within {
    opacity: 0.7;
  }
}

.book__button-icon {
  max-width: 16px;
  width: 100%;
}

.book__title {
  margin: 0 auto;
  font-size: 1rem;
  flex: 1 0 auto;
}

.book__author {
  margin: 0.5rem 0;
  font-size: 0.75rem;
}

.book__tags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  min-height: 30px;
}

.book__tag {
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  color: var(--white);
  
  &--green {
    background-color: forestgreen;
  }
  
  &--blue {
    background-color: dodgerblue;
  }
}

.book__control {
  min-height: 65px;
}
</style>
