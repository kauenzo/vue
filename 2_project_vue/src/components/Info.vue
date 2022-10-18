<template>
  <span>Marcha nos projetos. </span>
  <span v-if="possuiOShape">O shape fala por mim. </span>
  <span v-else>Se você joga Minecraft, obrigatóriamente precisa estar no shape. </span>
  <span v-show="isMadrugada">De {{ horario }} minha mente vai longe. </span>
  <p>Pre treino:</p>
  <ul>
    <li v-for="(treino, index) in pre_treino" :key="index">
      {{ treino }}
    </li>
  </ul>

  <p>Pos treino</p>
  <ul>
    <li v-for="nacionalidade_mina in bugada_no_shape" :key="nacionalidade_mina.id">
      {{ nacionalidade_mina.nacionalidade }}
    </li>
  </ul>

  <button @click="showShape" class="botao-shape">{{ texto_botao }}</button>
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
      texto_botao: 'Mostrar o shape',
      pre_treino: ["em busca","do shape","inexplicável"],
      bugada_no_shape:[
        {id: 1, nacionalidade: 'Russa'},
        {id: 2, nacionalidade: 'Italiana'},
        {id: 3, nacionalidade: 'Francesa'}
      ]
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
