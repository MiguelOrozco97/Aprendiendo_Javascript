/*
Un restaurante está a punto de calcular la cuenta de un cliente,
al cual se le suma por separadi $2800 + $1300 de comida
y $900 y $650 de bebida.

Crear un programa en javascript que calcule el total de comida,
el total de bebida y el total completo de la cena.
Informar el resultado por consola o por un cartel de alerta

Tener en cuenta lo siguiente:
*Importar el archivo JS desde una página html.
*Abrir el archivo HTML en el navegador y mostrar el resultado
 con un console.log() o un alert().

*/

var totalComida = 2800 + 1300;
var totalBebida = 900 + 650;
var total = totalComida + totalBebida;

console.log("El total de comida es: " + totalComida);
console.log("El total de bebida es: " + totalBebida);
console.log("El total de la cuenta es: " + total);