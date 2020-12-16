const harryTrivia = [
  'Harry Potter e a pedra filosofal',
  'Harry Potter e a camara secreta',
  'Harry Potter e o prisioneiro de Azkaban',
  'Harry Potter e o cálice de fogo',
  'Harry Potter e a ordem da fênix',
  'Harry Potter e o enigma do principe',
  'Harry Potter e as reliquias da morte',
];

harryTrivia.forEach(function (index, value) {
  console.log(value, index);
});

/*const celular = function(){
  this.cor = "prata"
  this.ligar = function() {
    console.log("Discando para meu amor")
    return "chamando"
  }
}

let objeto = new celular();

console.log(objeto.ligar());*/

class celular {
  constructor() {
    this.cor = 'prata';
  }

  ligar() {
    console.log('ligando denovo');
    return 'é muito amor';
  }
}

let objeto = new celular();
console.log(objeto.ligar());
