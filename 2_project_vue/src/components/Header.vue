<template>
  <ul>
    <li><a href="#">2022</a></li>
    <li><a href="#">Tecnologia</a></li>
    <li><a href="#">Foguete</a></li>
  </ul>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
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
