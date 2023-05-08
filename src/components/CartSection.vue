<!-- https://www.google.com/search?q=cart+whitout+vuex&oq=cart+whitout+vuex&aqs=chrome.0.69i59.6884j0j7&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:ff587024,vid:UF4zSvQ0t1M -->

<template>
  <h2>Cart</h2>

  <!-- Skriver ut hur mpnga produkter som finns i varukorgen -->
  <h3>{{ cart.length }} in cart</h3>
  <div class="2-columns">
    <h3>All products</h3>
  </div>
  <div class="row" id="fixed">
    <!-- Visar alla produkter med produkinfo -->
    <div id="products-div" :key="product.id" v-for="product in products">
      <div class="column">
        <div id="title" class="column">{{ product.title }}</div>
        <img :src="product.image" alt="Picture of the product" />
      </div>
      <div id="price" class="column">${{ product.price }}</div>
      <div>
        <div class="space">
          <!-- lägger till produkt i varukorg -->
          <input
            class="btn btn-light"
            value="Add to cart"
            @click="addToCart(product)"
            type="button"
          />
        </div>
        <div class="space">
          <!-- tar bort produkt i varukorg -->
          <input
            class="btn btn-light"
            value="remove"
            @click="removeProduct(product)"
            type="button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},

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
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((result) => {
            this.products = result
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
    }
  }

  // v-if --> meddelanden/kundkorgen tom/ rea etc
  // }
</script>

<style lang="scss" scoped>
  $product-title: bold;

  #title {
    font-weight: $product-title;
  }
  #price {
    padding-bottom: 10%;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    align-items: center;
  }

  input {
    max-width: 30%;
  }
  h4 {
    text-align: center;
    padding-bottom: 5%;
  }
  #products-div {
    display: grid;
  }
  input {
    padding-top: 5px;
  }

  #pic,
  #title {
    padding-top: 20px;
  }
</style>
