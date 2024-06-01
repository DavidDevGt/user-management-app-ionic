import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    products: JSON.parse(localStorage.getItem('products') || '[]'),
    companyConfig: JSON.parse(localStorage.getItem('companyConfig') || '{}'),
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
      localStorage.setItem('products', JSON.stringify(products));
    },
    setCompanyConfig(state, config) {
      state.companyConfig = config;
      localStorage.setItem('companyConfig', JSON.stringify(config));
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    setProducts({ commit }, products) {
      commit('setProducts', products);
    },
    setCompanyConfig({ commit }, config) {
      commit('setCompanyConfig', config);
    },
  },
  getters: {
    user: (state) => state.user,
    products: (state) => state.products,
    companyConfig: (state) => state.companyConfig,
  },
});