<template>
	<v-container>
	  <v-layout row wrap>
	    <v-flex xs12 sm6 class="text-sm-right text-xs-center">
	      <v-btn color="success" to='/meetups' large>Explore Meetups</v-btn>
	    </v-flex>
	    <v-flex xs12 sm6 class="text-sm-left  text-xs-center">
	      <v-btn color="success" large to="/meetups/create">Create Meetup</v-btn>
	    </v-flex>
	  </v-layout >
	  <v-layout row wrap class="mt-3">
	    <v-flex xs12>
	       <v-carousel>
            <v-carousel-item
              v-for="item in meetups"
              :key="item.id"
              :src="item.imageUrl"
              @click.native="onMeetupClick(item.id)"
              style="cursor: pointer;"
            >
            	<div class="title">{{item.title}}</div>
            </v-carousel-item>
  </v-carousel>
	    </v-flex>
	  </v-layout>
	  <v-layout row wrap class="mt-2">
	    <v-flex xs12>
	      <p style="text-align: center;">Join Our Awesome Meetup</p>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
	export default{
		computed: {
			meetups () {
				return this.$store.getters.featuredMeetups
			}
		},
		methods:{
			onMeetupClick(id){
				this.$router.push('meetups/'+id);
			}
			
		}
	}

</script>

<style scoped>
 .title{
 	position:absolute;
 	bottom:50px;
 	right:350px;
 	background-color: rgba(0,0,0,0.5);
 	color:white;
 	font-size: 3em;
 }
</style>