const calculadora = require("./calculadora.js");
const {
  sumar,
  restar,
  dividir,
  multiplicar,
  modulo,
} = require("./calculadora.js");

let c = console.log;

// const { sumar, restar, dividir, multiplicar, modulo } = calculadora;
// c(calculadora.sumar(2, 4));
// c(calculadora.restar(2, 4));
// c(calculadora.dividir(2, 4));
// c(calculadora.multiplicar(2, 4));
// c(calculadora.modulo(2, 4));

c(calculadora.sumar(2, 4));
c(sumar(2, 4));
c(restar(2, 4));
c(dividir(2, 4));
c(multiplicar(2, 4));
c(modulo(2, 4));
