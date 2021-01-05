<template>
  <div class="container">
    <div class="row">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapGetters } from 'vuex';

export default {
  components: {
    productCard: ProductCard,
  },
  created() {
    this.$store.dispatch("initFilterProducts", this.categoryId);
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
    categoryId() {
      return this.$route.params.categoryId;
    },
  },
  watch: {
    categoryId() {
      this.$store.dispatch("initFilterProducts", this.categoryId);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>