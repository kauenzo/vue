<template>
<!--  <PrimeiroComponente/>-->
<!--  <p>O dado de app é: {{testando}}</p>-->
<!--  <LifeCycle></LifeCycle>-->
  <Pessoa></Pessoa>
</template>

<script>
  import PrimeiroComponente from "@/components/PrimeiroComponente";
  import LifeCycle from "@/components/LifeCycle";
  import Pessoa from "@/components/Pessoa";

  export default {
    name: 'App',
    components: {
      PrimeiroComponente: PrimeiroComponente,
      LifeCycle,
      Pessoa: Pessoa
    },
    data(){
      return{
        testando: "teste"
      }
    }
  }
</script>

<!--css font style-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
<style>
  body{
    font-family: 'Open Sans', sans-serif;
  }
</style>