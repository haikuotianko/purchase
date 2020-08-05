<template>
	<div class='RotationImg'>
		<van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in TopSwipeImgUrlList" :key="index">
        <van-image width="100vw" height="200" :src="image">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
            加载中...
          </template>
        </van-image>
      </van-swipe-item>
    </van-swipe>
	</div>
</template>

<script>
export default {
	name: 'RotationImg',
	props:{
		// 轮播图连接列表
		TopSwipeImgUrlList: Array
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
</style>