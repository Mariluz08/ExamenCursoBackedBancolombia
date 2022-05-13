let arreglo1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let arreglo2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];
console.log("Arreglo 1: " + arreglo1);
console.log("Arreglo 2: " + arreglo2);

for (let i = 0; i < arreglo1.length; i++) {

    let resultado = arreglo1[i] + arreglo2[i];
    let resultado2 = arreglo1[i] * arreglo2[i];
    console.log(arreglo1[i] + " + " + arreglo2[i] + " = " + resultado);
    console.log(arreglo1[i] + " * " + arreglo2[i] + " = " + resultado2);
    console.log("----------------------");

}