<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Your Logo</a>
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
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products"
              >All Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/searchproduct"
              >Search Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/addproduct"
              >Add a Product</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/deleteproduct"
              >Delete Product</router-link
            >
          </li>
          <li class="nav-item">
            <button class="btn btn-primary" @click="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar_Component",

  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("./");
    },
  },
};
</script>

<style scoped>
/* Add any custom CSS for your component here */
</style>
