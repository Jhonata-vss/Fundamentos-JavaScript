const leia = require("readline-sync")

let numero, contador; 

numero = leia.questionInt("Calcule a tabuadado: ")

for(contador = 1; contador <=10; contador++){
       console.log(numero + " x " + contador + " = " + numero * contador);
}
