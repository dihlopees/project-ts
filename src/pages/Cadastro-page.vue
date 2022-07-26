<template>
    <div class="cadastroProdutos">
      <div class="tituloCadastro">
        <h2>Cadastro de Produtos</h2>
      </div>
  
      <div class="formulario">
        <form @submit.prevent="enviarDados">
          <label>Nome do Produto:</label>
          <input type="text" v-model="nome" required />
  
          <label>Marca:</label>
          <input type="text" v-model="marca" required />
  
          <label>Valor:</label>
          <input type="number" v-model="valor" required />
  
          <label>Cor:</label>
          <select v-model="cor" required>
            <option value="1">Branco</option>
            <option value="2">Preto</option>
            <option value="3">Azul</option>
          </select>
  
          <label>Data:</label>
          <input type="date" v-model="data" required />
  
          <div class="posicaoimagem">
            <div class="addimg">
              <input type="file" @change="handleFile" required />
              <img
                src="../assets/imagens/icone-adicionar-foto.svg"
                alt="adicionar foto"
              />
            </div>
  
            <div v-if="imagem != null" class="renderizarImagem">
              <img :src="imagem" />
            </div>
          </div>
  
          <button type="submit"  >Adicionar Produto</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import api from "../api"
  import {defineComponent} from 'vue' 
  
  export default defineComponent({
    name: "Cadastro-page",
  
    data() {
      return {
        nome: "",
        marca: "",
        valor: 0,
        cor: 0,
        imagem: "",
        data: null,
      };
    },
    methods: {
      enviarDados() {
        api
          .post("/produtos", {
            nome: this.nome,
            marca: this.marca,
            valor: this.valor,
            corid: this.cor,
            imagem: this.imagem,
            data: this.data,
          })
          .then((response) => {
            alert("Produto Cadastrado com sucesso");
            console.log(response);
  
            (this.nome = ""),
              (this.marca = ""),
              (this.valor = 0),
              (this.cor = 0),
              (this.imagem = ""),
              (this.data = null);
          })
          .catch((error) => {
            console.log(error);
            alert("Erro ao cadastrar produto");
          });
      },
  
      transFileparaBase(file) {
        file.text().then(() => {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            const document = reader.result;
            this.imagem = document;
          };
        });
      },
  
      handleFile(event) {
        this.transFileparaBase(event.target.files[0]);
      },
    },
  });
  </script>
  
  <style>
  .tituloCadastro {
    display: grid;
    text-align: left;
    margin-left: 220px;
    padding: 15px;
  }
  
  .formulario form {
    display: flex;
    flex-direction: column;
    width: 600px;
    position: relative;
  
    left: 17%;
    top: 29%;
  }
  
  .formulario input {
    margin: 10px;
    height: 30px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    padding: 8px;
    border-radius: 10px;
    border: 2px solid grey;
  }
  
  .formulario select {
    margin: 10px;
    height: 45px;
    border-radius: 10px;
    border: 2px solid grey;
    padding: 8px;
  }
  
  .formulario button {
    color: white;
    border: 1px solid crimson;
    border-radius: 10px;
    padding: 10px;
    background-color: crimson;
    width: 200px;
    margin-top: 20px;
  }
  
  .formulario label {
    text-align: left;
    margin-left: 15px;
  }
  
  .addimg input {
    cursor: pointer;
    opacity: 0;
    z-index: 1;
    width: 90px;
    height: 90px;
    position: absolute;
  }
  
  .addimg img {
    width: 120px;
    height: 120px;
  }
  
  .addimg {
    display: flex;
    flex-direction: row;
    min-height: 15vh;
    margin-left: 0px;
    padding-top: 30px;
  }
  
  .posicaoimagem {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .renderizarImagem {
    padding: 25px;
  }
  </style>
  