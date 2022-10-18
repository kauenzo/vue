<template>
  <h1> Ola Vue!</h1>
  <p> meu nome é {{ nome }}, e sou {{profissao}}</p>
<!--  <MultiplosEventos/>-->
  <Reutilizacao/>
  <Reutilizacao/>
  <Reutilizacao/>
  <Reutilizacao/>
</template>

<script>
import MultiplosEventos from "@/components/MultiplosEventos";
import Reutilizacao from "@/components/Reutilizacao";
export default {
  name: "PrimeiroComponente",
  components: {Reutilizacao, MultiplosEventos},
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