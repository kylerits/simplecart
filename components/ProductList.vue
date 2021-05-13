<template>
  <div>
    <div class="relative block">
      <!-- Products Loop -->
      <div
        v-for="(product, index) in products"
        :key="'product-' + index"
        class="relative max-w-md"
      >
        <div class="flex product-inner">
          <div class="product-info">
            <div class="prose">
              <h3>{{ product.productName }}</h3>
              <p>{{ product.description }}</p>
            </div>
            <div class="flex items-center">
              <div>${{ product.price }}</div>
              <div>
                <button
                  id="addToCart"
                  class="px-3 py-1 text-white duration-200 bg-green-500 rounded  hover:bg-green-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
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
