import api from '../../api/imgur'
import qs from 'qs'

import { router } from '../../main'

const state = {
  token: localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  }
};

const actions = {
  login() {
    api.login();
  },
  logout({commit}) {
    commit('setToken', null);
    localStorage.removeItem('imgur_token')
  },
  finalizeLogin({commit}, hash) {
    const token = qs.parse(hash.replace('#', '')).access_token;
    commit('setToken', token);
    localStorage.setItem('imgur_token', token);
    router.push('/')
  }
};

export default {
  state, getters, mutations , actions,
}