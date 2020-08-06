<template>
	<div class="SelectFunction">
		<select-title title="请选择功能按钮启动："></select-title>
		<div class="function">
			<van-row type="flex" justify="space-around">
			<van-col span="6">
				<van-button type="info" block>清水</van-button>
			</van-col>
			<van-col span="6">
				<van-button  plain type="info" block>泡沫</van-button>
			</van-col>
			<van-col span="6">
				<van-button type="danger" block>结算</van-button>
			</van-col>
		</van-row>
		</div>
		
		
	</div>
</template>

<script>
import SelectTitle from '@/components/SelectTitle'
export default {
	name: 'SelectFunction',
	data () {
		return {
			
		};
	},
	components: { SelectTitle },
	methods: {}
}
</script>

<style scoped>
.function{
	padding-top: 80px;
}
</style>