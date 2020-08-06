import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const network = axios.create({
	// 请求协议和域名
	// baseURL: '/api',
	// 超时时间
	timeout: 5000,
	// 请求头
	// headers: {'X-Custom-Header': 'foobar'}
	// `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default
});

// 添加请求拦截器
network.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
network.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	return response.data;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

export default network