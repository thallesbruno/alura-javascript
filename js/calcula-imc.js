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

    var pesoEValido = validaPeso(peso);
    var alturaEValida = validaAltura(altura);

    var tdIMC = pacientes[i].querySelector(".info-imc");

    if(!pesoEValido){
        pesoEValido = false;
        tdIMC.textContent = "Peso inválido!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(!alturaEValida){
        alturaEValida = false;
        tdIMC.textContent = "Altura inválida!";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(alturaEValida && pesoEValido){
        var imc = calculaImc(peso, altura);
        tdIMC.textContent = imc;
    }
};

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else{return false;}
};

function validaAltura(altura){
    if (altura >= 0 && altura <= 3){
        return true;
    } else{
        return false;
    }
};

function calculaImc(peso, altura){
    var imc =0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}