window.alert("Ingrese 3 números");

let lista = [];

for (let i = 0; i < 3; i++) {
    let num = parseInt(window.prompt("Ingrese el número " + (i + 1) + ":"));
    lista.push(num);
}

// Algoritmo de ordenamiento burbuja
let n;

do {
    n = 0;
    for (let i = 1; i < lista.length; i++) {
        if (lista[i - 1] > lista[i]) {
            let temp = lista[i - 1];
            lista[i - 1] = lista[i];
            lista[i] = temp;
            n = i;
        }
    }
} while (n !== 0);

// Revisar si los 3 números son iguales
if (lista[0] === lista[lista.length - 1]) {
    document.write("Los 3 números son iguales");
} else {
    document.write("El menor es " + lista[0]);
    document.write("<br/>El mayor es " + lista[lista.length - 1]);
}
