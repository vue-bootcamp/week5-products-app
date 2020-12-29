<template>
  <div class="container">
    <h2 v-if="carts.length === 0" align="center">Sepetinizde ürün bulunmamaktadır.</h2>
    <table v-else class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Ürün Resmi</th>
          <th scope="col">Ürün Adı</th>
          <th scope="col">Adet</th>
          <th scope="col">Fiyat</th>
          <th scope="col">İşlem</th>
        </tr>
      </thead>
      <tbody>
        <cart-list
          v-for="cart in carts"
          :key="cart.id"
          :cart="cart"
          @decrease-count="decreaseCount"
          @increase-count="increaseCount"
          @remove-item="removeFromCart"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import CartList from "@/components/CartList";

export default {
  components: {
    cartList: CartList,
  },
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
  methods: {
    decreaseCount(item) {
      axios
        .put(`http://localhost:4000/shopping-cart/${item.id}`, item)
        .then((response) => {
          console.log(response.data);
          let index = this.carts.findIndex((cart) => cart.id === item.id);
          this.carts[index] = item;
        })
        .catch((err) => console.log(err));
    },
    increaseCount(item) {
      axios
        .put(`http://localhost:4000/shopping-cart/${item.id}`, item)
        .then((response) => {
          console.log(response.data);
          let index = this.carts.findIndex((cart) => cart.id === item.id);
          this.carts[index] = item;
        })
        .catch((err) => console.log(err));
    },
    removeFromCart(id) {
      axios
        .delete(`http://localhost:4000/shopping-cart/${id}`)
        .then((response) => {
          console.log(response.data);
          this.carts = this.carts.filter((cart) => cart.id !== id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>