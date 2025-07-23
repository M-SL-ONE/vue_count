// 求和功能相关的配置
// const countOptions = 
export default {
    namespaced:true,
    actions: {
        // add(context, value) {
        //     context.commit('ADD', value)
        // },
        // jian(context, value) {
        //     context.commit('JIAN', value)
        // },
        addOdd(context, value) {
            if (context.state.sum % 2) context.commit('ADD', value)
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 500)

        },

    },
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },

    },
    state: {
        sum: 10, //当前的和

    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }

    }
}