<template>
  <ul>
    <li><a href="#">2022</a></li>
    <li><a href="#">Tecnologia</a></li>
    <li><a href="#">Foguete</a></li>
    <li class="isLogado" v-if="isLogado"><a>Perfil</a></li>
  </ul>
</template>

<script>
export default {
  name: "Header",
  props: ['isLogado'],
}
</script>

<style scoped>
  .isLogado{
    margin-left: 100px;
    /*padding: 5px;*/
    /*background-color: #FFFFFF;*/
    color: #000000;
    border: 0.1px solid #999999;
  }

  ul{
    list-style: none;
    display: flex;
    background: #999;
    padding: 10px;
  }
  li{
    margin-right: 10px;
  }

  a{
    color: #ddd;
    text-decoration: none;
    transition: 0.5s;
  }

  a:hover{
    color: aquamarine;
  }
</style>
