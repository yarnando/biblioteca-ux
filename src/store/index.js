import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: false,
  message: {type: '', text: ''},
  userLogged: null,
  books: []
}

const getters = {
  loading: state => state.loading,
  message: state => state.message,
  userLogged: state => state.userLogged,
  books: state => state.books,
}

const mutations = { 
  loading(state, obj) {
      state.loading = obj;
  },
  message(state, obj) {
      state.message = obj;
  }, 
  userLogged(state, obj) {
    state.userLogged = obj;
  },              
  books(state, obj) {
    state.books = obj;
  },              
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
  })