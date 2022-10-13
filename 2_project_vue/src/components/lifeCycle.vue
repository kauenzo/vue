<template>
  <h1> O nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "lifeCycle",
  data(){
    return{
      nome: 'indefinido'
    }
  },
  created() {
    setTimeout(()=> {
      this.nome = "Kaue"
    }, 1000);
  },
  mounted() {
    setTimeout(()=>{
      this.nome = "Alex"
    }, 2000);
  }
}
</script>

<style scoped>

</style>