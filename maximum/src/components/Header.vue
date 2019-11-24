<template>
  <div id="header">
    <div class="header-wrapper">
      <div class="header__logo">
        <span>Мой самый лучший логотип</span>
      </div>
      <div class="textfiled">
        <div class="textfiled__label">Курс выбран:</div>
        <div class="textfiled__input">
          <select @change="changeCourse">
            <option value="none">Выберите курс</option>
            <option :value="item.id" v-for="(item, index) in course" :key="index">{{ item.name }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */

  export default {
    name: 'cHeader',
    components: {},
    data() {
      return {}
    },
    props: {},
    computed: {
      course() {
        return this.$store.getters.getCourse
      },
      selectedCourse() {
        return this.$store.getters.getSelectedCourse
      },
      activeUrl() {
        return this.$store.getters.getActiveUrl
      }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
      changeCourse(event) {
        if (event.target.value === 'none') {
          this.$store.dispatch("SelectedCourse", event.target.value)
          this.$store.dispatch("ActiveUrl", '/')
          this.$router.push('/')
        } else {
          if (this.activeUrl === '/schedule') {
            this.$store.dispatch("SelectedCourse", event.target.value)
          } else {
            this.$store.dispatch("SelectedCourse", event.target.value)
            this.$store.dispatch("ActiveUrl", '/schedule')
            this.$router.push('/schedule')
          }
        }
      }
    }
  }
</script>