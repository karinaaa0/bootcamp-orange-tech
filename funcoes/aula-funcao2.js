function escrevaMeuNome(nome){
  return ('Meu nome é: ' + nome);
}

function verificarMaiorIdade(idade){
if (idade >= 18){
    console.log (escrevaMeuNome ('Karina ' ) + 'Maior de idade');
} else {
    console.log('Menor de idade');
}
}

verificarMaiorIdade(18);