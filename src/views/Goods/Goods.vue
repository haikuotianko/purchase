<template>
  <div class="Goods">
    <van-notify :value="isDangerShow" type="danger" color="#ffe7e2">
      <span>放回商品时，请把商品放回原位，以免产生扣款</span>
    </van-notify>

    <goods-list :goodsListArr="goodsListArr" :finished="true"></goods-list>

    
    <total-price v-model="showPanel">
      <selected-goods-list v-model="showPanel" :selectedList="goodsListArr"></selected-goods-list>
    </total-price>
    
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList";
import TotalPrice from './components/TotalPrice'
import SelectedGoodsList from './components/SelectedGoodsList'
// import request from "../request";
export default {
  name: "Goods",
  data() {
    return {
      // 显示提示信息
      isDangerShow: true,
      // 显示已选商品列表
      showPanel: false,
      // 商品列表数组
      goodsListArr: [
        {
          id: 37,
          door_id: 5,
          number: 1,
          title: "三文鱼",
          product_id: 25,
          cost_price: 700,
          price: 7.5,
          stock: 1.5,
          measure_type: 2,
          measure_weight: 500,
          status: 1,
          update_time: "2020-08-06 09:32:18",
          add_time: "2020-07-18 11:31:56",
          product_name: "三文鱼",
          images:
            "http://test.zizhuxitong.com/data_api/public/uploads/product/25/5f126b4b80072.png",
        },
        {
          id: 38,
          door_id: 5,
          number: 2,
          title: "淡水鸭",
          product_id: 26,
          cost_price: 800,
          price: 8,
          stock: 0,
          measure_type: 1,
          measure_weight: 0,
          status: 1,
          update_time: "2020-08-06 09:32:18",
          add_time: "2020-07-18 11:32:43",
          product_name: "淡水鸭",
          images:
            "http://test.zizhuxitong.com/data_api/public/uploads/product/26/5f126b7520a36.png",
        },
        {
          id: 39,
          door_id: 5,
          number: 3,
          title: "猪肉",
          product_id: 27,
          cost_price: 900,
          price: 9,
          stock: 0,
          measure_type: 1,
          measure_weight: 0,
          status: 1,
          update_time: "2020-08-06 09:32:18",
          add_time: "2020-07-18 11:33:07",
          product_name: "猪肉",
          images:
            "http://test.zizhuxitong.com/data_api/public/uploads/product/27/5f126b9723158.png",
        },
        {
          id: 40,
          door_id: 5,
          number: 4,
          title: "螃蟹",
          product_id: 28,
          cost_price: 1000,
          price: 10,
          stock: 0,
          measure_type: 1,
          measure_weight: 0,
          status: 1,
          update_time: "2020-08-06 09:32:18",
          add_time: "2020-07-18 11:33:32",
          product_name: "螃蟹",
          images:
            "http://test.zizhuxitong.com/data_api/public/uploads/product/28/5f126c2662b45.png",
        },
        {
          id: 42,
          door_id: 5,
          number: 5,
          title: "皮皮虾",
          product_id: 24,
          cost_price: 600,
          price: 6,
          stock: 0.183,
          measure_type: 1,
          measure_weight: 0,
          status: 1,
          update_time: "2020-08-06 09:32:18",
          add_time: "2020-07-18 11:35:35",
          product_name: "皮皮虾",
          images:
            "http://test.zizhuxitong.com/data_api/public/uploads/product/24/5f126b2e65b73.png",
        },
      ],
    };
  },
  components: { GoodsList, TotalPrice, SelectedGoodsList },
  methods: {},
};
</script>

<style scoped>
.Goods {
  padding-top: 36px;
}
</style>