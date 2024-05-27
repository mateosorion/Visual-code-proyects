/*Ejercicio 1: Buscar Elemento en un Array
Descripción: Escribe una función que tome un array y un valor 
como argumentos y devuelva true si el valor está presente en el 
array y false en caso contrario.*/

function test(array, value){
    for(let i =0; i< array.length; i++){
if (array[i] === value) {
    return true;
}
    }
    return false
}

console.log(test([1, 2, 3, 4], 5));

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
console.log(reverseString("JavaScript"));