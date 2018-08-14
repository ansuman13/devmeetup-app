<template>
	<v-container>
	  <v-layout row wrap>
	    <v-flex xs12 sm6 offset-sm3>
	      <v-card-text>
	      	<v-container>
	         <form @submit.prevent='onSignIn'>
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

	        	<v-layout row >
	        	  <v-flex xs12>
	        	  	<v-btn color="success" type="submit">Sign in</v-btn>  
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
				password: ''
		}
	},
	computed:{
		user () {
			return this.$store.getters.user
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
		onSignIn() {
			this.$store.dispatch('signUserIn', {email:this.email, password:this.password})
			}
	}

}
</script>