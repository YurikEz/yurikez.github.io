<template>
  <div id="table">
    <table>
      <thead>
        <tr>
          <th class="picture">
            <div class="title-wrapper">
              <span>Фото</span>
            </div>
          </th>
          <th :class="[sorteredName != 0 ? 'active' : '', 'name']" @click="sortName()">
            <div class="title-wrapper">
              <span>ФИО</span>
              <span v-if="sorteredName != 0" :class="[sorteredName === 1 ? 'asc' : '', sorteredName === -1 ? 'desc' : '', 'order']"></span>
            </div>
          </th>
          <th :class="[sorteredDate != 0 ? 'active' : '', 'date']" @click="sortDate()">
            <div class="title-wrapper">
              <span>Дата рождения</span>
              <span v-if="sorteredDate != 0" :class="[sorteredDate === 1 ? 'asc' : '', sorteredDate === -1 ? 'desc' : '', 'order']"></span>
            </div>
          </th>
          <th class="link">
            <div class="title-wrapper">
              <span>Ссылка на профиль</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in readyProfiles" :key="index">
          <td><img :src="item.picture.thumbnail" alt="Изображения человека"></td>
          <td>
            <span>{{ item.name.first }}</span> <span>{{ item.name.last }}</span>
          </td>
          <td>
            <span>{{ formatDate(item.dob.date) }}</span>
          </td>
          <td>
            <div class="button" @click="openProfile(item.picture.large, item.name.first, item.name.last, item.phone, item.email)">
              <span>Посмотреть профиль</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Detail v-if="showDetail" @closeDetail="closeDetail($event)" />
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
  import Detail from './Detail'

  export default {
    name: 'cTable',
    components: {
      Detail
    },
    data() {
      return {
        // Отображение модального окна для конкретного профиля
        showDetail: false,
        // Переменные, которые определяют сортировку для столбцов: -1 по убыванию, 0 нет сортировки, 1 по возрастанию
        sorteredName: 0,
        sorteredDate: 0
      }
    },
    props: {},
    computed: {
      // Отображаем вычесляемые свойства
      readyProfiles() {
        return this.$store.getters.getReadyProfiles
      }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
      // Метод, который закрывает модальное окно с профилем
      closeDetail(event) {
        this.showDetail = event
      },
      // Метод, который открывает модальное окно с профилем
      openProfile(picture, firstName, lastName, phone, email) {
        this.$store.dispatch("DetailProfile", {picture: picture, name: firstName + ' ' + lastName, phone: phone, email: email})
        this.showDetail = true
      },
      // Метод, который сортирует столбец ФИО
      sortName() {
        // Если мы еще не сортировали, то сортируем и отображаем по возрастанию
        if (this.sorteredName === 0) {
          this.$store.dispatch("ReadyProfiles", this.readyProfiles.sort((a, b) => {
            return this.compare(a, b, 'name', 1)
          }))
          // Если отсортированно по убыванию, то переварачиваем массив
        } else if (this.sorteredName === -1) {
          this.$store.dispatch("ReadyProfiles", this.readyProfiles.reverse())
          this.sorteredName = 1
          // Если отсортированно по возрастанию, то переварачиваем массив
        } else if (this.sorteredName === 1) {
          this.$store.dispatch("ReadyProfiles", this.readyProfiles.reverse())
          this.sorteredName = -1
        }
      },
      //  Метод, который сортирует столбец Дата рождения
      sortDate() {
        // Если мы еще не сортировали, то сортируем и отображаем по возрастанию
        if (this.sorteredDate === 0) {
          this.$store.dispatch("ReadyProfiles", this.readyProfiles.sort((a, b) => {
            return this.compare(a, b, 'date', 1)
          }))
          // Если отсортированно по убыванию, то переварачиваем массив
        } else if (this.sorteredDate === -1) {
          this.$store.dispatch("ReadyProfiles", this.readyProfiles.reverse())
          this.sorteredDate = 1
          // Если отсортированно по возрастанию, то переварачиваем массив
        } else if (this.sorteredDate === 1) {
          this.$store.dispatch("ReadyProfiles", this.readyProfiles.reverse())
          this.sorteredDate = -1
        }
      },
      // Функция, которая возращает отсортированный массив
      compare(a, b, type, order) {
        let varibleA,
            varibleB
        // Исходя из типа, сортируем определенный столбец
        switch (type) {
          case 'name':
            // Приводим все к одному регистру
            varibleA = a.name.first.toUpperCase()
            varibleB = b.name.first.toUpperCase()
            // Указываем как сортировать в order и обнуляем другой столбец
            this.sorteredName = order
            this.sorteredDate = 0
            break
          case 'date':
            // Приводим все к одному регистру
            varibleA = a.dob.date.toUpperCase()
            varibleB = b.dob.date.toUpperCase()
            // Указываем как сортировать в order и обнуляем другой столбец
            this.sorteredName = 0
            this.sorteredDate = order
            break
        }

        let comparison = 0

        // Сравниваем переменные
        if (varibleA > varibleB) {
          comparison = 1
        } else if (varibleA < varibleB) {
          comparison = -1
        }
        
        return comparison
        
      },
      // Функция, которая возвращает отформатированную дату
      formatDate(sourceDate) {
        let date = new Date(sourceDate),
            day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear()

        if (day < 10) day = '0' + day
        if (month < 10) month = '0' + month

        return day + '.' + month + '.' + year
      }
    }
  }
</script>