import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Monsters',
    },
    getters: {
        title(state) { return state.title }
    },
    mutations: {
        setTitle(state, payload) {
            state.title = payload.title;
        }
    },
    actions: {
        doUpdate({ commit }, title) {
            commit('setTitle', { title });
        }
    },
    modules: {
    }
})
