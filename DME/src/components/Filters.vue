<template>
  <div id="filters">
    <div class="textfiled">
      <div class="textfiled__label">Поиск по ФИО</div>
      <div class="textfiled__input">
        <input
          type="text" 
          @keyup="existsProfile($event)"
          @keydown="preventCyr($event)"
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
        // Массив для хранения уникальных дат
        formationDate: []
      }
    },
    props: {},
    computed: {
      // Отображаем вычесляемые свойства
      profile() {
        return this.$store.getters.getProfiles
      },
      readyProfiles() {
        return this.$store.getters.getReadyProfiles
      }
    },
    watch: {
      // Следим за изменениями вычисляемого свойства
      profile() {
        this.formationDate = this.formationDateForSelect(this.profile)
      }
    },
    created() {},
    mounted() {},
    methods: {
      // Метод, который валидирует поле ввода
      preventCyr(event) {
        // Убираем спец символы
        if (/[\\[\]^_]/.test(event.key)) event.preventDefault()
        // Разрешаем ввод только для латинских символов
        if (!/[A-z]/.test(event.key)) event.preventDefault()
      },
      // Метод, который ищет профили по входящей строке
      existsProfile(event) {
        // Входящая строка
        let inputStr = event.target.value.toUpperCase()

        if (inputStr != '') {
          // Ищем профили соответствующие входящей строке
          this.$store.dispatch("ReadyProfiles", this.profile.filter(item => {
            let name = item.name.first.toUpperCase() + ' ' + item.name.last.toUpperCase()
            return name.indexOf(inputStr) + 1
          }))
        } else {
          // Если строка пустая вывводим все профили
          this.$store.dispatch("ReadyProfiles", this.profile)
        }
      },
      // Метод, который обрабатывает выбранную строку в фильтре
      changeYear(event) {
        // Входящий год
        let year = +event.target.value

        if (event.target.value != 'none') {
          // Отображаем профили соответствующие указанному году
          this.$store.dispatch("ReadyProfiles", this.profile.filter(item => {
            return this.formatDate(item.dob.date) === year
          }))
        } else {
          // Если год не указан вывводим все профили
          this.$store.dispatch("ReadyProfiles", this.profile)
        }
      },
      // Функция, которая возвращает массив уникальных дат для фильтра
      formationDateForSelect(profile) {
        let arrDate = [],
            arrFormationDate = []
        // Собираем список дат
        profile.forEach(item => {
          arrDate.push(this.formatDate(item.dob.date))
        })
        // Фильтруем только уникальные
        arrFormationDate = arrDate.filter((item, pos) => {
          return arrDate.indexOf(item) === pos
        })
        // Сортируем по возрастанию, возвращаем результат
        return arrFormationDate.sort((a, b) => {
          return a - b
        })
      },
      // Функция, которая возвращает только год из полученной даты
      formatDate(sourceDate) {
        let date = new Date(sourceDate),
            year = date.getFullYear()

        return year
      }
    }
  }
</script>