import {
    createStore
} from 'vuex';
export default createStore({
    state: {
        cardBookWidth: 304,
        cardBookHeight: 280,
        handleDrag: "",
    },
    mutations: {
        setCardBookSize(state, payload) {
            state.cardBookWidth = payload.width;
            state.cardBookHeight = payload.height;
        },
        setHandleDrag(state, payload) {
            state.handleDrag = payload;
        }
    },
    actions: {
        setCardBookSize({
            commit
        }, payload) {
            commit('setCardBookSize', payload);
        },
        setHandleDrag({
            commit
        }, payload) {
            commit('setHandleDrag', payload);
        }
    },
    getters: {
        getHandleDrag(state) {
            return state.handleDrag;
        },
        getCardWidth(state) {
            return state.cardBookWidth;
        },
        getCardHeight(state) {
            return state.cardBookHeight;
        }
    }
});