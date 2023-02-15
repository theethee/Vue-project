<script>
  import ProductsSection from "../components/ProductsSection.vue"

  export default {
    components: {
      ProductsSection
    }
  }
</script>

<template>
  <h2>Electronics</h2>
  <ProductsSection :category="'electronics'" />
</template>
