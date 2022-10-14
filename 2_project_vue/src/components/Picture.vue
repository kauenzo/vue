<template>
  <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
  name: "Picture",
  data(){
    return{
      avatar: "/img/avatar-user.png",
      descricao: "Kaue Elias"
    }
  }
}
</script>

<style scoped>

</style>