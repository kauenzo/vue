<template>
  <h2>Em pleno 2022, ano do {{ nome }}.</h2>
  <Info></Info>
</template>

<script>
import Info from "@/components/Info";
export default {
  name: "Pessoa",
  components: {Info},
  data(){
    return{
      nome: "Elon Musk"
    }
  }
}
</script>

<style scoped>

</style>