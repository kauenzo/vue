<template>
  <h1> Ola Vue!</h1>
  <p> meu nome é {{ nome }}, e sou {{profissao}}</p>
  <MultiplosEventos></MultiplosEventos>
</template>

<script>
import MultiplosEventos from "@/components/MultiplosEventos";
export default {
  name: "PrimeiroComponente",
  components: {MultiplosEventos},
  data(){
    return{
      nome: "Kaue",
      profissao: "Dev"
    }
  }
}
</script>

<style scoped>

</style>