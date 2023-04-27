
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

    texto.addEventListener("keypress", function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);

        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();

        } else if (keyCode > 191 && keyCode <= 255) {
            e.preventDefault();
        } else if (keyCode > 64 && keyCode <= 91) {
            e.preventDefault();
        }

    });

    code(textoDigitado.value);
}

function ativaDecode() {
    textoCoded = document.getElementById("textoCodificado");

    textoCodificado.addEventListener("keypress", function (e) {
        var keyCode = (e.keyCode ? e.keyCode : e.which);

        if (keyCode > 47 && keyCode < 58) {
            e.preventDefault();

        } else if (keyCode > 191 && keyCode <= 255) {
            e.preventDefault();
        } else if (keyCode > 64 && keyCode <= 91) {
            e.preventDefault();
        }

    });

    decode(textoCoded.value);
}

function code(a) {

    codificado = codificar(a)
    document.getElementById("textoCodificado").value = codificado
    document.getElementById("texto").value = ""

}

function decode(b) {

    decodificado = decodificar(b)
    document.getElementById("texto").value = decodificado
    document.getElementById("textoCodificado").value = ""
}

let codificado;
let decodificado;

botaoCodificar.onclick = ativaCode;
botaoDecodificar.onclick = ativaDecode;

