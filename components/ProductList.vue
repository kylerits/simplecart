<template>
  <div>
    <ul class="relative block">
      <!-- Products Loop -->
      <li v-for="(product, index) in products" :key="'product-'+index" class="block list-style-none"></li>
    </ul>
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
