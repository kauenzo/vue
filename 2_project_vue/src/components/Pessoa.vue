<template>
  <h1>Em pleno 2022, ano da tecnologia.</h1>
  <h2>Conhe o {{nome}}? Ta lançando um foguete</h2>
  <Form></Form>
<!--  <Info></Info>-->
</template>


<script>
import Info from "@/components/Info";
import Form from "@/components/Form/Form";
export default {
  name: "Pessoa",
  components: {Form, Info},
  data(){
    return{
      nome: "Elon Musk"
    }
  }
}
</script>

<style scoped>

</style>