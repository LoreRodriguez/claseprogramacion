
var array = ["queso", "salsa", "oregano", "harina", "levadura", "anchoas", "jamon", "piña", "palmitos", "agua"];
console.log (array);

function ingredientesPizza(array) {
    return typeof pizza === `Boolean`;
}
console.log(ingredientesPizza(`oregano`));

function parImpar(array) {
    var par = [];
    var impar = [];
    for (var i = 0; i < array.length; i++) {
        if ((array[i].length%2) == 0) {
            par.push(array[i])
        } else {
            impar.push(array[i])
        }
    }
    return "los ingredientes pares son " + par; 
}
console.log (parImpar(array));
