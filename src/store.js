import Vue from "vue";
import Vuex from "vuex";

const debug = process.env.NODE_ENV !== "production";

const UPDATE_MOVIES = "UPDATE_MOVIES";
const UPDATE_CART = "UPDATE_CART";
const ADD_CART = "ADD_CART";
const REMOVE_CART = "REMOVE_CART";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    inCart: state => id => {
      return typeof state.cart.find(movie => movie.id === id) !== "undefined";
    },
    amountCart: state => {
      return state.cart.length;
    }
  },
  mutations: {
    [UPDATE_CART](state, payload) {
      state.cart = payload.data;
    },
    [ADD_CART](state, payload) {
      state.cart.push(payload);
    },
    [REMOVE_CART](state, payload) {
      state.cart.splice(payload, 1);
    }
  },
  actions: {}
});
