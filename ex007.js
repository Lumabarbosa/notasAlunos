const prompt = require('prompt-sync')()

var notaUm = Number(prompt('Digite a 1ª nota: '))
var notaDois = Number(prompt('Digite a 2ª nota: '))
var notaTres = Number(prompt('Digite a 3ª nota: '))
var soma = notaUm + notaDois + notaTres
var media = soma / 3

var resultado = media >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado)
