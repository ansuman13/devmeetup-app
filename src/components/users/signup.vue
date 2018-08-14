<template>
	<v-container>
		<v-layout row wrap v-if="error">
		  <v-flex xs12 sm6 offset-sm3>
		    <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
		  </v-flex>
		</v-layout>
	  <v-layout row wrap>
	    <v-flex xs12 sm6 offset-sm3>
	      <v-card-text>
	      	<v-container>
	         <form @submit.prevent='onSignUp'>
	        	<v-layout row wrap>
	        	  <v-flex xs12>
	        	    <v-text-field
	        	        label="Mail"
	        	        v-model="email"
	        	        type="email"
	        	        name="email"
	        	        required
	        	      ></v-text-field>
	        	  </v-flex>
	        	</v-layout>
	        	
	        	<v-layout row wrap>
	        	  <v-flex xs12>
	        	    <v-text-field
	        	        label="password"
	        	        v-model="password"
	        	        type="password"
	        	      	name="password"
	        	      	required
	        	      ></v-text-field>
	        	  </v-flex>
	        	</v-layout>

	        	<v-layout row wrap>
	        	  <v-flex xs12>
	        	    <v-text-field
	        	        label="Confirm Password"
	        	        v-model="confirmPassword"
	        	        type="password"
	        	        name='confirmPassword'
	        	        :rules="[comparePassword]"
	        	      ></v-text-field>
	        	  </v-flex>
	        	</v-layout>

	        	<v-layout row >
	        	  <v-flex xs12>
	        	  	<v-btn color="success" type="submit">Sign UP</v-btn>  
	        	  </v-flex>
	        	</v-layout>
	    
	 </form>
	    </v-container>  
	      </v-card-text>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
	export default{
		data(){
			return{
			 	email: '',
			 	confirmPassword : '',
			 	password: ''
		}
	},
	computed:{
		comparePassword () {
			return this.password !== this.confirmPassword ? 'Passwords do not Match' : ''
		},
		user () {
			return this.$store.getters.user
		},
		error () {
			return this.$store.getters.error
		}
	},
	watch: {
		user (value){
			if (value !== null && value !== undefined){
				this.$router.push('/')
			  }
			}

		},
	methods:{
		onDismissed() {
			console.log('dismissed')
			this.$store.dispatch('clearError')
		},
		onSignUp() {
			this.$store.dispatch('signUserUp', {email:this.email, password:this.password})
			console.log('onSignUp')
			console.log({email:this.email, password: this.password})
		}
	}

}
</script>