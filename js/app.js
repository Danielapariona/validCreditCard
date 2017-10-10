function isValidCard(numCard) {
  var arrayReverse = [];
  var state = "";
  var strNum = numCard.toString();
  for (var i = strNum.length - 1; i >= 0; i--) {
    arrayReverse.push(parseInt(strNum[i]));
  }

  var sumPairs = 0; // Almacena la suma de los pares que cumplen la condición
  var oddSum = 0; // Almacena la suma de los números impares
  for (var i = 0; i < arrayReverse.length; i++) {
    var position = i + 1; // Se suma 1 para que la posición empiece con 1
    var current = 1;
    if(position % 2 == 0) { // Si la posición es par se multiplica por 2 y se suma sus cifras
      var result;
      current = arrayReverse[i] * 2;
      current >= 10 ? (result = (current) % 10 + parseInt(current/10),sumPairs += result) : (sumPairs += current);
    } else {
      oddSum += arrayReverse[i];
    }
  }
  (sumPairs + oddSum) % 10 == 0 ? state = "válida" : state = "inválida";
  return state;
}

do {
  var state;
  var numCard = prompt("Ingrese un número de tarjeta de crédito");
  if(numCard == "") {
    alert("No ha ingresado ningún número");
  } else if (numCard.length < 16 || numCard.length > 16 ){
    document.write("Ha ingresado un número diferente a 16 digitos: Número inválido");
  } else {
    numCard = parseInt(numCard);
    document.write("El número ingresado es: " + numCard + '</br>');
    document.write("La tarjeta ingresada es: " + isValidCard(numCard));
  }
} while (!numCard);
