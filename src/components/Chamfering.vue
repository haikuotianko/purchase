<template>
	<div class="Chamfering">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Chamfering',
	props: {
		bgcolor: {
			type: String,
			default: '#fff'
		}
	},
	data () {
		return {
			
		};
	},
	components: {},
	methods: {
	computed: {
		cut(){
			return 
		}
	},
	}
}
</script>

<style scoped>
.Chamfering{
	background: #58a;
  background: linear-gradient(-45deg,transparent 8px,#58a 0) bottom right,
              linear-gradient(45deg,#58a 8px,#58a 0) bottom left,
              linear-gradient(135deg,#58a 8px,#58a 0) top left,
              linear-gradient(-135deg,transparent 8px,#58a 0) top right;
  background-size: 51% 50%;
  background-repeat: no-repeat;
}
</style>