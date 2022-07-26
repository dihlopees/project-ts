<template>
    <div class="cordefundo">
      <div class="listaProdutos">
        <h1>Lista de Produtos</h1>
      </div>
  
      <div v-for="item in info" :key="item.info" class="itemLoope">
        <div class="imgLoope">
          <img :src="item.imagem" />
        </div>
  
        <div class="infoProdutos">
          <h4>{{ item.nome }}</h4>
          <p>{{ item.marca }}</p>
          <h2>R$ {{ item.valor }}</h2>
          <p>Cor: {{ item.cor.nome }}</p>
        </div>
  
        <div class="botaoCompras">
          <button @click="$router.push('editar/' + item.id)">
            <img src="../assets/imagens/icone-editar.svg" />
          </button>
  
          <button @click="$router.push('produtos/' + item.id)">
            <img src="../assets/imagens/icone-carrinho.svg" />
          </button>
  
          <button @click="deleteProduct(item.id)">
            <img src="../assets/imagens/icone-deletar.svg" />
          </button>
        </div>
      </div>
  
    </div>
  </template>
  
  <script lang="ts">
  import api from "../api";
  
  export default {
    name: "Shope-page",
    data() {
      return {
        info: null,
      };
    },
    mounted() {
      api
        .get("/produtos")
        .then((response) => (this.info = response.data))
        .catch((error) => console.log(error));
    },
    methods: {
      deleteProduct(id) {
        api
          .delete("/produtos/" + id)
          .then((response) => {
            alert("Produto Deletado");
            console.log(response)
            window.location.reload();
          })
          .catch((error) => console.log(error));
      },
    },
    computed: {
      conv(numero:number) {
        return numero.parseFloat("pt-br", {
          style: "currency",
          currency: "BRL",
        });
      },
    },
  };
  </script>
  
  <style>
  .botaoCompras button {
    background: transparent;
    border: 0;
  }
  .botaoCompras img {
    background: transparent;
    width: 50px;
    border: 30px;
    margin: 10px;
  }
  .botaoCompras {
    display: flex;
    flex-direction: row;
    justify-content: right;
    float: right;
    width: 100%;
  }
  
  .itemLoope {
    display: flex;
    width: 900px;
    position: relative;
    margin: 50px auto;
  }
  
  .infoProdutos {
    text-align: left;
    margin: 10px;
    width: 700px;
  }
  
  .infoProdutos h2 {
    color: #0f4c81;
  }
  
  .imgLoope {
    margin: 25px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-end;
    justify-content: center;
  }
  </style>
  