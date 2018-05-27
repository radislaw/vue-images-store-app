import api from '../../api/imgur'
import { router } from '../../main'

export default {
  state:     {
    images: [],
  },
  getters:   {
    allImages: state => state.images,
  },
  mutations: {
    setImages(state, images) {
      state.images = images
    }
  },
  actions:   {
    async fetchImages({rootState, commit}) {
      const {token} = rootState.auth;
      const response = await api.fetchImages(token);
      commit('setImages', response.data.data)
    },
    async uploadImages({rootState}, images) {
      const {token} = rootState.auth;
      await api.uploadImages( images, token);
      router.push('/');
    },
  }
}