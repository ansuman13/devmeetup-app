<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
     >
      <v-list dense>
        <v-list-tile 
        avatar 
        v-for="item in menuItems"
        :to= "item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Dev Meet Up</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" v-for="item in menuItems" :key= "item.title" > 
          <v-btn :to="item.link" flat><v-icon left>{{item.icon}}</v-icon> {{item.title}}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer:false,
      menuItems:[
      {title: 'Meetups', icon: 'supervisor_account', link: '/meetups'},
      {title: 'Create', icon: 'event', link: '/meetups/create'},
      {title: 'SignUp', icon: 'lock', link: '/signup' },
      {title: 'SignIn', icon: 'lock_open', link: '/signin'},
      {title: 'Profile', icon: 'face', link: '/users/profile'}
      ]
  }
}
}
</script>
