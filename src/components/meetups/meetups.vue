<template>
	<v-container>
	  <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2" >
	    <v-flex xs12 md6 >
	      <v-card class="elevation-20 info"  >
            <v-container fluid>
              <v-layout row >
                <v-flex xs5 sm4 md6>
                  <v-card-media
                    height="130px"
                    :src="meetup.imageUrl"
                  >
                 </v-card-media>
                </v-flex>
                <v-flex xs7 sm8 md9>
                	<v-card-title>
                		<div>
                		<h1 class="white--text">{{meetup.title}}</h1>
                		<div>{{meetup.date | date }}</div>
                	</div>
                	</v-card-title>
                  <v-card-actions>
                    <v-btn color="success" :to="'/meetups/' + meetup.id"><v-icon>arrow_forward</v-icon>View Meetup</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          	</v-card>
          </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
  export default{
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }

</script>