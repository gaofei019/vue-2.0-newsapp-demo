//import * as types from './types'

export default{
    showHeader:({commit})=>{
        commit('showHeader');
    },
    hideHeader:({commit})=>{
        commit('hideHeader');
    },
    showLoading:({commit})=>{
        commit('showLoading');
    },
    hideLoading:({commit})=>{
        commit('hideLoading');
    }
}
