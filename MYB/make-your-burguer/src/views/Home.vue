<template>
  <Banner />
  <div class="main-container">
    <h1>Monte o seu hamburguer</h1>
    <BurgerForm />
  </div>
</template>

<script>
// @ is an alias to /src

import Banner from "@/components/Banner";
import BurgerForm from "@/components/BurgerForm";
export default {
  name: 'Home',
  components: {
    BurgerForm,
    Banner
  }
}
</script>
