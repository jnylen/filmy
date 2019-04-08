import Vue from "vue";
import Vuex from "vuex";

const debug = process.env.NODE_ENV !== "production";

const UPDATE_MOVIES = "UPDATE_MOVIES";
const UPDATE_CART = "UPDATE_CART";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    cart: []
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
    }
  },
  actions: {
    getMovies({ commit }) {}
  }
});
