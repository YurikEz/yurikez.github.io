<template>
  <div id="schedule">
    <h2>Расписание</h2>
    <table>
      <thead>
        <tr>
          <th>Начало занятий</th>
          <th>Тема</th>
          <th>Курс</th>
          <th>Страница занятия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in pickSchedule" :key="index">
          <td>{{ formatedDate(item.startedAt) }}</td>
          <td>{{ item.title }}</td>
          <td>{{ existsCourse(item.courseId) }}</td>
          <td @click="pickLesson(item.id, '/detail')">
            <div class="button">
              <span>Перейти</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination" v-if="pagination.length > 1">
      <div :class="[item.id === selectedPage ? 'active' : '', 'button']" v-for="(item, index) in pagination" :key="index" @click="selectPage(item.id)">
        <span>Страница {{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */

  export default {
    name: 'cSchedule',
    components: {},
    data() {
      return {
        pickSchedule: [],
        pagination: [],
        selectedPage: 0,
        stepPagination: 5,
        startArr: 0,
        endArr: 0
      }
    },
    props: {},
    computed: {
      course() {
        return this.$store.getters.getCourse
      },
      schedule() {
        return this.$store.getters.getSchedule
      },
      selectedCourse() {
        return this.$store.getters.getSelectedCourse
      },
      selectedSchedule() {
        return this.$store.getters.getSelectedSchedule
      }
    },
    watch: {
      selectedCourse() {
        this.pagination = []

        this.$store.dispatch("SelectedSchedule", this.schedule.filter(item  => {
          return item.courseId === this.selectedCourse
        }))

        for (let i = 0; i <= Math.ceil(this.selectedSchedule.length / this.stepPagination) - 1; i++) {
          this.pagination.push({
            id: i,
            name: i + 1
          })
        }
        this.selectPage(this.selectedPage)
      }
    },
    created() {
      if (this.selectedCourse === 'none') {
        this.$store.dispatch("ActiveUrl", '/')
        this.$router.push('/')
      }

      this.$store.dispatch("SelectedSchedule", this.schedule.filter(item  => {
        return item.courseId === this.selectedCourse
      }))

      for (let i = 0; i <= Math.ceil(this.selectedSchedule.length / this.stepPagination) - 1; i++) {
        this.pagination.push({
          id: i,
          name: i + 1
        })
      }

      this.selectPage(this.selectedPage)
    },
    mounted() {},
    methods: {
      pickLesson(idLesson, url) {
        this.$store.dispatch("ActiveLesson", idLesson)
        this.$store.dispatch("ActiveUrl", url)
        this.$router.push(url)
      },
      selectPage(page) {
        this.selectedPage = page

        let start = 0,
            end = this.stepPagination - 1

        this.pickSchedule = this.selectedSchedule.filter((item, index) => {
          if (page === 0) {
            if (index >= start && index <= end) {
              return item
            }
          } else {
            if (index >= (start + this.stepPagination * page) && index <= (end + this.stepPagination * page)) {
              return item
            }
          }
        })
      },
      formatedDate(sourceDate) {
        let date = new Date(+sourceDate),
            dd = date.getDate(),
            mm = date.getMonth() + 1,
            yy = date.getFullYear()

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '.' + mm + '.' + yy;
      },
      existsCourse(idCourse) {
        let courseName = ''

        this.course.forEach(item => {
          if (item.id === idCourse) courseName = item.name
        })

        return courseName
      }
    }
  }
</script>