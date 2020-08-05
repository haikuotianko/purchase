<template>
  <div class="GoodsList">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="TouchLoad">
      <!-- <van-cell v-for="item in GoodsList" :key="item.id" :title="item" /> -->

      <van-cell class="GoodsList-cell" v-for="item in GoodsList" :key="item.id">
        <div class="GoodsList-item">
          <div class="item-left">
            <van-image
						class="item-left-img"
              width="80px"
              height="100px"
              fit="cover"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
          <div class="item-middle">
						<div class="name">{{item.name}}</div>
						<div class="Price">价格:{{item.price}}/{{item.price_unit}}</div>
						<!-- <div class="weight">购买重量:{{item.weight}}/{{item.price_unit}}</div> -->
						<div class="stock">库存:{{item.stock}}/{{item.stock_unit}}</div>
					</div>
          <div class="item-right">&yen; {{item.price}} 元</div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  data() {
    return {
      // 加载状态
      loading: false,
      // 是否  显示没有更多了
      finished: false,
      // 商品列表数组
      GoodsList: [
        {
          id: 1,
          name: "三文鱼",
          price: 7.5,
					price_unit: "千克",
					weight: 2,
          stock: 1,
          stock_unit: "千克",
        },
      ],
    };
  },
  components: {},
  methods: {
    // 触底加载
    TouchLoad() {},
  },
};
</script>

<style scoped>
.GoodsList {
  /* background-color: #7ab07c; */
}
.GoodsList-cell{
	background-color: #7ab07c;
}
.GoodsList-item {
  display: flex;
	padding: 10px;
  background-color: #e1ab15;
}
.item-left .item-left-img{
	overflow: hidden;
  border-radius: 10px;
	vertical-align: middle;
}
.item-middle{
	flex: 1;
	margin-left: 10px;
	line-height: 2rem;
}
.item-middle .name{
	font-weight: bold;
}
.item-right {
  line-height: 49px;
}
</style>