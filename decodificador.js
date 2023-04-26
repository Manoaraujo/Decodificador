

// let letrasSubstituir = /a|e|i|o|u/gi
// let cifras = /'ai'|'enter'|'imes'|'ober'|'ufat'/
// const x = ['a', 'e', 'i', 'o', 'u']
// const y = ['ai', 'enter', 'imes', 'ober', 'ufat']



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

let codificado;
let decodificado;
let original = "germano"

codificado = codificar(original)
console.log(codificado);

decodificar(codificado);
console.log(decodificado);

// codificar("germano");
// let mensagemSecreta = codigo.replace(letrasSubstituir, "x")
// console.log(mensagemSecreta)