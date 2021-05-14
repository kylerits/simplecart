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
        <!-- TODO: Catch image src 404 -->
        <nuxt-img
          v-if="data.image"
          :src="data.image"
          fit="inside"
          width="200"
          height="200"
          class="w-full h-full object-contain"
        />
        <div v-else class="flex items-center justify-center w-full h-full">
          <p class="text-xs uppercase tracking-wider text-gray-400">
            Image not found
          </p>
        </div>
      </div>
      <div class="product-info px-5">
        <div class="prose pb-6">
          <h3>
            <a :href="data.url">{{ data.productName }}</a>
          </h3>
          <p>{{ data.description }}</p>
        </div>
        <div class="flex justify-between items-center">
          <!-- TODO: Format Price -->
          <div>${{ data.price }}</div>
          <div>
            <button
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
  },
}
</script>
