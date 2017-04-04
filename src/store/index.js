import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mut from './mutations'
import actions from './actions'

const state = mut.state;
const mutations = mut.mutations;
const getters = mut.getters;

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
