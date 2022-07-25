<template>
    <div class="cadastroProdutos">
      <div class="tituloCadastro">
        <h2>Editar Produtos</h2>
      </div>
  
      <div class="formulario">
        <form @submit="enviarDados" >
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
          <input type="date" v-model="date" required />
  
          <div class="envolverImagens">
            <div class="addimg">
              <input type="file" required />
              <img
                src="../assets/imagens/icone-adicionar-foto.svg"
                alt="adicionar foto"
              />
  
              <div class="img">
                <img :src="imagem" />
              </div>
            </div>
          </div>
  
          <button type="submit" >Salvar Produto</button>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import api from "../api.ts";
  
  export default {
    name: "Editar-page",
    data() {
      return {
        nome: "",
        marca: "",
        valor: 0,
        cor: 0,
        imagem: "",
        date: null,
        id: this.$route.params.id,
      };
    },
    mounted() {
      api
        .get("/produtos/" + this.id)
        .then((response) => {
          this.nome = response.data.nome;
          this.marca = response.data.marca;
          this.valor = response.data.valor;
          this.cor = response.data.corid;
          this.date = response.data.data;
          this.imagem = response.data.imagem;
        })
        .catch((error) => console.log(error));
    },
    methods: {
      enviarDados() {
        api
          .put("/produtos/" + this.id, {
            nome: this.nome,
            marca: this.marca,
            valor: this.valor,
            corid: this.cor,
            imagem: this.imagem,
            data: this.date,
          })
          .then((response) => {
            alert("Produto Editado com sucesso!");
            console.log(response);
          })
          .catch((error) => 
          { alert("Erro ao Editar produto")
          console.log(error)}
          );
      },
    },
  };
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
    min-height: 15vh;
    margin-left: 0px;
    padding-top: 30px;
    align-items: center;
  }
  
  .envolverImagens {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .img {
    padding: 25px;
  }
  </style>
  