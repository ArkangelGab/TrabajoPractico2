 const numeroRandom = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
  console.log(numeroRandom);

 if (numeroRandom % 2 == 0) {
   
    console.log("El número: ", numeroRandom," es par")
 } 
else {
    console.log("El número: ",numeroRandom,"es impar")
}