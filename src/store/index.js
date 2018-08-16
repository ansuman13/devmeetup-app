import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [   
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, value) {
      state.loading = value
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    }
  },
  actions: {
    loadedMeetups ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
      .then((data) => {
        commit('setLoading', false)
        const meetups = []
        const obj = data.val()
        for (let key in obj) {
          meetups.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date
          })
        }
        commit('setLoadedMeetups', meetups)
        commit('setLoading', false)
      })
      .catch( (error) => {
        commit('setLoading', false)
        console.log(error)
      })

    }, 

    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString()
      }
      firebase.database().ref('meetups').push(meetup)
      .then((data) => {
        const key = data.key
        commit('createMeetup', {
          ...meetup,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error.message)
        })
    },
  
  signUserIn ({commit}, payload){
    commit('setLoading', true)
    commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        } 
      )
      .catch(
        error => {
        commit('setLoading', false)
        commit('setError', error)
        
          console.log(error)
        })
    },
    clearError({commit}){
      commit('clearError')
    }
  
},
  
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups
      // sort((meetupA, meetupB) => {
        // return state.meetupA.date > state.meetupB.date
      // })
    },
    loadedMeetup (state) {
      return (meetupid) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupid
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    user (state) {
      return state.user
    },

    loading (state){
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
