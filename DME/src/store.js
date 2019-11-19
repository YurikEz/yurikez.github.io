import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profiles: [],
    readyProfiles: [],
    detailProfile: {}
  },
  getters: {
    getProfiles: store => store.profiles,
    getReadyProfiles: store => store.readyProfiles,
    getDetailProfile: store => store.detailProfile
  },
  mutations: {
    Profiles(state, payload) {
      state.profiles = payload
    },
    ReadyProfiles(state, payload) {
      state.readyProfiles = payload
    },
    DetailProfile(state, payload) {
      state.detailProfile = payload
    }
  },
  actions: {
    Profiles(context, payload) {
      context.commit('Profiles', payload)
    },
    ReadyProfiles(context, payload) {
      context.commit('ReadyProfiles', payload)
    },
    DetailProfile(context, payload) {
      context.commit('DetailProfile', payload)
    }
  }
})
