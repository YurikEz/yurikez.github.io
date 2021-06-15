// https://vuex.vuejs.org/en/actions.html
import { getData } from '@/utils/get';
import { http } from '@/plugins/http';

import * as TYPES from './mutations-types';

// eslint-disable-next-line no-empty-pattern
export const login = ({}, payload) => {
  return http
    .post('/auth', payload)
    .then(getData)
    .then(({ data }) => data)
    .catch(e => {
      throw Error(e);
    });
};

export const getCurrentUser = ({ dispatch }, payload) => {
  return http
    .get('/currentUser', { params: { id: payload } })
    .then(getData)
    .then(data => dispatch('setCurrentUser', data[0]))
    .catch(e => {
      throw Error(e);
    });
};
export const getBooks = ({ dispatch }) => {
  return http
    .get('/books')
    .then(getData)
    .then(data => dispatch('setBooks', data))
    .catch(e => {
      throw Error(e);
    });
};
// eslint-disable-next-line no-empty-pattern
export const addBook = ({}, payload) => {
  return http.post('/books', payload);
};
// eslint-disable-next-line no-empty-pattern
export const booking = ({}, payload) => {
  return http.post('/booking', payload);
};
// eslint-disable-next-line no-empty-pattern
export const editBook = ({}, payload) => {
  return http.put('/books', payload);
};
// eslint-disable-next-line no-empty-pattern
export const deleteBook = ({}, payload) => {
  return http.post('/delete-book', payload);
};
// eslint-disable-next-line no-empty-pattern
export const register = ({}, payload) => {
  return http
    .post('/users', payload)
    .then(getData)
    .then(data => console.log(data))
    .catch(e => {
      throw Error(e);
    });
};
// eslint-disable-next-line no-empty-pattern,no-unused-vars
export const forgetPassword = ({}, payload) => {};

export const setIsAuth = ({ commit }, data) => commit(TYPES.SET_IS_AUTH, data);
export const setCurrentUser = ({ commit }, data) => commit(TYPES.SET_CURRENT_USER, data);
export const logout = ({ commit }) => commit(TYPES.LOGOUT);
export const setBooks = ({ commit }, data) => commit(TYPES.SET_BOOKS, data);
