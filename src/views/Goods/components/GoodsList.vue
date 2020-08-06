<template>
  <div class="GoodsList">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="TouchLoad">
      <!-- <van-cell v-for="item in GoodsList" :key="item.id" :title="item" /> -->

      <van-cell class="GoodsList-cell" v-for="item in goodsListArr" :key="item.id">
        <div class="GoodsList-item" :class="{active: item.id == 1 }">
          <div class="item-left">
            <van-image
              class="item-left-img"
              width="80px"
              height="100px"
              fit="cover"
              :src="item.images"
            >
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
          </div>
          <div class="item-middle">
            <div class="name">{{item.title}}</div>
            <div class="Price">价格:{{item.price}}/千克</div>
            <!-- <div class="weight">购买重量:{{item.weight}}/{{item.price_unit}}</div> -->
            <div class="stock">库存:{{item.stock}}/千克</div>
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
  props:{
    // 加载状态
      // loading: {
      //   type: Boolean,
      //   default: false
      // },
      // 是否  显示没有更多了
      finished: {
        type: Boolean,
        default: false
      },
      // 商品列表数组
      goodsListArr: Array
  },
  data() {
    return {
      loading: false
    };
  },
  components: {},
  // 生命周期--创建好实例了
  created() {
    // this.getGoodsList();
  },
  methods: {
    // 触底加载
    TouchLoad() {},
  },
};
</script>

<style scoped>
.GoodsList {
  /* background-color: #7ab07c; */
  padding-bottom: 50px;
}
.GoodsList-cell {
  background-color: #7ab07c;
}
.GoodsList-item.active {
  background-color: #e1ab15;
}
.GoodsList-item {
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
}
.item-left .item-left-img {
  overflow: hidden;
  border-radius: 10px;
  vertical-align: middle;
}
.item-middle {
  flex: 1;
  margin-left: 10px;
  line-height: 2rem;
}
.item-middle .name {
  font-weight: bold;
}
.item-right {
  line-height: 100px;
}
</style>