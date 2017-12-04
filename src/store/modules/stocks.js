import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    setStocks(state,stocks){
        state.stocks = stocks;
    },
    randomStocks(state){

    }
};

const actions = {
    buyStock: ( {commit},order ) => {
         commit('portfolio/buyStock', order, { root: true });
    },
    initStocks: ( { commit }) => {
        commit('setStocks', stocks);
    },
    randomizeStocks: ( { commit } ) => {
        commit( 'randomStocks' )
    }
};

const getters = {
    stocks: state => {
         return state.stocks;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}