<template>
  <div id="products">
    <div class="relative block">
      <div class="intro prose prose-lg">
        <h2>Products</h2>
      </div>
      <hr />
      <!-- Products Loop -->
      <div
        v-for="(product, index) in products"
        :key="'product-' + index"
        class="relative max-w-md my-10"
      >
        <product :data="product" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      const productState = this.$store.state.products
      return productState
    },
  },
}
</script>
