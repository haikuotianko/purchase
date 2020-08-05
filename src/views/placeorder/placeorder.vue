<template>
  <div class="home">
    <!-- Swipe 轮播 -->
    <rotation-img :TopSwipeImgUrlList="TopSwipeImgUrlList"></rotation-img>
    <!-- 输入框 -->
    <van-cell-group>
			<form-input v-model="price" @input="InputPrice" label="金额" placeholder="请输入金额" ></form-input>
			<form-input v-model="capacity" @input="InputPapacity" label="升" placeholder="请输入容量"></form-input>
		</van-cell-group>

    <!-- 金额和容量按钮 -->
    <my-form @emitPrice="emitPrice" @emitCapacity="emitCapacity"></my-form>
    <!-- 充值和消费按钮 -->
    <submit-buttom :unitPrice="unitPrice" :minimumPrice="minimumPrice"></submit-buttom>
  </div>
</template>

<script>
// @ is an alias to /src

import RotationImg from "./components/RotationImg";
import FormInput from './components/FormInput'
import MyForm from "./components/MyForm";
import SubmitButtom from './components/SubmitButtom'
export default {
  name: "placeorder",
  components: {
    RotationImg,
    FormInput,
    MyForm,
    SubmitButtom
  },
  data() {
    return {
      // 价格
      price: undefined,
      // 容量
      capacity: undefined,
      // 单价
      unitPrice: 0.01,
      // 最低消费
      minimumPrice: 0.01,
      // 显示数字键盘
      isShowKeyboard: false,
      // 头部轮播图连接列表
      TopSwipeImgUrlList: [
        "https://picsum.photos/id/270/500/200",
        "https://picsum.photos/id/27/500/200",
        "https://picsum.photos/id/37/500/200",
      ],
    };
  },
  methods: {
    emitPrice(){
      console.log('金额');
    },
    emitCapacity(){
      console.log('容量');
    },
    InputPrice(e){
      this.capacity = String((Number(e) / this.minimumPrice).toFixed(2))
    },
    InputPapacity(e){
      this.price = String((Number(e) * this.minimumPrice).toFixed(2))
    }
  },
  // 监听器
  watch: {

  },
  
};
</script>
