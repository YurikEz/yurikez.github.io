// https://vuex.vuejs.org/en/actions.html
import { http } from '@/plugins/http';
import { getData } from '@/utils/get';

export default {
  checkingAuth({ commit }, payload) {
    return http
      .post('/auth', payload)
      .then(getData)
      .then(({ data }) => {
        commit('SET_AUTH', true);
        commit('SET_CURRENT_USER', data);
      })
      .catch(() => {
        commit('SET_AUTH', false);
        commit('SET_CURRENT_USER', {});
      });
  },
  getUsers({ commit }) {
    return http
      .get('/users')
      .then(getData)
      .then(data => commit('SET_USERS', data));
  },
  createUser({ commit }, payload) {
    return http
      .post('/users', payload)
      .then(getData)
      .then(data => commit('SET_USERS', data));
  },
  editUser({ commit }, payload) {
    return http
      .put('/users', payload)
      .then(getData)
      .then(data => commit('UPDATE_USER', ...data));
  },
  deleteUser({ commit }, payload) {
    return http
      .post('/delete-user', payload)
      .then(getData)
      .then(data => commit('DELETE_USER', ...data));
  },

  getPosts({ commit }) {
    return http
      .get('/posts')
      .then(getData)
      .then(data => commit('SET_POSTS', data));
  },
  createPost({ commit }, payload) {
    return http
      .post('/posts', payload)
      .then(getData)
      .then(data => commit('SET_POSTS', data));
  },
  editPost({ commit }, payload) {
    return http
      .put('/posts', payload)
      .then(getData)
      .then(data => commit('UPDATE_POST', ...data));
  },
  deletePost({ commit }, payload) {
    return http
      .post('/delete-post', payload)
      .then(getData)
      .then(data => commit('DELETE_POST', ...data));
  },
};
