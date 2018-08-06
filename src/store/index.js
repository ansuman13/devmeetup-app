import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_960_720.jpg',
        title: 'NewYork Meetup',
        id: 'asjhdfkjhask1768',
        date: '2017-08-11'},
      { imageUrl: 'https://d3hne3c382ip58.cloudfront.net/resized/750x420/kathmandu-valley-hiking-tour-2-269861_1528275118.JPG',
        title: 'Kathmandu Meetup',
        id: 'asjhdfhask1768',
        date: '2017-08-12'},
      {imageUrl: 'https://cdn.pixabay.com/photo/2014/06/01/09/25/paris-359503_960_720.jpg',
        title: 'Paris Meetup',
        id: 'asjhdfkjhask1234',
        date: '2018-08-11'}
    ],
    users: {
      id: 'ashjouerq123',
      registeredMeetups: ['asjhdfkjhask1768']
    }
  },
  mutations: {},
  actions: {},
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
    }
  }
})
