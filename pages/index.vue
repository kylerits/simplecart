<template>
  <div class="container py-12">
    <div class="text-center prose pb-12 mx-auto">
      <h1>Simple Cart</h1>
    </div>
    <div class="flex -mx-6 py-12">
      <div class="relative w-1/2 px-6">
        <lazy-product-list />
      </div>
      <div class="relative w-1/2 px-6">
        <lazy-cart-list />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
