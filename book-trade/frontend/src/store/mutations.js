// https://vuex.vuejs.org/en/mutations.html
import * as TYPES from './mutations-types';

export default {
  [TYPES.SET_AUTH](state, data) {
    state.isAuth = data;
  },
  [TYPES.SET_CURRENT_USER](state, data) {
    state.currentUser = data;
  },
  [TYPES.SET_USERS](state, data) {
    state.users = [
      ...state.users,
      ...data,
    ];
  },
  [TYPES.UPDATE_USER](state, data) {
    state.users.forEach((item, index) => {
      if (item.id === data.id) {
        state.users[index] = data;
      }
    });
  },
  [TYPES.DELETE_USER](state, data) {
    state.users = state.users.filter(({ id }) => id !== data.id);
  },
  [TYPES.SET_POSTS](state, data) {
    state.posts = [
      ...state.posts,
      ...data,
    ];
  },
  [TYPES.UPDATE_POST](state, data) {
    state.posts.forEach((item, index) => {
      if (item.id === data.id) {
        state.posts[index] = data;
      }
    });
  },
  [TYPES.DELETE_POST](state, data) {
    state.posts = state.posts.filter(({ id }) => id !== data.id);
  },
};
