<template>
  <div class="TotalPrice">
    <div class="showconsole" @click="$emit('input', !value)">
      <div class="left-img">
        <!-- 数量角标 -->
        <div class="tag">
          <van-tag mark type="danger">
            <van-icon name="cross" />1
          </van-tag>
        </div>
        <!-- <div class="await">等待结算</div> -->
        <!-- 购物栏图片 -->
        <img src="~@/assets/Icon/shopping.png" alt />
      </div>
      <!-- 点击展开 -->
      <div class="middle" v-show="!value">
        <van-icon name="arrow-up" />
        <span>点击展开</span>
      </div>
      <!-- 总价 -->
      <div class="right">
        &yen;
        <span>17.00</span>
        元
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TotalPrice",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style scoped>
.TotalPrice {
  position: fixed;
  left: 10px;
  right: 10px;
  bottom: 5px;
}
.showconsole {
  position: relative;
  z-index: 5000;
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-radius: 10px;
  background-color: #333;
}
.left-img {
  /* background-color: #fff; */
  margin-top: -20px;
  width: 50px;
  position: relative;
  margin-left: 10px;
}
.left-img .tag {
  position: absolute;
  top: 30%;
  right: 0;
  transform: translateX(100%);
}
.left-img .await {
  position: absolute;
  bottom: 10%;
  right: 0;
  width: 80px;
  transform: translateX(100%);
  text-align: center;
  color: #999;
  font-size: 12px;
}
.left-img img {
  width: 60px;
}
.middle {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #ddd;
  font-size: 14px;
  text-align: center;
}
.right {
  /* color: #fff;	 */
  line-height: 50px;
  font-size: 14px;
  padding: 0 10px;
  background-color: #f4ca1c;
  border-radius: 0 10px 10px 0;
}
.right span {
  color: red;
  font-weight: bold;
}
</style>