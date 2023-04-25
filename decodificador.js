
let codigo = "sera que deu certo?"

// let letrasSubstituir = /a|e|i|o|u/gi
// let cifras = /'ai'|'enter'|'imes'|'ober'|'ufat'/
// const x = ['a', 'e', 'i', 'o', 'u']
// const y = ['ai', 'enter', 'imes', 'ober', 'ufat']

function codificar() {

    let letraE = codigo.replace(/e/gi, "enter")
    let letraI = letraE.replace(/i/gi, "imes")
    let letraA = letraI.replace(/a/gi, "ai")
    let letraO = letraA.replace(/o/gi, "ober")
    let letraU = letraO.replace(/u/gi, "ufat")
    console.log(letraU);
}

function decodificar() {

    let cifraE = codificado.replace(/enter/gi, "e")
    let cifraI = cifraE.replace(/imes/gi, "i")
    let cifraA = cifraI.replace(/ai/gi, "a")
    let cifraO = cifraA.replace(/ober/gi, "o")
    let cifraU = cifraO.replace(/ufat/gi, "u")
    console.log(cifraU);
}

codificar();

let codificado = 'senterrai qufatenter denterufat centerrtober ?'

decodificar();


// let mensagemSecreta = codigo.replace(letrasSubstituir, "x")
// console.log(mensagemSecreta)