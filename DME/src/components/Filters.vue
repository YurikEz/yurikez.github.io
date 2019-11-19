<template>
  <div id="filters">
    <div class="textfiled">
      <div class="textfiled__label">Поиск по ФИО</div>
      <div class="textfiled__input">
        <input
          type="text" 
          @keyup="existsProfile($event)"
          placeholder="Введите ФИО"
        >
      </div>
    </div>
    <div class="textfiled">
      <div class="textfiled__label">Фильтр по году рождения</div>
      <div class="textfiled__input">
        <select @change="changeYear($event)">
          <option value="none">Выберите год рождения</option>
          <option :value="item" v-for="(item, index) in formationDate" :key="index">{{ item }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */

  export default {
    name: 'cFilters',
    components: {},
    data() {
      return {
        formationDate: []
      }
    },
    props: {},
    computed: {
      profile() {
        return this.$store.getters.getProfiles
      },
      readyProfiles() {
        return this.$store.getters.getReadyProfiles
      }
    },
    watch: {
      profile() {
        this.formationDate = this.formationDateForSelect(this.profile)
      }
    },
    created() {},
    mounted() {},
    methods: {
      existsProfile(event) {
        let inputStr = event.target.value.toUpperCase()

        if (inputStr != '') {
          this.$store.dispatch("ReadyProfiles", this.profile.filter(item => {
            let name = item.name.first.toUpperCase() + ' ' + item.name.last.toUpperCase()
            return name.indexOf(inputStr) + 1
          }))
        } else {
          this.$store.dispatch("ReadyProfiles", this.profile)
        }
      },
      changeYear(event) {
        if (event.target.value != 'none') {
          let year = +event.target.value

          this.$store.dispatch("ReadyProfiles", this.profile.filter(item => {
            return this.formatDate(item.dob.date) === year
          }))
        } else {
          this.$store.dispatch("ReadyProfiles", this.profile)
        }
      },
      formationDateForSelect(profile) {
        let arrDate = [],
            arrFormationDate = []

        profile.forEach(item => {
          arrDate.push(this.formatDate(item.dob.date))
        })

        arrFormationDate = arrDate.filter((item, pos) => {
          return arrDate.indexOf(item) === pos
        })

        return arrFormationDate.sort((a, b) => {
          return a - b
        })
      },
      formatDate(sourceDate) {
        let date = new Date(sourceDate),
            year = date.getFullYear()

        return year
      }
    }
  }
</script>