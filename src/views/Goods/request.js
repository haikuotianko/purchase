import network from '../../network'

const request = {
	getGoodsList(){
		const url = '/api'
		return network.get(url)
	}
}



export default request
