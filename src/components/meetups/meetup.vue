<template>
	<v-container>
	  <v-layout row wrap>
	    <v-flex xs12>
	      <v-card>
	      	<v-card-title primary-title>
	          <h1>{{ meetup.title }}</h1>
	        </v-card-title>
	        <v-card-media
	          height="130"
	          :src="meetup.imageUrl"
	        >	
	        </v-card-media>
	        
	        <v-card-text>
	        	<div class="blue--text">{{ meetup.date | date }}-{{meetup.location}}</div>
	          <div>Loved it, hated it, loved it, hated it hunt anything that moves hate dog, for attack feet, and stretch. Eat the fat cats food sit in window and stare oooh, a bird, yum. Making sure that fluff gets into the owner's eyes hiss at vacuum cleaner lick left leg for ninety minutes, still dirty for meowing chowing and wowing eat half my food and ask for more my left donut is missing, as is my right for i just saw other cats inside the house and nobody ask me before using my litter box. Claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? need to chase tail see owner, run in terror or what a cat-ass-trophy! and cats are fats i like to pets them they like to meow back leave dead animals as gifts. Lick the curtain just to be annoying have secret plans. The fat cat sat on the mat bat away with paws and sometimes switches in french and say "miaou" just because well why not. Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life stare at guinea pigs yet asdflkjaertvlkjasntvkjn (sits on keyboard).
	          </div>
	        </v-card-text>
	        <v-card-actions>
	        	<v-spacer></v-spacer>
	          <v-btn color="success">Register</v-btn>
	        </v-card-actions>
	      </v-card>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
	export default{
		props: ['id'],
		computed :{
			meetup() {
				return this.$store.getters.loadedMeetup(this.id)
			}
		}
	}
</script>