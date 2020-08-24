import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '../filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'



import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)




firebase.initializeApp({
  apiKey: "AIzaSyAcbGxFK-PFm5ngfrgXdqGbodSX3ii-2n4",
  authDomain: "vue-expenses-c5dd6.firebaseapp.com",
  databaseURL: "https://vue-expenses-c5dd6.firebaseio.com",
  projectId: "vue-expenses-c5dd6",
  storageBucket: "vue-expenses-c5dd6.appspot.com",
  messagingSenderId: "966660800517",
  appId: "1:966660800517:web:4fc3424ece93f052fc5c6c",
  measurementId: "G-S99VKTSVK3"
})

let app 

firebase.auth().onAuthStateChanged(() =>{

  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


