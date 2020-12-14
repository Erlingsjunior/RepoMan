//template literals and arrow functions

function testingScope(escopo) { 
  if (escopo === true) { 
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Nãp devo ser tulizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os numeros ${oddsAndEvents((a, b) => a - b)} se encontram ordenados de forma crescente.`)

const maiorPalavra = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = ''

  for (const word of wordArray) {
    if ( word.length > maxLength) {
      maxLength = word.length
      result = word
    }
  }
  return result
} 

console.log(longesWord("Eu adoro comer pastel na feira itapinhamonhangaba"));