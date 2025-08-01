// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from "vuex"

// 使用插件
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'




// // 准备actions-用户响应组件中的动作
// const actions = {
// }

// // 准备mutations-用户操作数据（state）
// const mutations = {
// }

// // 准必state，用户存储数据
// const state = {
// }

// // 准备getters-用于将state中的数据进行加工
// const getters = {
// }

// 创建并暴露store
// export default new Vuex.Store({
//     actions,
//     mutations,
//     state,
//     getters
// })

export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})

