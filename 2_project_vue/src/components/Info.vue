<template>
  <Picture />
  <p> {{email}}</p>
  <span v-if="possuiOShape">O shape fala por mim. </span>
  <!--  <div>
      <span>Marcha nos projetos. </span>
      <span v-if="possuiOShape">O shape fala por mim. </span>
      <span v-else>Se você joga Minecraft, obrigatóriamente precisa estar no shape. </span>
      <span v-show="isMadrugada">De {{ horario }} minha mente vai longe. </span>
      <button @click="showShape" class="botao-shape">{{ texto_botao }}</button>
      <p>Entrar no <a v-bind:href="link_shape">shape</a></p>
    </div>-->
</template>

<script>
import Picture from "@/components/Picture";
export default {
  name: "Info",
  components: {
    Picture
  },
  props: {
    email: String,
    possuiOShape: Boolean
  },
  data(){
    return {
      isMadrugada: true,
      treino: true,
      horario: "madrugada",
      link_shape: '#',
      texto_botao: 'Mostrar o shape',
    }
  },
  methods:{
    showShape(){
      this.treino = !this.treino;
      if(!this.treino){
        this.texto_botao = "Mostrar shape"
      }else{
        this.texto_botao = "Ocultar shape"
      }
    }
  }
}
</script>

<style scoped>
  div{
    /*border: 1px solid red;*/
    /*background-color: #999999;*/
  }
</style>
