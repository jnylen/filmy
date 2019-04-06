import Vue from "vue";
import Vuex from "vuex";

const debug = process.env.NODE_ENV !== "production";

const UPDATE_MOVIES = "UPDATE_MOVIES";
const SET_LOADING = "SET_LOADING";
const UPDATE_CART = "UPDATE_CART";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    cart: [],
    loading: false
  },
  getters: {
    getMovieById: state => id => {
      return state.movies.find(movie => movie.id === id);
    },
    recentlyReleased: state => {
      return [];
    },
    amountCart: state => {
      return state.cart.length;
    },
    comingMovies: state => {}
  },
  mutations: {
    [UPDATE_MOVIES](state, payload) {
      state.movies = payload.data;
    },
    [UPDATE_CART](state, payload) {
      state.cart = payload.data;
    },
    [SET_LOADING](state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    getMovies({ commit }) {
      commit(SET_LOADING, true);
    }
  }
});
