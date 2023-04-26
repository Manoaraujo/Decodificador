
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

function testecode() {
    texto = document.getElementById("texto")
    code(texto.value);
}

function code(a) {

    codificado = codificar(a)
    texto.innerHTML = codificado

}

function decode() {

    decodificado = decodificar(codificado)
    texto.innerHTML = decodificado
}

let codificado;
let decodificado;

botaoCodificar.onclick = testecode;
botaoDecodificar.onclick = decode;

