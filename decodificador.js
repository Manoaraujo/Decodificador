
let botaoCodificar = document.getElementById('botaoCode')
let botaoDecodificar = document.getElementById('botaoDecode')


function codificar(codigo) {

    codigo = codigo.replace(/e/gi, "enter")
    codigo = codigo.replace(/i/gi, "imes")
    codigo = codigo.replace(/a/gi, "ai")
    codigo = codigo.replace(/o/gi, "ober")
    return codigo = codigo.replace(/u/gi, "ufat")

}

function decodificar(codificado) {

    codificado = codificado.replace(/enter/gi, "e")
    codificado = codificado.replace(/imes/gi, "i")
    codificado = codificado.replace(/ai/gi, "a")
    codificado = codificado.replace(/ober/gi, "o")
    return codificado = codificado.replace(/ufat/gi, "u")

}

function ativaCodificar() {

    textoDigitado = document.querySelector(".caixaNaoCodificada");

    code(textoDigitado.value);
}

function ativaDecodificar() {

    textoDigitado = document.querySelector(".caixaCodificada");

    decode(textoDigitado.value);
}

function code(a) {

    codigo = codificar(a)
    document.querySelector(".caixaCodificada").style.visibility = "initial"


    document.querySelector(".caixaCodificada").value = codigo
    document.querySelector(".caixaNaoCodificada").value = ""

    document.querySelector(".caixaNaoCodificada").style.visibility = "hidden" // esconder textArea


}

function decode(b) {

    codificado = decodificar(b)
    document.querySelector(".caixaNaoCodificada").style.visibility = "initial"
    document.getElementById("botaoCode").style.visibility = "initial"

    document.querySelector(".caixaNaoCodificada").value = codificado
    document.querySelector(".caixaCodificada").value = ""

    document.querySelector(".caixaCodificada").style.visibility = "hidden" // esconder textArea

}


// codigo para permitir somente letras minusculas

// textoDigitado = document.querySelector("areaTexto");

// texto.addEventListener("keypress", function (e) {

//     var keyCode = (e.keyCode ? e.keyCode : e.which);

//     if (keyCode > 47 && keyCode < 58) {   //numeros
//         e.preventDefault();

//     } else if (keyCode > 191 && keyCode <= 255) { //letras acentudas
//         e.preventDefault();

//     } else if (keyCode > 64 && keyCode <= 91) { // letras maiusculas
//         e.preventDefault();
//     }

// });


botaoCodificar.onclick = ativaCodificar;
botaoDecodificar.onclick = ativaDecodificar;

