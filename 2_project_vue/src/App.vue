<template>
  <PrimeiroComponente/>
  <p>O dado de app é: {{testando}}</p>
  <LifeCycle></LifeCycle>
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