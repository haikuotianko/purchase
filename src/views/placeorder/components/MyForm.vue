<template>
	<div class="MyForm">

    <!-- 按钮 -->
    <van-row type="flex" justify="space-around">
      <van-col span="10">
        <van-button type="primary" block @click="emitPrice">金额</van-button>
      </van-col>
      <van-col span="10">
        <van-button type="default" block @click="emitCapacity">容量</van-button>
      </van-col>
    </van-row>

	</div>
</template>

<script>

export default {
	props:{
		
	},
	name: 'MyForm',
	data () {
		return {
			
		};
	},
	components: {  },
	methods: {
		emitPrice(){
			this.$emit('emitPrice')
		},
		emitCapacity(){
			this.$emit('emitCapacity')
		}
	}
}
</script>

<style scoped>
.MyForm{
	margin-top: 20px;
}
</style>