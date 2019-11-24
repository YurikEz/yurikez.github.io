<template>
  <div id="static">
    <template v-for="(item, index) in schedule">
      <h2 v-if="item.id === activeLesson" :key="index">Статистика темы: {{ item.title }}</h2>
    </template>
    <div class="button" @click="goTo('/detail')">
      <span>Вернуться назад</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */

  export default {
    name: 'cStatic',
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