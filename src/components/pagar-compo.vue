<template>
    <div class="pagarDiv">
      <h3>Pagamento Realizado com Sucesso!</h3>
      <p>Este pagamento foi realizado com:</p>
      <p v-if="calculo.quant100 != 0">{{ calculo.quant100 }}</p>
      <p v-if="calculo.quant50 != 0">{{ calculo.quant50 }}</p>
      <p v-if="calculo.quant20 != 0">{{ calculo.quant20 }}</p>
      <p v-if="calculo.quant10 != 0">{{ calculo.quant10 }}</p>
      <p v-if="calculo.quant5 != 0">{{ calculo.quant5 }}</p>
      <p v-if="calculo.quant2 != 0">{{ calculo.quant2 }}</p>
      <p v-if="calculo.quantRestante != 0">{{ calculo.quantRestante }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { computed } from "vue";
  
  export default {
    props: ["somaFinal"],
  
    setup(props) {
      const calculo = computed(() => {
        let resultado = props.somaFinal;
        let quant100 = 0;
        let sobra = 0;
        let quant50 = 0;
        let quant20 = 0;
        let quant10 = 0;
        let quant5 = 0;
        let quant2 = 0;
        let quantRestante = 0;
  
        if (resultado / 100 > 1) {
          sobra = resultado - Math.floor(resultado / 100) * 100;
          quant100 = Math.floor(resultado / 100) + "  cédulas de R$100,00";
        }
        if (sobra / 50 > 1) {
          quant50 = Math.floor(sobra / 50) + "  cédulas de R$50,00";
          sobra = sobra - Math.floor(sobra / 50) * 50;
        }
        if (sobra / 20 >= 1) {
          quant20 = Math.floor(sobra / 20) + "  cédulas de R$20,00";
          sobra = sobra - Math.floor(sobra / 20) * 20;
        }
        if (sobra / 10 >= 1) {
          quant10 = Math.floor(sobra / 10) + "  cédulas de R$10,00";
  
          sobra = sobra - Math.floor(sobra / 10) * 10;
        }
        if (sobra / 5 > 1) {
          quant5 = Math.floor(sobra / 5) + "  cédulas de R$5,00";
          sobra = sobra - Math.floor(sobra / 5) * 5;
        }
        if (sobra / 2 >= 1) {
          quant2 = Math.floor(sobra / 2) + "  cédulas de R$2,00";
          sobra = sobra - Math.floor(sobra / 2) * 2;
        }
        if (sobra > 0) {
          quantRestante = "Sobrou: R$    " + sobra.toFixed(2);
        }
  
        return {
          quant100,
          sobra,
          quant50,
          quant20,
          quant10,
          quant5,
          quant2,
          quantRestante,
        };
      });
  
      return { calculo: calculo.value };
    },
  };
  </script>
  
  <style>
  .pagarDiv {
    border: 1px solid green;
    width: 350px;
    border-radius: 10px;
    float: right;
    margin-right: 70px;
    color: green;
    padding: 20px;
    margin-bottom: 20px;
  }
  </style>
  