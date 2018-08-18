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
        <v-list-tile 
        avatar
        v-if="userIsAuthenticated"
        @click="onLogOut" 
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
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
        <v-toolbar-items 
        class="hidden-sm-and-down" 
        v-if="userIsAuthenticated"> 
          <v-btn flat @click="onLogOut"><v-icon left>exit_to_app</v-icon>Logout</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    
    <main>
      <transition name="bounce">
   <router-view/>
</transition>
      <!-- <router-view></router-view> -->
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer:false,
      
  }
},
computed:{
  menuItems () {
    let menuItems = [
       {title: 'SignUp', icon: 'lock', link: '/signup' },
       {title: 'SignIn', icon: 'lock_open', link: '/signin'}]
    if (this.userIsAuthenticated) {
      menuItems = [
      {title: 'Meetups', icon: 'supervisor_account', link: '/meetups'},
      {title: 'Create', icon: 'event', link: '/meetups/create'},
      {title: 'Profile', icon: 'face', link: '/users/profile'}]
    }
    return menuItems
 },
 userIsAuthenticated(){
  return this.$store.getters.user !== null && this.$store.getters.user !== undefined
 }
},
methods:{
  onLogOut(){
    this.$store.dispatch('logout')
  }
}

}

</script>
