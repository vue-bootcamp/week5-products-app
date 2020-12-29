<template>
  <div class="col-md-4">
    <div
      @click="$router.push(`/details/${product.id}`)"
      class="card"
      style="width: 18rem"
    >
      <img :src="product.imageUrl" :alt="product.title" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">
          {{ product.description }}
        </p>
        <p class="card-text" style="text-align: center">
          <b> {{ product.price }} TL </b>
        </p>
        <button
          @click.stop="addToCart"
          v-if="!isCart"
          class="btn btn-primary"
          style="width: 100%"
        >
          Sepete Ekle
        </button>
        <button
          @click.stop="removeFromCart"
          v-else
          class="btn btn-danger"
          style="width: 100%"
        >
          Sepetten Çıkar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["product"],
  data() {
    return {
      carts: [],
    };
  },
  created() {
    axios
      .get("http://localhost:4000/shopping-cart")
      .then((response) => {
        this.carts = response.data;
      })
      .catch((err) => console.log(err));
  },
  computed: {
    isCart() {
      return Boolean(this.carts.find((item) => item.id === this.product.id));
    },
  },
  methods: {
    addToCart() {
      axios
        .post("http://localhost:4000/shopping-cart", {
          ...this.product,
          count: 1,
        })
        .then((response) => {
          this.carts.push(response.data);
        })
        .catch((err) => console.log(err));
    },
    removeFromCart() {
      axios
        .delete(`http://localhost:4000/shopping-cart/${this.product.id}`)
        .then((response) => {
          console.log(response);
          this.carts = this.carts.filter((item) => item.id !== this.product.id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 10px;
  cursor: pointer;
  border: none;
  padding: 10px;
  height: 580px;
}
.card:hover {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  opacity: 0.9;
}
img {
  height: 300px;
}
</style>