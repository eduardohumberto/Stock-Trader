import Vue from 'vue';

export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(response => response.json() )
        .then(data => {
            if (data) {
                const stocks = data.stocks;
                const funds = data.funds;
                const stockPortfolio = data.stockPortfolio;

                const portfolio = {
                    stockPortfolio,
                    funds
                }

                commit('stocks/setStocks', stocks, { root: true });
                commit('portfolio/setPortfolio', portfolio, { root: true });
            }
        })
};