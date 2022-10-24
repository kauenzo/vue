<template>
  <p> {{email}}</p>
  <span v-if="possuiOShape">O shape fala por mim. </span>
  <!--  <div>
      <span>Marcha nos projetos. </span>
      <span v-if="possuiOShape">O shape fala por mim. </span>
      <span v-else>Se você joga Minecraft, obrigatóriamente precisa estar no shape. </span>
      <span v-show="isMadrugada">De {{ horario }} minha mente vai longe. </span>
      <treino></treino>
      <button @click="showShape" class="botao-shape">{{ texto_botao }}</button>
      <p v-show="treino">Às vezes não sinto vontade de treinar, mas sei dos benefícios de estar no shape.</p>
      <p>Entrar no <a v-bind:href="link_shape">shape</a></p>
      <Picture></Picture>
    </div>-->
</template>

<script>
import Picture from "@/components/Picture";
import Treino from "@/components/Info/treino";
export default {
  name: "Info",
  components: {
    Treino,
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
    background-color: #999999;
  }
</style>
