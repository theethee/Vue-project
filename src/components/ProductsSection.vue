<!-- Cart: https://www.youtube.com/watch?v=fB6smjNEFtU&t=422s -->

<template>
  <header id="center-div">
    <!-- Visar hur mycket som lagts till i cart -->
    <h3>{{ cart.length }} in cart</h3>
  </header>

  <div class="row">
    <!-- loopar i products arrayen -->
    <div id="products-div" :key="product.id" v-for="product in products">
      <div class="column">
        <!-- visar titel på produkt -->
        <div id="title" class="column">{{ product.title }}</div>
        <div id="pic">
          <!-- visar bild på produkt -->
          <img :src="product.image" alt="Picture of the product" />
        </div>
      </div>
      <!-- visar priset på produkt -->
      <div id="price" class="column">${{ product.price }}</div>
      <div class="space">
        <!-- Lägger till produkt i varukorgen -->
        <input
          class="btn btn-light"
          value="Add to cart"
          @click="addToCart(product)"
          type="button"
        />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
  export default {
    computed: {},

    data() {
      return {
        // returnerar objekt
        cart: [],
        products: null
      }
    },

    created() {
      // anropar metod
      this.fetchProducts()
    },

    methods: {
      fetchProducts() {
        // console.log(this.category)
        // fetchar API och hämtar produkt baserat på kategori
        fetch(`https://fakestoreapi.com/products/category/${this.category}`)
          // omvandlas till JSON
          .then((response) => response.json())
          .then((result) => {
            this.products = result
            // console.log(result)
          })
      },
      // Lägger till produkt i varukorgen
      addToCart(product) {
        //pushar in i arrayen!
        this.cart.push(product)
        console.log(this.cart)
      },
      // tar bort senaste produkten från varukorgen
      removeProduct() {
        // tar bort sista elementet
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
  $product-title: bold;

  #title {
    font-weight: $product-title;
  }

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
