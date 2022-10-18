<template>
  <h2>Formulário</h2>
  <form action="" @submit="enviar_formulario($event)">
<!--    <div>
      <InputNome></InputNome>
      <InputEmail></InputEmail>
    </div>-->
    <div>
      <input type="text" v-model="name">
      <input type="text" v-model="email">
    </div>
    <div>
      <InputSubmit></InputSubmit>
    </div>
  </form>
</template>

<script>
import InputNome from "@/components/Form/InputNome";
import InputEmail from "@/components/Form/InputEmail";
import InputSubmit from "@/components/Form/InputSubmit";
export default {
  name: "Form",
  components: {
    InputSubmit, InputEmail, InputNome
  },
  data(){
    return{
      name: "",
      email: ""
    }
  },
  methods: {
    enviar_formulario(e){
      e.preventDefault();

      const name  = this.name;
      const email = this.email;
      console.log("Formulario enviado!");
      console.log(`Nome: ${name}`);
      console.log(`Email: ${email}`);

      //Inserir dados no banco de dados
    }
  }

}
</script>

<style scoped>

</style>