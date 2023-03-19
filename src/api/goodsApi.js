import axios from './axiosPZ'

export function getGoodsList(params){
    return  axios.post('/api/goods/goodList',params)
}