import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import { store } from './store'
import DateFilter from './filters/date'
import alertComp from './components/shared/alert.vue'

import {
  Vuetify,
  VProgressCircular,
  VAlert,
  VApp,
  VDatePicker,
  VTextField,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCarousel,
  VTimePicker,
  VTextArea,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAlert,
    VTextArea,
    VProgressCircular,
    VTextField,
    VTimePicker,
    VDatePicker,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VCarousel,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', alertComp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
    apiKey: "AIzaSyDdXo5zLXf6uueFXXm3RImkPZqx8SPLPA0",
    authDomain: "devmeetup-app-df4e6.firebaseapp.com",
    databaseURL: "https://devmeetup-app-df4e6.firebaseio.com",
    projectId: "devmeetup-app-df4e6",
    storageBucket: "devmeetup-app-df4e6.appspot.com",
    })
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.dispatch('autoSignIn',user)
      }
    })
    this.$store.dispatch('loadedMeetups')

  } 
})
