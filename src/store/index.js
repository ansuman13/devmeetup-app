import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/South_Manhattan_at_New_York_City%2C_2006.jpg/1280px-South_Manhattan_at_New_York_City%2C_2006.jpg',
        title: 'NewYork Meetup',
        id: 'asjhdfkjhask1768',
        date: new Date(),
        location: 'New York'},
      { imageUrl: 'https://d3hne3c382ip58.cloudfront.net/resized/750x420/kathmandu-valley-hiking-tour-2-269861_1528275118.JPG',
        title: 'Kathmandu Meetup',
        id: 'asjhdfhask1768',
        date: new Date(),
        location: 'Kathmandu'},
      {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg/800px-Paris_-_Eiffelturm_und_Marsfeld2.jpg',
        title: 'Paris Meetup',
        id: 'asjhdfkjhask1234',
        date: new Date,
        location: 'Paris'}
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
    setLoading (state, payload) {
      state.loading = payload 
    },
    setError(state, payload){
      state.authError = passwordyload
    },
    clearError(state){
      state.authError = null
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'ksadfkjhwer123'
      }
      commit('createMeetup', meetup)
    },
    
    signUserUp ({commit}, payload){
       commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          commit('setLoading', true)
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
