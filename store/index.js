export const state = () => ({
  products: [],
  cart: [],
})

export const mutations = {
  // Load Products
  loadProducts(state, data) {
    const productMap = data.map((product) => {
      return {
        image: product.image,
        url: product.url,
        manufacturer: product.manufacturer,
        productName: product.productName,
        itemId: product.itemid,
        quantity: product.quantity,
        price: product.price,
        description: product.description,
        available: product.available,
      }
    })
    state.products = productMap
  },
  // Add to cart
  addToCart(state, product) {
    state.cart.push(product)
    // console.log(state.cart)
  },
  // Remove from cart
  removeFromCart(state, product) {
    const productIndex = state.cart.findIndex((el) => {
      // console.log(el)
      return el.itemId === product.itemId
    })
    // console.log(productIndex)
    state.cart.splice(productIndex, 1)
    // console.log(state.cart)
  },
  // Clear Cart
  clearCart(state) {},
}
