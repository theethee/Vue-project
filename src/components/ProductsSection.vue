<!-- Cart: https://www.youtube.com/watch?v=fB6smjNEFtU&t=422s -->

<template>
  <header id="center-div">
    <h3>{{ cart.length }} in cart</h3>
  </header>

  <div class="row">
    <div id="products-div" :key="product.id" v-for="product in products">
      <div class="column">
        <div id="title" class="column">{{ product.title }}</div>
        <div id="pic">
          <img :src="product.image" alt="Picture of the product" />
        </div>
      </div>
      <div id="price" class="column">${{ product.price }}</div>
      <div class="space">
        <input
          class="btn btn-light"
          value="Add to cart"
          @click="addToCart(product)"
          type="button"
        />
      </div>
      <!-- <div class="space">
        <input
          class="btn btn-light"
          value="remove"
          @click="removeProduct(product)"
          type="button"
        />
      </div> -->
      <!-- <input value="Add to cart" @click="addToCart" type="button" /> -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
  export default {
    computed: {
      // add() {
      //   return this.$store.state.add
      // }
    },

    data() {
      return {
        cart: [],
        products: null
      }
    },

    created() {
      this.fetchProducts()
    },

    methods: {
      fetchProducts() {
        // console.log(this.category)
        fetch(`https://fakestoreapi.com/products/category/${this.category}`)
          .then((response) => response.json())
          .then((result) => {
            this.products = result
            // console.log(result)
          })
      },
      addToCart(product) {
        //pushar in i arrayen!
        this.cart.push(product)
        console.log(this.cart)
      },
      removeProduct() {
        this.cart.splice(this.cart.length - 1)
        //  Kan använda Pop
        // this.cart.pop()
      }
    },
    props: {
      category: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  #center-div {
    display: flex;
    justify-content: center;
  }
  li {
    font-weight: bold;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    align-items: center;
    padding-right: 10%;
  }

  #price {
    padding-top: 10px;
  }

  input {
    padding-top: 5px;
  }

  #pic,
  #title {
    padding-top: 20px;
  }
</style>
