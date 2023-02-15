<script>
  import ProductsSection from "../components/ProductsSection.vue"

  export default {
    components: {
      ProductsSection
    }
  }
</script>

<template>
  <div>
    <h2 id="women">Women</h2>
    <ProductsSection :category="'women\'s clothing'" />
  </div>
</template>
