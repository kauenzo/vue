<template>
  <span>Marcha nos projetos. </span>
  <span v-if="possuiOShape">O shape fala por mim. </span>
  <span v-else>Se você joga Minecraft, obrigatóriamente precisa estar no shape. </span>
  <span v-show="isMadrugada">De {{ horario }} minha mente vai longe. </span>
  <ul>
    <li>shape </li>
    <li>traduziu </li>
    <li>comunicou </li>
    <li>eficácia</li>
    <li>ninguém</li>
  </ul>
  <button @click="showShape">{{ texto_botao }}</button>
  <p v-show="treino">Às vezes não sinto vontade de treinar, mas sei dos benefícios de estar no shape.</p>
  <p>Entrar no <a v-bind:href="link_shape">shape</a></p>
  <Picture></Picture>
</template>

<script>
import Picture from "@/components/Picture";
export default {
  name: "Info",
  components: {
    Picture
  },
  data(){
    return {
      possuiOShape: true,
      isMadrugada: true,
      treino: true,
      horario: "madrugada",
      link_shape: '#',
      texto_botao: 'Mostrar o shape'
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

</style>