/* eslint-disable */
<template>
  <Navbar v-if="isAuth"></Navbar>

  <h1>Search Product</h1>
</template>

<script>
import Navbar from "./Navbar.vue";

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
    };
  },
  components: {
    Navbar,
  },
  name: "Search_Product",
};
</script>
