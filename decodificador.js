
let botaoCodificar = document.getElementById('botaoCode')
let botaoDecodificar = document.getElementById('botaoDecode')

function codificar(codigo) {

    let letraE = codigo.replace(/e/gi, "enter")
    let letraI = letraE.replace(/i/gi, "imes")
    let letraA = letraI.replace(/a/gi, "ai")
    let letraO = letraA.replace(/o/gi, "ober")
    return codificado = letraO.replace(/u/gi, "ufat")

}

function decodificar(codificado) {

    let cifraE = codificado.replace(/enter/gi, "e")
    let cifraI = cifraE.replace(/imes/gi, "i")
    let cifraA = cifraI.replace(/ai/gi, "a")
    let cifraO = cifraA.replace(/ober/gi, "o")
    return decodificado = cifraO.replace(/ufat/gi, "u")

}

function ativaCode() {

    textoDigitado = document.getElementById("texto");

    code(textoDigitado.value);
}

function ativaDecode() {

    textoCoded = document.getElementById("textoCodificado");

    decode(textoCoded.value);
}

function code(a) {

    codificado = codificar(a)
    document.getElementById("textoCodificado").style.visibility = "initial"
    document.getElementById("botaoDecode").style.visibility = "initial"

    document.getElementById("textoCodificado").value = codificado
    document.getElementById("texto").value = ""

    document.getElementById("texto").style.visibility = "hidden" // esconder textArea
    // document.getElementById("botaoCode").style.visibility = "hidden" 

}

function decode(b) {

    decodificado = decodificar(b)
    document.getElementById("texto").style.visibility = "initial"
    document.getElementById("botaoCode").style.visibility = "initial"

    document.getElementById("texto").value = decodificado
    document.getElementById("textoCodificado").value = ""

    document.getElementById("textoCodificado").style.visibility = "hidden" // esconder textArea
    // document.getElementById("botaoDecode").style.visibility = "hidden" // esconder botão
}


// cogido para permitir somente letras minusculas

textoDigitado = document.getElementById("texto");

texto.addEventListener("keypress", function (e) {

    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {   //numeros
        e.preventDefault();

    } else if (keyCode > 191 && keyCode <= 255) { //letras acentudas
        e.preventDefault();

    } else if (keyCode > 64 && keyCode <= 91) { // letras maiusculas
        e.preventDefault();
    }

    console.log(keyCode)
});

textoCoded = document.getElementById("textoCodificado");

textoCodificado.addEventListener("keypress", function (e) {

    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {   //numeros
        e.preventDefault();

    } else if (keyCode > 191 && keyCode <= 255) { //letras acentudas
        e.preventDefault();

    } else if (keyCode > 64 && keyCode <= 91) { // letras maiusculas
        e.preventDefault();
    }

});

//--------------------------------------------------------------

// document.getElementById("botaoDecode").style.visibility = "hidden"
// document.getElementById("textoCodificado").style.visibility = "hidden"


let codificado;
let decodificado;

botaoCodificar.onclick = ativaCode;
botaoDecodificar.onclick = ativaDecode;

