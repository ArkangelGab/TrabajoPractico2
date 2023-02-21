
const lista = [];

for (i=0; i<15; i++) {

    const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);

    lista.push(numeroRandom)
   
}

console.log(" 15 números aleatorios: "+ lista)


//dentro del del `for` me va mostrando cada vuelta y suma un numero más cada vez,
//afuera del `for` primero recorre las 15 veces y luego imprime en pantalla la lista final