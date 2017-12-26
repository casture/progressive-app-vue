import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
    dialogVisible: false,
    isLoading: true,
    cards: [],
    selectedCities: [],
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
}

const getters = {

}

const mutations = {
    [types.ADD_CARD] (state, card) {
        state.cards.push(card)
    },
    [types.OPEN_CITY_DIALOG] (state, card) {
        state.dialogVisible = true;
    },
    [types.CLOSE_CITY_DIALOG] (state, card) {
        state.dialogVisible = false;
    },
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})