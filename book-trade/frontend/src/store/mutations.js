// https://vuex.vuejs.org/en/mutations.html
import * as TYPES from './mutations-types';

export default {
  [TYPES.SET_IS_AUTH](state, data) {
    state.isAuth = data;
  },
  [TYPES.SET_CURRENT_USER](state, data) {
    state.currentUser = data;
  },
  [TYPES.LOGOUT](state) {
    state.currentUser = {};
    state.isAuth = false;
  },
  [TYPES.SET_BOOKS](state, data) {
    state.books = data;
  },
};
