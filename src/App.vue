<!-- https://www.marc-o-polo.com/en-se/women -->

<script>
  import NavbarSection from "./components/NavbarSection.vue"
  import FooterSection from "./components/FooterSection.vue"

  export default {
    components: {
      NavbarSection,
      FooterSection
    }
  }
</script>

<style lang="scss" scoped>
  /* ALLA elementet i en fil */
  /* Vi behöver inte använda id och class */
  /* Ej i app.vue */
  /* Man kan fortfarande använda id och class */
</style>

<template>
  <NavbarSection />

  <FooterSection />
</template>
