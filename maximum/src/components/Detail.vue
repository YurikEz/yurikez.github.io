<template>
  <div id="detail">
    <template v-for="(item, index) in schedule">
      <h2 v-if="item.id === activeLesson" :key="index">Занятие на тему: {{ item.title }}</h2>
    </template>
    <div class="actions">
      <div class="button" @click="goTo('/test')">
        <span>Тесты</span>
      </div>
      <div class="button" @click="goTo('/static')">
        <span>Статистика</span>
      </div>
    </div>
    <div class="button" @click="goTo('/schedule')">
      <span>Вернуться назад</span>
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
      selectedCourse() {
        return this.$store.getters.getSelectedCourse
      },
      schedule() {
        return this.$store.getters.getSchedule
      },
      activeLesson() {
        return this.$store.getters.getActiveLesson
      }
    },
    watch: {},
    created() {
      if (this.selectedCourse === 'none') {
        this.$store.dispatch("ActiveUrl", '/')
        this.$router.push('/')
      }
    },
    mounted() {},
    methods: {
      goTo(url) {
        this.$store.dispatch("ActiveUrl", url)
        this.$router.push(url)
      }
    }
  }
</script>