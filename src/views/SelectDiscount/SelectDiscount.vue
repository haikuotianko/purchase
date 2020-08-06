<template>
	<div class="SelectDiscount">
		<select-title title="请选择套餐:">
			<div class="logon">
				<van-icon class="lcon" name="manager" />
				点击注册会员
			</div>
		</select-title>
		<div class="coupon">
			<coupon></coupon>
		</div>
		

	</div>
</template>

<script>
import SelectTitle from '@/components/SelectTitle'
import Coupon from '@/components/Coupon'
export default {
	name: 'SelectDiscount',
	data () {
		return {
			
		};
	},
	components: { SelectTitle, Coupon },
	methods: {}
}
</script>

<style scoped>
.logon{
	color: #378fcf;
	font-size: 14px;
}
.logon .lcon{
	vertical-align: middle;
}
.coupon{
	padding-top: 80px;
}
</style>