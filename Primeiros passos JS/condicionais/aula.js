

const numero = 11;

const isnumeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (isnumeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log ('Não');
}


