<template>
  <div class="container">
    <input
      v-model="formData.title"
      type="text"
      class="form-control"
      placeholder="Title..."
    />
    <input
      v-model="formData.description"
      type="text"
      class="form-control"
      placeholder="Description..."
    />
    <input
      v-model="formData.imageUrl"
      type="text"
      class="form-control"
      placeholder="Image url..."
    />
    <input
      v-model="formData.price"
      type="number"
      class="form-control"
      placeholder="Price..."
    />
    <select v-model="formData.categoryId" class="form-select">
      <option value="sec">Seçiniz</option>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </select>
    <button @click="addProduct" class="btn btn-primary">ADD PRODUCT</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
        imageUrl: "",
        price: null,
        categoryId: "sec",
      },
      categories: [],
    };
  },
  created() {
    axios
      .get("http://localhost:4000/categories")
      .then((response) => {
        this.categories = response.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    clearForm() {
      this.formData = {
        title: "",
        description: "",
        imageUrl: "",
        price: null,
        categoryId: "sec",
      };
    },
    addProduct() {
      axios
        .post("http://localhost:4000/products", this.formData)
        .then((response) => {
          console.log(response.data);
          this.clearForm();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
input,
select {
  margin-top: 20px;
}
input:first-child {
  margin-top: 30px;
}
button {
  width: 100%;
  margin-top: 20px;
}
</style>