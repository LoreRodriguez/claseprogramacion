
const array = ["queso", "salsa", "oregano", "harina", "levadura", "anchoas", "jamon", "piña", "palmitos", "agua"];
console.log (array);

function ingredientesPizza(array) {
    return typeof pizza === `Boolean`;
}
console.log(ingredientesPizza(`oregano`))

function parImpar(array) {
    const par = [];
    const impar = [];
    for (var i = 0; i < array.length; i++) {
        if ((array[i].length%2) == 0) {
            par.push(array[i])
        } else {
            impar.push(array[i])
        }
    }
    return [par,impar]; 
}

console.log (parImpar(array));
