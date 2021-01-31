numPositivos = 0;
for (i = 0; i < 7; i++) {
    if ((num = gets())) {
        if (parseInt(num) > 0) numPositivos++;
    }
}
console.log(numPositivos + " valores positivos");