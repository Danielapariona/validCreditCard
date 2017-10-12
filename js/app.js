function isValidCard(numCard) {
  var arrayReverse = [];
  var state = "";
  var strNum = numCard.toString();

  // Almacena el numero dado al reves
  for (var i = strNum.length - 1; i >= 0; i--) {
    arrayReverse.push(parseInt(strNum[i]));
  }

  //Modifica los valores pares y los modifica.
  for (var i = 1; i < arrayReverse.length-1; i++) {
    if(i % 2 == 0) {
      var result;
      current = arrayReverse[i-1] * 2;
      arrayReverse[i-1] = current % 10 + parseInt(current/10)
    }
  }

  // Se realiza la suma de los números del array arrayReverse
  var sum = 0;
  for (var i = 0; i < arrayReverse.length; i++) {
    sum += arrayReverse[i];
  }

  var state;
  sum % 10 === 0 ? state = "válida" : state = "inválida";
  return state;
}


do {
  var state;
  var numCard = prompt("Ingrese un número de tarjeta de crédito");
  if(numCard.length === 16) {
    numCard = parseInt(numCard);
    document.write("El número ingresado es: " + numCard + '</br>');
    document.write("La tarjeta ingresada es: " + isValidCard(numCard));
  } else if(numCard == "" || numCard.length !== 16 ) {
    document.write("Ha ingresado un número inválido" + '</br>');
  }
} while (!numCard);
