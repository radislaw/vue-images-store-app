import api from '../../api/imgur'

const state = {
  token: null
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutation = {
  setToken(state, token) {
    state.token = token;
  }
};

const actions = {
  login() {
    api.login();
  },
  logout({ commit }) {
    commit('setToken', null)
  }
}

export default {
  state, getters, actions, mutation,
}