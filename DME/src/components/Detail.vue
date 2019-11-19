<template>
  <div id="detail">
    <div class="detail-wrapper">
      <div class="detail-info">
        <div class="detail-avatar" @click="openPicture()">
          <a :href="detailProfile.picture" target="_blank">
            <img :src="detailProfile.picture" alt="avatar">
          </a>
        </div>
        <div class="detail-contact">
          <div class="detail-field">
            <span class="detail-field__label">ФИО: </span>
            <span>{{ detailProfile.name }}</span>
          </div>
          <div class="detail-field">
            <span class="detail-field__label">Телефон: </span>
            <span>{{ detailProfile.phone }}</span>
          </div>
          <div class="detail-field">
            <span class="detail-field__label">Email: </span>
            <span>{{ detailProfile.email }}</span>
          </div>
        </div>
      </div>
      <div class="detail-actions">
        <div class="button" @click="closeDetail()">
          <span>Закрыть профиль</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */

  export default {
    name: 'cDetail',
    components: {},
    data() {
      return {}
    },
    props: {},
    computed: {
      // Отображаем вычесляемые свойства
      detailProfile() {
        return this.$store.getters.getDetailProfile
      }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
      // Метод, который передает в родителя event, что бы закрыть модальное окно
      closeDetail() {
        this.$emit('closeDetail', false)
      }
    }
  }
</script>