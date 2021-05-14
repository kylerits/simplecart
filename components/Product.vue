<template>
  <div class="product-wrap">
    <div class="flex product-inner">
      <div
        class="
          flex-shrink-0
          product-thumb-wrap
          w-[150px]
          h-[150px]
          inline-block
          p-1
          relative
          border
          rounded-lg
          border-gray-100
        "
      >
        <nuxt-img
          v-if="data.image && showImage"
          :src="data.image"
          fit="inside"
          width="200"
          height="200"
          class="w-full h-full object-contain"
          fallback="https://via.placeholder.com/500x500?text=Image%20Not%20Found!"
          @error.native="imageError()"
        />
        <div v-else class="flex items-center justify-center w-full h-full">
          <p class="text-xs uppercase tracking-wider text-gray-400">
            Image not found
          </p>
        </div>
      </div>
      <div class="product-info px-5">
        <div class="prose pb-6">
          <h3 class="flex items-center justify-between">
            <a :href="data.url" class="inline-block">{{ data.productName }}</a>
            <span v-if="inCart && cartCount > 1" class="text-sm inline-block"
              ># in Cart: {{ cartCount }}</span
            >
          </h3>
          <p>
            <span class="text-xs font-bold uppercase tracking-wider">{{
              data.manufacturer
            }}</span>
          </p>
          <p>{{ data.description }}</p>
          <p><a :href="data.url">Learn More</a></p>
        </div>
        <div class="flex justify-between items-center">
          <!-- TODO: Format Price -->
          <div>${{ data.price }}</div>
          <div>
            <button
              v-if="available"
              id="addToCart"
              class="
                px-3
                py-1
                text-white
                duration-200
                bg-green-500
                rounded
                hover:bg-green-600
              "
              @click="addToCart(data)"
            >
              Add to Cart
            </button>
            <button
              id="addToCart"
              class="
                px-3
                py-1
                text-white
                duration-200
                bg-red-500
                rounded
                hover:bg-red-600
              "
              @click="removeFromCart(data)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
    inCart: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      showImage: true,
    }
  },
  computed: {
    cartCount() {
      const id = this.data.itemid
      const cart = this.$store.state.cart
      const filteredCart = cart.filter((product) => product.itemid === id)
      const count = filteredCart.length
      return count
    },
    available() {
      if (this.data.available <= this.cartCount) {
        return false
      }
      return true
    },
  },
  methods: {
    addToCart(product) {
      if (product) {
        this.$store.commit('addToCart', product)
      }
    },
    removeFromCart(product) {
      if (product) {
        this.$store.commit('removeFromCart', product)
      }
    },
    imageError() {
      this.showImage = false
    },
  },
}
</script>
