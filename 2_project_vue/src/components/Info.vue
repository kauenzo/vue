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
</template>

<script>
export default {
  name: "Info",
  data(){
    return {
      possuiOShape: true,
      isMadrugada: true,
      horario: "madrugada"
    }
  }
}
</script>

<style scoped>

</style>