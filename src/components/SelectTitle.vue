<template>
	<div class="SelectTitle">
		<div class="left">{{title}}</div>
		<div class="middle">{{select}}</div>
		<div class="right">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SelectTitle',
	props:{
		title: String,
		select: String
	},
	data () {
		return {
			
		};
	},
	components: {},
	methods: {}
}
</script>

<style scoped>
.SelectTitle{
	position: fixed;
	top: 5px;
	left: 15px;
	right: 15px;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 5px 5px 15px 1px #333;
	display: flex;
	justify-content: space-between;
}
.left{
	color: #333;
	font-size: 14px;
}
</style>