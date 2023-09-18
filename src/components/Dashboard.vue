<template>
  <Navbar />
  <router-view></router-view>
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
  name: "Dashboard_Component",
  data() {
    return {
      isAuth: Boolean,
    };
  },
  components: {
    Navbar,
  },
};
</script>
