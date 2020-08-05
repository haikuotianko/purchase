<template>
  <div class="SubmitButtom">
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="10">
        <div class="price">
          单价:
          <span>{{unitPrice | priceFixed}}</span>元
        </div>
        <van-button color="#feb100" block>点击充值</van-button>
      </van-col>

      <van-col span="10">
        <div class="price">
          最低消费:
          <span>{{minimumPrice | priceFixed}}</span>元
        </div>
        <van-button color="#f74948" block>点击消费</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "SubmitButtom",
  props: {
    // 单价
    unitPrice: Number,
    // 最低消费
    minimumPrice: Number,
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  // 过滤器
  filters: {
    priceFixed(value) {
      return value.toFixed(2);
    },
  },
};
</script>

<style scoped>
.SubmitButtom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 5px;
}
.price {
  text-align: center;
}
.price > span {
  color: #fe0000;
}
</style>