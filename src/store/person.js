// 人员相关的配置
// const personOptions = 
import axios from "axios"
import { nanoid } from "nanoid"
export default {
    namespaced:true,
    actions: {
        addPersonW(context,value){
            if(value.name.indexOf('王')==0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('只能加姓王的人')
            }
        },
        addPersonServer(context){
            axios.get('https://api.github.com/users?q=s').then(
                response=>{
                    // console.log(response.data.login)
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data[0].login})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }

    },
    state: {
        personList: [{
            id: 0,
            name: '张三'
        }]

    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}