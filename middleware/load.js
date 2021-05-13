import products from '~/data/products.json'

export default function ({ params, store }) {
  const productData = products
  store.commit('loadProducts', productData)
}
