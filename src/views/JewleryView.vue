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
    <h2>Jewlery</h2>
    <ProductsSection :category="'jewelery'" />
  </div>
</template>
