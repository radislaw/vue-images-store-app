import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import AuthHandler from './components/AuthHandler'
import Gallery from './components/Gallery'
import UploadForm from './components/UploadForm'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/', component: Gallery },
    { path: '/upload', component: UploadForm },
  ]
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
