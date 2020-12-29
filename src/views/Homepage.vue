<template>
  <div class="container">
      <div class="row">
          <product-card v-for="product in products" :key="product.id" :product="product" />
      </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "@/components/ProductCard";

export default {
    components: {
        productCard : ProductCard
    },
    data() {
        return {
            products: [],
        }
    },
    created() {
        axios.get("http://localhost:4000/products")
            .then(response => {
                this.products = response.data;
            })
            .catch(err => console.log(err));
    },
};
</script>

<style scoped>
</style>