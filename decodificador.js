
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
    texto = document.getElementById("texto")
    code(texto.value);
}

function ativaDecode() {
    textoCodificado = document.getElementById("textoCodificado")
    decode(textoCodificado.value);
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

