// import { calculadora } from "./calculadora.mjs";
let c = console.log;
import { sumar, restar, multiplicar, dividir, modulo } from "./calculadora.mjs";

// const { sumar, restar, multiplicar, dividir, modulo } = calculadora;

// c(calculadora.sumar(2, 4));
// c(calculadora.restar(2, 4));
// c(calculadora.dividir(2, 4));
// c(calculadora.multiplicar(2, 4));
// c(calculadora.modulo(2, 4));

// c(calculadora.sumar(2, 4));
c(sumar(2, 4));
c(restar(2, 4));
c(dividir(2, 4));
c(multiplicar(2, 4));
c(modulo(2, 4));
