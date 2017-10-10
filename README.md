# validCreditCard
Definir *arrayReverse* como array  
Definir *state* como cadena  
Definir *strNum* como cadena

Para i<-0, hasta longitud de *strNum* - 1, *i* >= 0, decrementa 1 en 1  
  Agregar elemento actual a *arrayReverse*  
fin para

Definir *sumPairs como numero igual a 0  
Definir *oddSum como número e igual a 0

Para i<-0, hasta longitud de *arrayReverse* - 1, *i* >= 0, decrementa 1 en 1  
  position <- *i* + 1  
  current <- 1  

  si position % 2 == 0 entonces  
  Definir *result* como númerico  
  *current* <- arrayReverse[i] * 2  
  si *current* >= 10 entonces  
  result <- *current* % 10 + (*current*/10)  
  *sumPairs* <- *sumPairs* + current  
  de lo contratio  
  *oddSum* <- *oddSum* + arrayReverse[i]  
  Fin del si  
  Fin del si

fin para
