<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'Shope'}">Loja</router-link>
    <router-link :to="{name: 'Cadastro'}">Cadastro de Produto</router-link>
   
  </div>
  <router-view />
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style>
.nav a {
  text-decoration: none;
  border-radius: 10px;
  color: white;
  border: 1px solid crimson;
  padding: 10px;
  background-color: crimson;
  width: 150px;
  margin: 20px;
}
.nav {
  padding: 45px;
 
  
}

* {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
