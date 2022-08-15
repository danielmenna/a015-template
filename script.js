/* let numero = 0
let numDigitado = +prompt('digite um valor...')
while (numDigitado !== 0) {
  numero = numero + numDigitado
  console.log(numero)
  console.log(numDigitado)
  numDigitado = +prompt('digite um valor...')
}
console.log(`soma: ${numero}`)
 */
/* 
console.log('Prática Guiada II')
const numero = +prompt('digite um valor...')
for (let i = 0; i <= numero; i++) {
  console.log(i)
} */

/* 
console.log('Prática Guiada III')
const listaNumero = [3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < listaNumero.length; i++) {
  console.log(`O indice é ${i} e o número é ${listaNumero[i]}`)
}
 */

console.log('Prática Guiada IV')
let tipoUsuario = prompt('Qual o seu tipo de usuario...').toLowerCase()
while (tipoUsuario !== 'a') {
  console.log(tipoUsuario)
  console.log('Acesso negado!')
  tipoUsuario = prompt('Qual o seu tipo de usuario...').toLowerCase()
}
console.log('Bem-vindo Admin')

console.log('Prática Guiada V')
let tabuada = 0
for (let i = 1; i <= 10; i++) {
  console.log(2 * i)
}

console.log('Prática Guiada VI')
const nomes = ['João', 'Paulo', 'Pedro', 'Vera', 'Maria']
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i].toUpperCase())
}
