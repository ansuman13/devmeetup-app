import Vue from 'vue'
import Router from 'vue-router'
import createMeetup from '@/components/meetups/createMeetup.vue'
import meetups from '@/components/meetups/meetups.vue'
import profile from '@/components/users/profile.vue'
import signin from '@/components/users/signin.vue'
import signup from '@/components/users/signup.vue'
import home from '@/components/Home.vue'
import meetup from '@/components/meetups/meetup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/meetups',
      name: 'meetups',
      component: meetups
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/meetups/create',
      name: 'createMeetup',
      component: createMeetup
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      props: true,
      component: meetup
    },
    {
      path: '/users/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    }
  ]
})
