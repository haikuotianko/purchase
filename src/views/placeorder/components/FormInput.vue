<template>
  <div class="FormInput">
    <!-- 输入框 -->
    <!-- 允许输入正整数，调起纯数字键盘 -->
    <van-field
      
      @touchstart.native.stop="isShowKeyboard = true"
      :value="value"
      @input="emitInput"
			@blur="isShowKeyboard=false"
      clickable
      label-align="center"
      :label="label"
      :placeholder="placeholder"
			type="number"
			step="0.01"
    />

    <van-number-keyboard
      :show="isShowKeyboard"
      theme="custom"
      extra-key="."
      close-button-text="完成"
      @blur="isShowKeyboard = false"
      @input="onInput"
      @delete="onDelete"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    label: String,
    placeholder: String,
  },

  data() {
    return {
      isShowKeyboard: false,
    };
  },
  components: {},
  methods: {
    emitInput(e) {
      // let value = Number(e)
      // isNaN(value) ||
			this.$emit("input",e);
			this.priceFixed()
    },
    onInput(e) {
			this.$emit("input",this.value + e);
			this.priceFixed()
    },
    onDelete() {
			let value = this.value
      this.$emit("input", value.substring(0, value.length - 1));
		},
		// 保留后面两位小数点
		priceFixed() {
			let value = String(this.value)
			let decimal = value.split('.')[1]
			if(decimal && decimal.length >= 2){
				this.$emit("input",Number(value).toFixed(2));
			}
    },
	},
};
</script>

<style scoped>
</style>