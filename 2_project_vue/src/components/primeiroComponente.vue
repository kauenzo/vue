<template>
  <h1> Ola Vue!</h1>
  <p> meu nome é {{ nome }}, e sou {{profissao}}</p>
</template>

<script>
export default {
  name: "primeiroComponente",
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