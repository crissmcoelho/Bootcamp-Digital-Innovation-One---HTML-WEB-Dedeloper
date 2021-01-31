var valorDistancia = parseInt(gets());
var valorCombustivel = parseFloat(gets());
var valorConsumoMedio = parseFloat(valorDistancia / valorCombustivel).toFixed(3);
console.log(valorConsumoMedio + " km/l");
