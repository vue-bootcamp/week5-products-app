<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Products</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active" style="cursor: pointer;">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/add-product" class="nav-link" active-class="active" style="cursor: pointer;">Add Product</router-link>
            </li>
          </ul>
          <div class="d-flex scart">
              <router-link to="/shopping-cart">
                  <i class="fa fa-shopping-cart" style="font-size: 3em; cursor: pointer; color:black;"></i>
              </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scart {
  position: absolute;
  right: 10rem;
  top: 0.3rem;
  cursor: pointer;
}
</style>