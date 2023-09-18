/* eslint-disable */
<template>
  <Navbar v-if="isAuth"></Navbar>
  <div class="main">
    <div class="container mt-5">
      <form class="searchForm">
        <div class="form-group">
          <label style="">Title</label>

          <input
            type="text"
            class="form-control"
            id="id"
            ref="category"
            placeholder="Enter title"
          />
        </div>
        <button type="submit" @click="submitHandler" class="btn btn-primary">
          Search
        </button>
      </form>
    </div>
    <div>
      <div class="searchForm" v-if="product.title">
        <SingleProduct :item="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import SingleProduct from "./SingleProduct.vue";

export default {
  beforeMount() {
    if (!localStorage.getItem("token")) {
      this.$router.push("./");
    } else {
      this.isAuth = true;
    }
  },
  data() {
    return {
      isAuth: false,
      product: {},
    };
  },
  components: {
    Navbar,
    SingleProduct,
  },
  methods: {
    async submitHandler(event) {
      event.preventDefault();

      if (this.$refs.category.value.length > 0) {
        fetch(
          `https://dummyjson.com/products/search?q=${this.$refs.category.value}`
        )
          .then((res) => res.json())
          .then((data) => {
            this.product = data.products[0];
          });
      }
    },
  },

  name: "Search_Product",
};
</script>

<style scoped>
.searchForm {
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.main {
  align-items: center;
}
</style>
