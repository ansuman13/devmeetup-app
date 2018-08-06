<template>
	<v-container>
	  <v-layout row>
	    <v-flex xs12 offset-sm3> 
	      <h1 class="info--text">Create a New Meetup</h1>
	    </v-flex>
	  </v-layout>
	  <v-layout row wrap>
	    <v-flex xs12>
	    	<form>
	    		<v-layout row wrap>
	    		  <v-flex xs12 sm6 offset-sm3>
	    		    <v-text-field
	    		      name="title"
	    		      label="Title"
	    		      id="title"
	    		      required
	    		    ></v-text-field>
	    		    <v-text-field
	    		      name="location"
	    		      label="Location"
	    		      id="location"
	    		      required
	    		    ></v-text-field>
	    		    <v-text-field
	    		      name="imageUrl"
	    		      label="Image URL"
	    		      id="imageUrl"
	    		      required
	    		      outline
	    		    ></v-text-field>
	    		    <v-text-field
	    		      name="description"
	    		      label="Description"
	    		      id="description"
	    		      outline
	    		      textarea
	    		    ></v-text-field>
	    		  </v-flex>
	    		</v-layout>
	    	</form>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>