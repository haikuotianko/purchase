<template>
	<div class="Coupon">
		<div class="left">11</div>
		<div class="right">22</div>
	</div>
</template>

<script>
export default {
	name: 'Coupon',
	data () {
		return {
			
		};
	},
	components: {},
	methods: {}
}
</script>

<style scoped>
.Coupon{
	display: flex;
	padding: 15px;
}
.left{
	flex: 1;
	/* background-color: rosybrown; */
background: #58a;
  background: linear-gradient(-45deg,transparent 8px,#58a 0) bottom right,
              linear-gradient(45deg,#58a 8px,#58a 0) bottom left,
              linear-gradient(135deg,#58a 8px,#58a 0) top left,
              linear-gradient(-135deg,transparent 8px,#58a 0) top right;
  background-size: 51% 50%;
  background-repeat: no-repeat;
	border-radius: 5px;
}
.right{
	width: 100px;
	height: 60px;
	background-color: seagreen;
}
</style>