<template>
    <div>
        <product-detail v-for="detail in details" :key="detail.id" :detail="detail" />
    </div>
</template>

<script>
    import axios from "axios";
    import ProductDetail from "@/components/ProductDetail";

    export default {
        components: {
            productDetail : ProductDetail,
        },
        data() {
            return {
                details: [],
            }
        },
        created() {
            axios.get(`http://localhost:4000/products?id=${this.productId}`)
                .then(response => {
                    console.log(response.data);
                    this.details = response.data;
                })
                .catch(err => console.log(err))
        },
        computed: {
            productId() {
                return this.$route.params.id;
            }
        }
    }
</script>

<style scoped>

</style>