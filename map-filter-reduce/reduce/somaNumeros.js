function somaNumeros(arr) {
    if (!arr || !arr.length) return;
    const soma = arr.reduce((prev, curr) => prev + curr);

    return soma;
}

console.log(somaNumeros([2, 4, 1, 3]));