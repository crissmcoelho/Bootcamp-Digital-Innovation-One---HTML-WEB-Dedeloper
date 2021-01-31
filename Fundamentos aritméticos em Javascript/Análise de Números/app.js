var numPar = 0,
    numImpar = 0,
    numPostitivo = 0,
    numNegativo = 0;

for (var i = 0; i < 5; i++) {
    var num = parseInt(gets());
    if (num % 2 == 0) numPar++;
    if (num % 2 == -1) numImpar++;
    if (num % 2 == 1) numImpar++;
    if (num > 0) numPostitivo++;
    if (num < 0) numNegativo++;
}

console.log(numPar + " valor(es) par(es)");
console.log(numImpar + " valor(es) impar(es)");
console.log(numPostitivo + " valor(es) positivo(s)");
console.log(numNegativo + " valor(es) negativo(s)");