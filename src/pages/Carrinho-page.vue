<template>
    <div class="todos">
      <div class="tituloCarrinho">
        <h1>Carrinho</h1>
  
        <div class="quadradoGrande">
          <div class="itemQuadrado">
            <div class="imgQuadadro">
              <img :src="imagem" />
            </div>
  
            <div class="infoQuadrado">
              <h4>{{ nome }}</h4>
              <p>{{ marca }}</p>
              <p>Cor: {{ cor }}</p>
            </div>
          </div>
  
          <hr id="hr" />
          <div class="quantidadeEvalor">
            <h4>Quantidade:</h4>
  
            <button
              v-show="count < 1 ? dis === true : dis === false"
              @click="count--"
              :disabled="dis"
            >
              <img src="../assets/icones/menos.svg" />
            </button>
  
            <p>{{ count }}</p>
  
            <button @click="count++">
              <img src="../assets/icones/mais.svg" />
            </button>
  
            <h3>R$ {{ valor }}</h3>
          </div>
        </div>
      </div>
  
      <div class="tituloPedido">
        <h1>Resumo do Pedido</h1>
  
        <div class="subtotal">
          <div class="numeros">
            <h4>Subtotal {{ count }} itens</h4>
  
            <h4>Frete</h4>
  
            <h4>Valor Total</h4>
          </div>
  
          <div class="calculos">
            <h4>R$ {{ valorTotal.toFixed(2) }}</h4>
  
            <h4>R$ {{ frete.toFixed(2) }}</h4>
  
            <h4>R$ {{ somaFinal.toFixed(2) }}</h4>
          </div>
  
          <div class="botaoPagar">
            <button @click="mostrarPagar = true">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  
    <div>
      <pagar v-if="mostrarPagar" :somaFinal="somaFinal" />
    </div>
  </template>
  
  <script lang="ts">
  import api from "../api";
  import pagar from "../components/pagar-compo.vue";
  
  export default {
    name: "Carrinho-page",
    components: { pagar },
    data() {
      return {
        nome: "",
        marca: "",
        valor: 0,
        cor: "",
        imagem: "",
        id: this.$route.params.id,
        count: 1,
        mostrarPagar: false,
        dis: false,
      };
    },
    mounted() {
      api
        .get("/produtos/" + this.id)
        .then((response) => {
          this.nome = response.data.nome;
          this.marca = response.data.marca;
          this.valor = response.data.valor;
          this.cor = response.data.cor.nome;
          this.imagem = response.data.imagem;
        })
        .catch((error) => console.log(error));
    },
    computed: {
      valorTotal() {
        return this.valor * this.count;
      },
      frete() {
        return this.valorTotal * 0.1;
      },
      somaFinal() {
        return this.valorTotal + this.frete;
      },
    },
  };
  </script>
  
  <style>
  .todos {
    display: grid;
    grid-template-columns: repeat(2, 60% 40%);
  }
  
  .quadradoGrande {
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 50px;
  }
  .itemQuadrado {
    display: grid;
    grid-template-columns: repeat(2, 30% 70%);
    padding: 20px;
  }
  .infoQuadrado {
    text-align: left;
  }
  #hr {
    margin: 10px;
    border: solid 1px #ccc;
  }
  .quantidadeEvalor {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    margin: 10px;
  }
  .quantidadeEvalor h3 {
    color: #0f4c81;
  }
  .quantidadeEvalor button {
    background: transparent;
    border: 0;
  }
  .quantidadeEvalor p {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    width: 50px;
  }
  .subtotal {
    background-color: #f5f5f5;
    margin: 50px;
    border-radius: 10px;
    height: 330px;
  }
  .tituloCarrinho h1 {
    text-align: left;
    margin-left: 80px;
  }
  .numeros h4 {
    padding: 20px;
  }
  .botaoPagar button {
    border-radius: 10px;
    color: white;
    background-color: crimson;
    border: 0;
    padding: 10px;
    width: 300px;
    margin-bottom: 15px;
    font-size: 18px;
    margin-left: 80px;
  }
  .botaoPagar {
    display: contents;
    width: 300px;
  }
  .subtotal {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
  .calculos h4 {
    padding: 20px;
  }
  </style>
  