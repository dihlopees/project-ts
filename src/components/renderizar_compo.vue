<template>
    <div class="backdroop">
      <div class="modal" :class="{ dark }">
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aut
          laudantium reprehenderit, nemo architecto ipsum sit, dolor eveniet error
          temporibus consequatur labore beatae facere. Velit consectetur magnam
          unde nemo? Pariatur?
        </p>
  
        <div class="lista">
          <h3>Nomes da Mesa:</h3>
          <div v-for="item in items" :key="item.items">
            <p>{{ item }}</p>
          </div>
        </div>
  
        <div class="botaoMudar">
          <button @click="mudarTheme">Mood Dark</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ["text", "items"],
    data() {
      return {
        title: "aqui dentro fica meu componente",
        dark: false,
      };
    },
    methods: {
      mudarTheme() {
        this.dark = !this.dark;
      },
    },
  };
  </script>
  
  <style scope>
  .modal {
    background-color: bisque;
    color: rgb(41, 37, 37);
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
  
  .modal h1 {
    margin: 20px;
    padding-top: 50px;
  }
  .iconeRedondos button {
    width: 50px;
    margin: 10px;
  }
  
  .dark {
    background-color: black;
    color: white;
  }
  </style>
  