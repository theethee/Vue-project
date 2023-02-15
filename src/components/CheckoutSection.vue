<script>
  export default {
    data() {
      return {
        fName: "",
        lName: "",
        email: "",
        dateOfBirth: "",
        pNumber: "",
        adress: "",
        city: ""
      }
    }
  }
</script>

<template>
  <form class="container">
    <label>First name: *</label>
    <input type="text" required v-model="fName" />

    <label>Last name: *</label>
    <input type="text" required v-model="lName" />

    <label>Date of birth:* </label>
    <input type="date" required v-model="dateOfBirth" />

    <label>Phone number:* </label>
    <input type="text" required v-model="pNumber" />

    <label>Email:*</label>
    <input type="email" required v-model="email" />

    <label>Adress:*</label>
    <input type="text" required v-model="adress" />

    <label>City:*</label>
    <input type="text" required v-model="city" />
    <button type="submit">Submit</button>
  </form>
</template>

<style lang="scss" scoped>
  button {
    max-width: 30%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    max-width: 50%;
  }
</style>
