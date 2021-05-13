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
      }
    })
    console.log(productMap)
  },
}
