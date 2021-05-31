<script>
import BTButton from '../common/button/BTButton';

export default {
  name: 'booktrade',
  components: {
    BTButton,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleAddBook() {
    },
    handleTakeBook() {
    },
    handleEditBook() {
    },
    handleDeleteBook() {
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
          text="Оставить книгу"
          @click="handleAddBook"
        />
      </div>
    </section>
    <section>
      <h2>Нас можно забрать уже сегодня</h2>
      <div class="booktrade__wrapper">
        <div
          v-for="index in 15"
          :key="index"
          class="book__inner"
        >
          <div class="book">
            <div class="book__image-wrapper">
              <img
                class="book__image"
                src="~@/assets/img/default-book.jpg"
                alt="Cover book"
              >
              <div class="book__image-controls">
                <button
                  class="book__button book__button--orange"
                  type="button"
                  @click.prevent="handleEditBook"
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
                  @click.prevent="handleDeleteBook"
                >
                  <img
                    class="book__button-icon"
                    src="~@/assets/img/delete.png"
                    alt="delete"
                  >
                </button>
              </div>
            </div>
            <h5 class="book__title">Название книги</h5>
            <p class="book__author">Автор книги</p>
            <div class="book__tags">
              <div class="book__tag book__tag--green">Бесплатно</div>
              <div class="book__tag book__tag--blue">Обмен</div>
            </div>
            <b-t-button
              text="Забрать :)"
              @click="handleTakeBook"
            />
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
  
  .b-t-button {
    width: 100%;
    margin: 1rem auto;
    text-transform: uppercase;
    background-color: var(--linkText);
    color: var(--white);
    border-radius: 5px;
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
}

.book__author {
  margin: 0.5rem auto;
  font-size: 0.75rem;
}

.book__tags {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
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
</style>
