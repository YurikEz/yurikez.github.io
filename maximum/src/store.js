import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    course: [],
    schedule: [],
    selectedCourse: 'none',
    selectedSchedule: [],
    activeLesson: null,
    activeUrl: '/'
  },
  getters: {
    getCourse: store => store.course,
    getSchedule: store => store.schedule,
    getSelectedCourse: store => store.selectedCourse,
    getSelectedSchedule: store => store.selectedSchedule,
    getActiveLesson: store => store.activeLesson,
    getActiveUrl: store => store.activeUrl
  },
  mutations: {
    Course(state, payload) {
      state.course = payload
    },
    Schedule(state, payload) {
      state.schedule = payload
    },
    SelectedCourse(state, payload) {
      state.selectedCourse = payload
    },
    SelectedSchedule(state, payload) {
      state.selectedSchedule = payload
    },
    ActiveLesson(state, payload) {
      state.activeLesson = payload
    },
    ActiveUrl(state, payload) {
      state.activeUrl = payload
    }
  },
  actions: {
    Course(context, payload) {
      context.commit('Course', payload)
    },
    Schedule(context, payload) {
      context.commit('Schedule', payload)
    },
    SelectedCourse(context, payload) {
      context.commit('SelectedCourse', payload)
    },
    SelectedSchedule(context, payload) {
      context.commit('SelectedSchedule', payload)
    },
    ActiveLesson(context, payload) {
      context.commit('ActiveLesson', payload)
    },
    ActiveUrl(context, payload) {
      context.commit('ActiveUrl', payload)
    }
  }
})
