<template>
  <h1>Em pleno 2022, ano da tecnologia.</h1>
  <h2>Conhe o {{nome}}? Ta lançando um foguete</h2>
  <div>
    <button @click="ShowInfo">{{ txt_bnt_info }}</button>
    <div v-show="info">
      <br>
      <Info :email="email" :possuiOShape=true />
    </div>
  </div>
  <Form />
</template>


<script>
import Info from "@/components/Info";
import Form from "@/components/Form/Form";
export default {
  name: "Pessoa",
  components: {Form, Info},
  data(){
    return{
      nome: "Elon Musk",
      info: true,
      txt_bnt_info: "Mostrar Info",
      email: "dev.kaue@icloud.com"
    }
  },
  methods: {
    ShowInfo(){
      this.info = !this.info;
      if(!this.info){
        this.txt_bnt_info = "Mostrar Info"
      }else{
        this.txt_bnt_info = "Ocultar Info"
      }
    }
  }
}
</script>

<style scoped>

</style>