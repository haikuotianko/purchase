<template>
  <div class="Goods">
    <van-notify :value="isDangerShow" type="danger" color="#ffe7e2">
      <span>放回商品时，请把商品放回原位，以免产生扣款</span>
    </van-notify>

    <GoodsList></GoodsList>
  </div>
</template>

<script>
import GoodsList from './components/GoodsList'
export default {
  name: "Goods",
  data() {
    return {
			isDangerShow: true
		};
  },
  components: { GoodsList },
  methods: {

	},
};
</script>

<style scoped>
.Goods{
  padding-top: 36px;
}
</style>