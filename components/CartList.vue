<template>
  <div id="cart">
    <div class="relative block">
      <div class="flex justify-between">
        <div class="intro prose prose-lg">
          <h2>Cart</h2>
        </div>
        <div class="price">
          <p>{{ totalPrice }}</p>
        </div>
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
      const cartState = this.$store.state.cart
      const uniqueProducts = cartState.filter((p, index) => {
        return cartState.indexOf(p) === index
      })
      return uniqueProducts
    },
    totalPrice() {
      const cartState = this.$store.state.cart
      let price = 0
      cartState.forEach((product) => {
        price += product.price
      })
      return price
    },
  },
}
</script>
