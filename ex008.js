const prompt = require('prompt-sync')()

var notaUm = parseFloat(prompt('Digite a 1ª nota: '))
var notaDois = parseFloat(prompt('Digite a 2ª nota: '))
var notaTres = parseFloat(21 - (notaUm + notaDois))

console.log(`Para atingir a média 7,0 o aluno deve tirar na terceira prova ${notaTres.toFixed(2)}`)