<template>
  <div id="footer">
    <div class="footer-wrapper">
      <div class="footer-description">
        <div class="footer-description__title">
          <span>Бизнес маркет</span>
        </div>
        <div class="footer-description__text">
          <span>Покупайте бизнес сервисы онлайн, оплатив с мобильного счета вашей организации</span>
        </div>
      </div>
      <div class="footer-navigation">
        <div class="footer-mobile-navigation-wrapper">
          <div :class="[item.visible ? 'open' : '', 'footer-navigation__item']" v-for="(item, navIndex) in navigation" :key="navIndex" @click="pickedMenu === item.id ? pickMenu(item.id) : pickMenu(item.id)">
            <div class="footer-navigation__title">
              <span>{{ item.name }}</span>
              <div class="footer-navigation__icon">
                <img src="../assets/img/chevron.png" alt="dropdown icon">
              </div>
            </div>
            <transition-group name="slide-fade" tag="div">
              <div v-show="item.visible" class="footer-navigation__link" v-for="(links, linksIndex) in item.items" :key="links.id" :data-index="linksIndex">
                <a :href="'#'+ links.name">{{ links.name }}</a>
              </div>
            </transition-group>
          </div>
        </div>

        <div class="footer-navigation-wrapper">
          <div class="footer-navigation__item" v-for="(item, navIndex) in navigation" :key="navIndex">
            <div class="footer-navigation__title">
              <span>{{ item.name }}</span>
            </div>
            <div class="footer-navigation__link" v-for="(links, linksIndex) in item.items" :key="linksIndex">
              <a :href="'#'+ links.name">{{ links.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <span>© 2019 ПАО «МТС». Все права защищены.</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console, no-unused-vars */

  export default {
    name: 'cFooter',
    components: {},
    data() {
      return {
        showDropDown: false,
        pickedMenu: 0,
        navigation: [{
          id: 0,
          visible: false,
          name: 'Поддержка',
          items: [{
            id: 0,
            name: 'Обратная связь'
          }, {
            id: 1,
            name: 'Контакты'
          }, {
            id: 2,
            name: 'Политика обработки cookie'
          }, {
            id: 3,
            name: 'Перейти на сайт mts.ru'
          }]
        }, {
          id: 1,
          visible: false,
          name: 'Реклама и продвижение',
          items: [{
            id: 0,
            name: 'МТС коммуникатор'
          }, {
            id: 1,
            name: 'Цифровой ассистент'
          }, {
            id: 2,
            name: 'Голосовой робот'
          }, {
            id: 3,
            name: 'Push for site'
          }, {
            id: 4,
            name: 'Анализ геоданных'
          }, {
            id: 5,
            name: 'TVBit'
          }]
        }, {
          id: 2,
          visible: false,
          name: 'Автоматизация процессов',
          items: [{
            id: 0,
            name: 'Проверка контрагентов'
          }, {
            id: 1,
            name: 'Конструктор документов'
          }, {
            id: 2,
            name: 'CRM Простой бизнес'
          }, {
            id: 3,
            name: 'Анализ геоданных'
          }, {
            id: 4,
            name: 'Видеонаблюдение (Larga)'
          }, {
            id: 5,
            name: 'Мобильные сотрудники'
          }, {
            id: 6,
            name: 'Virtual POS'
          }]
        }, {
          id: 3,
          visible: false,
          name: 'IT и безопасность',
          items: [{
            id: 0,
            name: 'Антивирус Касперского'
          }, {
            id: 1,
            name: 'Антивирус eset'
          }, {
            id: 2,
            name: 'Aнтивирус doctorweb'
          }, {
            id: 3,
            name: 'MDM'
          }, {
            id: 4,
            name: 'Видеонаблюдение'
          }, {
            id: 5,
            name: 'Виртуальный сервер'
          }]
        }, {
          id: 4,
          visible: false,
          name: 'Работа с клиентами',
          items: [{
            id: 0,
            name: 'Голосовой робот'
          }, {
            id: 1,
            name: 'Цифровой ассистент'
          }, {
            id: 2,
            name: 'CRM простой бизнес'
          }, {
            id: 3,
            name: 'МТС коммуникатор'
          }, {
            id: 4,
            name: 'Видеонаблюдение'
          }, {
            id: 5,
            name: 'Виртуальный сервер'
          }]
        }]
      }
    },
    props: {},
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      pickMenu(index) {

        if (this.pickedMenu != index) {
          this.pickedMenu = index
        } else {
          this.pickedMenu = index
        }

        this.navigation[this.pickedMenu].visible = !this.navigation[this.pickedMenu].visible
      }
    }
  }
</script>