import { defineStore } from 'pinia'

export const PiniaStore = defineStore('main',{
    state:() => {
        return {
            age:18,
            name:'张三'
        }
    },
    getters:{},  //相当于全局的computed
    actions:{}   //相当于全局methods
})