

class Carro {
    marca;
    cor;
    gastoPorKm;

constructor (marca, cor, gastoPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoPorKm = gastoPorKm;
}

calcularGastodeViagem (distancia, precoCombustivel){
    return distancia * this.gastoPorKm * precoCombustivel;
} 

}

const uno = new Carro ('Fiat', 'vermelho', 1/12);
console.log(uno.calcularGastodeViagem(70, 5));

const palio = new Carro ('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastodeViagem(70, 5));