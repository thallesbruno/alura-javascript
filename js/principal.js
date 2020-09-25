var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); //tr
//console.log(tdPeso); //td contendo o peso

console.log(peso); //peso
console.log(altura); //altura

var imc = peso / (altura * altura);
console.log(imc);

var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent = imc;