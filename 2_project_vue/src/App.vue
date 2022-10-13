<template>
  <primeiroComponente/>
  <p>O dado de app é: {{testando}}</p>
</template>

<script>
  import primeiroComponente from "./components/primeiroComponente.vue";
  export default {
    name: 'App',
    components: {
      primeiroComponente
    },
    data(){
      return{
        testando: "teste"
      }
    }
  }
</script>