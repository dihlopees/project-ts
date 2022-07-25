<template>
    <div class="homePage">
      <h1>{{ title }}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quisquam
        vitae quo blanditiis magni repellat tempora voluptatibus! Earum placeat,
        aspernatur in quis assumenda expedita sint, id magnam, quibusdam
        reiciendis temporibus!
      </p>
      <div class="input">
        <input v-model="campo" placeholder="Digite seu nome aqui:" /> {{ aviso }}
  
        <button @click="pushLista">Adicionar</button>
      </div>
  
      <div v-if="showRender">
        <renderizar :text="text" :items="items" />
      </div>
  
      <div>
        <button class="mudar" @click="mostrarRender">{{ nomeBotao }}</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import renderizar from "../components/renderizar_compo.vue";
  
  export default {
    name: "Home-page",
    components: { renderizar },
    data() {
      return {
        title: "Meu Projeto de Estudos em Vue",
        text: "Informação do meu Componente",
        showRender: false,
        nomeBotao: "Mostrar Render",
        items: ["Ingrid"],
        campo: "",
        aviso: "",
        timer: null,
      };
    },
    methods: {
      mostrarRender() {
        this.showRender = !this.showRender;
  
        if (this.showRender == true) {
          this.nomeBotao = "Esconder Render";
        } else {
          this.nomeBotao = "Mostrar Render";
        }
      },
      pushLista() {
        if (this.campo.length > 3) {
          this.items.push(this.campo);
          alert("Nome adicionado com sucesso");
        } else {
          alert("Informe um nome com mais de 3 letras");
        }
  
        this.campo = "";
      },
      setarTime() {
        this.aviso = "Aguardando..";
      },
    },
    watch: {
      campo() {
        this.aviso = "Digitando...";
  
        if (this.timer != null) {
          clearTimeout(this.timer);
        }
  
        this.timer = setTimeout(this.setarTime, 1000);
      },
    },
  };
  </script>
  
  <style scope>
  #app {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    text-align: center;
  }
  
  .input {
    border: solid 4px #ccc;
    margin: 50px;
    padding: 15px;
  }
  
  .homePage button {
    height: 40px;
    border-radius: 30px;
    margin: 50px;
  }
  </style>
  