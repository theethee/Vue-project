<!-- https://stackoverflow.com/questions/70846740/how-to-use-router-link-inside-of-select-option-dropdown-in-vuejs -->

<!-- https://vuejs.org/guide/essentials/conditional.html -->

<style lang="scss" scoped>
  /* * {
    box-sizing: border-box;
  } */
  body {
    max-width: 100%;
    color: rgb(60, 60, 59);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Courier,
      monospace;
  }

  h1 {
    text-align: center;
  }

  nav {
    padding: 15px;
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
    float: left;
  }

  li a {
    text-decoration: none;
    padding: 30px;
    font-size: 20px;
  }

  a {
    color: rgb(60, 60, 59);
  }

  /* ----------- */

  main {
    padding-top: 10%;
  }

  .brand {
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 20%;
    border-radius: 12px;
    border-style: hidden;
    opacity: 0.6;
    padding: 5px;
    background-color: rgb(215, 213, 213);
  }
</style>

<script>
  export default {
    data() {
      return {
        Category: "Men",
        showBrand: false
      }
    },

    methods: {
      // Lyssnar på vilken kategori användaren väljer i rullgardinsmenyn
      navigateToProduct(e) {
        this.$router.push("/" + e.target.value)
      }
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/women">Women</RouterLink>
      </li>
      <li>
        <RouterLink to="/men">Men</RouterLink>
      </li>
      <li>
        <RouterLink to="/jewlery">Jewlery</RouterLink>
      </li>
      <li>
        <RouterLink to="/electronics">Electronics</RouterLink>
      </li>
      <li>
        <RouterLink to="/cart">Cart</RouterLink>
      </li>
      <li>
        <RouterLink to="/checkout">Checkout</RouterLink>
      </li>
    </ul>
    <!-- rullgardinsmeny -->
    <select
      name="format"
      id="format"
      v-model="Category"
      value="Category"
      @change="navigateToProduct($event)"
    >
      <option selected>Men</option>
      <option value="Women">Women</option>
      <option value="Jewlery">Jewlery</option>
      <option value="Electronics">Electronics</option>
    </select>
  </nav>

  <!-- Visar och döljer brand name -->
  <div class="brand">
    <h1 v-if="showBrand" id="brand">Threads & Textures</h1>
    <button @click="showBrand = !showBrand" type="submit">
      Show the brand name
    </button>
  </div>

  <main>
    <RouterView />
  </main>
</template>
