<script>
  import ProductsSection from "../components/ProductsSection.vue"

  export default {
    components: {
      ProductsSection
    }
  }
</script>

<template>
  <h2>Men</h2>
  <ProductsSection :category="'men\'s clothing'" />
</template>
