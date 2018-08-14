<template>
 <v-alert
      v-model="alert"
      dismissible
      type="error"
      @input="onClose"
      transition="scale-transition"
    >
      This is a success alert that is closable.
 </v-alert>
</template>

<script>
	export default{
		methods:{
			onClose(){
				this.$emit('dismissed')
			}
		}
	}
</script>