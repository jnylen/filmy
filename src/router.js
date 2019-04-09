import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Account from "./views/Account.vue";
import CategoryIndex from "./views/Category/Index.vue";
import Movie from "./views/Movie.vue";
import Cart from "./views/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/account",
      name: "account",
      component: Account
    },
    {
      path: "/movies",
      name: "CategoryIndex",
      component: CategoryIndex
    },
    {
      path: "/movies/:id",
      name: "Movie",
      component: Movie
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    }
  ]
});
