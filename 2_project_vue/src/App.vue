<template>
  <primeiroComponente/>
  <p>O dado de app é: {{testando}}</p>
  <LifeCycle></LifeCycle>
</template>

<script>
  import primeiroComponente from "@/components/primeiroComponente";
  import LifeCycle from "@/components/lifeCycle";

  export default {
    name: 'App',
    components: {
      primeiroComponente,
      LifeCycle
    },
    data(){
      return{
        testando: "teste"
      }
    }
  }
</script>