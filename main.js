import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import dateFilter from '@/filters/date.filter'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date' , dateFilter)
Vue.component('Loader', Loader)


firebase.initializeApp({
  apiKey: "AIzaSyB8LK5EgLspLj-5RVh8302IeX5fFuA48ew",
  authDomain: "vue-tex.firebaseapp.com",
  databaseURL: "https://vue-tex.firebaseio.com",
  projectId: "vue-tex",
  storageBucket: "vue-tex.appspot.com",
  messagingSenderId: "341756527381",
  appId: "1:341756527381:web:bfff24ce7874c77de89f1c",
  measurementId: "G-LW6SNW95YT"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})