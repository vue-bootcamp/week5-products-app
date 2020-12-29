<template>
  <tr>
    <td>
      <img :src="cart.imageUrl" :alt="cart.title" width="150" height="150" />
    </td>
    <td>{{ cart.title }}</td>
    <td>
      <div class="input-group" style="width: 30%">
        <div class="input-group-prepend">
          <button
            :disabled="count === 1"
            @click="decrease"
            class="btn btn-primary"
          >
            -
          </button>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="count"
          style="text-align: center"
        />
        <div class="input-group-append">
          <button @click="increase" class="btn btn-primary">+</button>
        </div>
      </div>
    </td>
    <td>{{ cart.price * cart.count }}</td>
    <td>
      <button @click="$emit('remove-item', cart.id)" class="btn btn-danger">Sepetten Çıkar</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["cart"],
  data() {
    return {
      count: null,
    };
  },
  created() {
    this.count = this.cart.count;
  },
  methods: {
      decrease() {
          delete this.cart.count;
          let changeItem = {...this.cart, count: --this.count};
          this.$emit("decrease-count", changeItem);
      },
      increase() {
          delete this.cart.count;
          let changeItem = {...this.cart, count: ++this.count};
          this.$emit("increase-count", changeItem);
      },
  },
};
</script>

<style lang="scss" scoped>
</style>