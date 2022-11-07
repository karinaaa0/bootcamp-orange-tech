/*Faça um programa para calcular o valor gasto de uma viagem.

Você terá 3 váriaveis. Sendo elas:
1 - Preço do combustível
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem. */

const precoCombustivel = 5.79;
const kmPorLitros = 12; 
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel; 


console.log (valorGasto.toFixed(2));
