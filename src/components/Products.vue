<template>
  <Navbar />

  <div class="container">
    <div v-if="productsList" class="row mb-4 mt-4">
      <div
        v-for="(item, index) in productsList"
        :key="index"
        class="col-md-4 mb-4 mt-4"
      >
        <SingleProduct :item="item" />
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

    console.log(this.productsList);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => (this.productsList = data.products));
  },

  data() {
    return {
      isAuth: false,
      productsList: [],
    };
  },
  components: {
    Navbar,
    SingleProduct,
  },
  methods: {},
  name: "Product_Component",
};
</script>
