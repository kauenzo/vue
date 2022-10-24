<template>
  <div>
    <MudarImagem @mudar-imagem="mudarImagem"/>
    <img :src="avatar" :alt="descricao">
  </div>
</template>

<script>
import MudarImagem from "@/components/MudarImagem";
export default {
  name: "Picture",
  components: {MudarImagem},
  data() {
    return {
      avatar: "/img/avatar-user.png",
      descricao: "Kaue Elias"
    }
  },
  methods: {
    mudarImagem() {
      console.log('imagem trocada');
      this.avatar = "/img/avatar2.png";
    }
  }
}
</script>

<style scoped>

</style>