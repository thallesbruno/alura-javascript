var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //console.log(paciente); //tr
    //console.log(tdPeso); //td contendo o peso
    //console.log(peso); //peso

    var pesoEValido = true;
    var alturaEValida = true;

    var tdIMC = pacientes[i].querySelector(".info-imc");

    if(peso <= 0 || peso >= 1000){
        pesoEValido = false;
        tdIMC.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(altura <= 0  || altura >= 3.00){
        alturaEValida = false;
        tdIMC.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(alturaEValida && pesoEValido){
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

});

/*titulo.addEventListener("click", function(event){
    //console.log("Esta é uma função anônima!");

});
function mostraMensagem(){
    console.log("Olá, eu fui clicado!");
}*/