<template>
  <div class="container">
      <div class="row">
          <product-card v-for="product in products" :key="product.id" :product="product" />
      </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapGetters } from 'vuex';

export default {
    components: {
        productCard : ProductCard
    },
    created() {
        this.$store.dispatch("initProducts");
    },
    computed: {
        ...mapGetters({
            products: "getProducts",
        }),
    },
};
</script>

<style scoped>
</style>