import "./axios";
import Vue from "vue";

import CripVueLoading from "crip-vue-loading";

Vue.use(CripVueLoading, {
  axios: axios,

  // Show loader when vue-router detects route change
  applyOnRouter: true,

  // Default color of loader
  color: "#f66d9b",

  // Direction of progress: "right" | "left"
  direction: "right",

  // Loader color when request fails
  failColor: "#ac2925",

  // Height of loader
  height: "4px",

  // When set to true - loader will log details in to console
  verbose: false
});

export default CripVueLoading;
