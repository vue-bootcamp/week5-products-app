import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    baseUrl: "http://localhost:4000",
    categories: [],
    products: [],
    productDetail: [],
    carts: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProductDetail(state, productDetail) {
      state.productDetail = productDetail;
    },
    setShoppingCart(state, carts) {
      state.carts = carts;
    },
    setCount(state, editedProduct) {
      let index = state.carts.findIndex((cart) => cart.id === editedProduct.id);
      state.carts[index] = editedProduct;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    addToCart(state, product) {
      state.carts.push(product);
    },
    removeFromCart(state, productId) {
      state.carts = state.carts.filter((cart) => cart.id !== productId);
    },
  },
  actions: {
    initCategories({ commit, state }) {
      axios
        .get(`${state.baseUrl}/categories`)
        .then((response) => {
          commit("setCategories", response.data);
        })
        .catch((err) => console.log(err));
    },
    initProducts({ commit, state }) {
      axios
        .get(`${state.baseUrl}/products`)
        .then((response) => {
          commit("setProducts", response.data);
        })
        .catch((err) => console.log(err));
    },
    initFilterProducts({ commit, state }, categoryId) {
      axios
        .get(`${state.baseUrl}/products?categoryId=${categoryId}`)
        .then((response) => {
          commit("setProducts", response.data);
        })
        .catch((err) => console.log(err));
    },
    initProductDetail({ commit, state }, productId) {
      axios
        .get(`${state.baseUrl}/products?id=${productId}`)
        .then((response) => {
          console.log(response.data);
          commit("setProductDetail", response.data);
        })
        .catch((err) => console.log(err));
    },
    initShoppingCart({ commit, state }) {
      axios
        .get(`${state.baseUrl}/shopping-cart`)
        .then((response) => {
          commit("setShoppingCart", response.data);
        })
        .catch((err) => console.log(err));
    },
    changeCount({ commit, state }, editedProduct) {
      axios
        .put(
          `${state.baseUrl}/shopping-cart/${editedProduct.id}`,
          editedProduct
        )
        .then((response) => {
          commit("setCount", response.data);
        })
        .catch((err) => console.log(err));
    },
    addProduct({ commit, state }, product) {
      return axios
        .post(`${state.baseUrl}/products`, product)
        .then((response) => {
          if (response.status === 201) {
            commit("addProduct", response.data);
            return response.status;
          }
        })
        .catch((err) => console.log(err));
    },
    addToCart({ commit, state }, product) {
      axios
        .post(`${state.baseUrl}/shopping-cart`, product)
        .then((response) => {
          commit("addToCart", response.data);
        })
        .catch((err) => console.log(err));
    },
    removeFromCart({ commit, state }, productId) {
      axios
        .delete(`${state.baseUrl}/shopping-cart/${productId}`)
        .then((response) => {
          console.log(response);
          commit("removeFromCart", productId);
        })
        .catch((err) => console.log(err));
    },
  },
  getters: {
    getCategories: (state) => state.categories,
    getProducts: (state) => state.products,
    getProductDetail: (state) => state.productDetail,
    getShoppingCart: (state) => state.carts,
  },
});
