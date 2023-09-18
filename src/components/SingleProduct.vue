p/* eslint-disable */
<template>
  <div class="card" style="width: 18rem">
    <img
      class="card-img-top imgClass"
      :src="item.thumbnail"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>

      <p class="card-text">
        {{ item.description }}
      </p>
      <p class="card-text">
        <strong>Price: ${{ item.price }} </strong>
      </p>
      <p class="card-text"><strong>Brand: </strong> {{ item.brand }}</p>
      <p class="card-text">Discount: {{ item.discountPercentage }} %</p>
      <a href="#" class="btn btn-primary">Buy this product</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {},
  },
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
  components: {},
  name: "Single_Product",
};
</script>

<style>
.imgClass {
  height: 200px;
  width: 100%;
}
</style>
