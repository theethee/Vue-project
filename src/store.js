// Object destructureing --> {createStore}
import { createStore } from "vuex"

const mutations = {
    // removeProduct(state, product) {
    //   state.cart.splice(this.cart.indexOf(product))
    //   state.cart.findIndex(product, state)
    // },
    // addToCart(state, product) {
    // this.$store.commit("add")
    // pushar in i arrayen!
    //   state.cart.push(product)
    //   console.log(state.cart)
    // }
  },
  // databurken
  state = {
    // add: 0
    // countProducts: 0,
    // cart: []
  }

export default createStore({ mutations, state, strict: true })
