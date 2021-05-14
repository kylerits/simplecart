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
        itemId: product.itemId,
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
    // const cart = new Array(state.cart)
    // console.log(cart)
    state.cart.push(product)
    console.log(state.cart)
  },
  // Remove from cart
  removeFromCart(state, product) {},
  // Clear Cart
  clearCart(state) {},
}
