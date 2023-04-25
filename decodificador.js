

// let letrasSubstituir = /a|e|i|o|u/gi
// let cifras = /'ai'|'enter'|'imes'|'ober'|'ufat'/
// const x = ['a', 'e', 'i', 'o', 'u']
// const y = ['ai', 'enter', 'imes', 'ober', 'ufat']

let letraU;
let cifraU

function codificar(codigo) {

    let letraE = codigo.replace(/e/gi, "enter")
    let letraI = letraE.replace(/i/gi, "imes")
    let letraA = letraI.replace(/a/gi, "ai")
    let letraO = letraA.replace(/o/gi, "ober")
    return letraU = letraO.replace(/u/gi, "ufat")

}

function decodificar(codificado) {

    let cifraE = codificado.replace(/enter/gi, "e")
    let cifraI = cifraE.replace(/imes/gi, "i")
    let cifraA = cifraI.replace(/ai/gi, "a")
    let cifraO = cifraA.replace(/ober/gi, "o")
    return cifraU = cifraO.replace(/ufat/gi, "u")

}


letraU = codificar("germano")
console.log(letraU);

decodificar(letraU);
console.log(cifraU);

// codificar("germano");
// let mensagemSecreta = codigo.replace(letrasSubstituir, "x")
// console.log(mensagemSecreta)