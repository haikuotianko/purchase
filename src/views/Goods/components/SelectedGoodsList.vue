<template>
  <div class="SelectedGoodsList">
    <!-- 弹出面板 -->
    <van-action-sheet :value="value" @input="$emit('input', false)" title="已选商品">
      <div class="content">
				<!-- 已选商品列表 -->
        <van-list>
          <van-cell v-for="item in selectedList" :key="item.id" v-show="total(item.price, item.measure_weight) != 0">
						<div class="item" v-if="total(item.price, item.measure_weight) != 0">
							<!-- 图片 -->
							<div class="item-img">
								<van-image
									class="img"
									width="80px"
									height="54px"
									fit="contain"
									:src="item.images"
								/>
							</div>
							<!-- 名称-价格 -->
							<div class="item-left">
								<div class="title">{{item.title}}</div>
								<div class="price"><i>￥</i><span>{{item.price}}</span><i>/kg</i></div>
							</div>
							<!--合计 重量-总价 -->
							<div class="total">
								<div class="weight">重量:{{item.measure_weight }}/kg</div>
								<div class="count-price">总价：&yen;{{total(item.price, item.measure_weight)}}</div>
							</div>
						</div>
					</van-cell>
        </van-list>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  name: "SelectedGoodsList",
  props: {
    value: {
      type: Boolean,
      default: false,
		},
		selectedList: Array
  },
  data() {
    return {};
  },
  components: {},
	methods: {
		total(price, weight){
			return (price * weight).toFixed(2)
		}
	},
	// 计算属性
	computed: {
		
	},
};
</script>

<style scoped>
.content {
  /* background-color: #333; */
  max-height: 60vh;
  padding-bottom: 80px;
  border-top: 1px solid #ddd;
}
.item{
	display: flex;
	justify-content: space-between;
}

.item-img .img{
	border-radius: 5px;
	overflow: hidden;
	vertical-align: middle;
}

.item-left{
	flex: 1;
	padding-left: 5px;
}
.item-left .title{
	color: #333;
	font-weight: bold;
	line-height: 1.7rem;
}
.item-left .price{
	color: #f42727;
}
.item-left .price i{
	font-style: normal;
	font-size: 10px;
}
.item-left .price span{
	font-size: 14px;
}

.total .weight{
	font-size: 12px;
	color: #a97e2f;
}
.count-price{
	font-weight: bold;
}
</style>