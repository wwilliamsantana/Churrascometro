var inputAdultos = document.getElementById('adultos')
var inputCriancas = document.getElementById('criancas')
var inputDuracao = document.getElementById('duracao')
var resultado = document.getElementById('resultado')

function resultados() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let valorCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas
  let valorCerveja = cervejaPP(duracao) * adultos
  let valorBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas

  resultado.innerHTML = `<h3>Você vai precisar de: </h3>`
  resultado.innerHTML += `<p>${valorCarne / 1000} Kg de Carne </p>`
  resultado.innerHTML += `<p>${Math.ceil(
    valorCerveja / 355
  )} Latas de Cerveja </p>`
  resultado.innerHTML += `<p>${Math.ceil(
    valorBebidas / 2000
  )} Garrafas de Bebidas </p>`
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}
function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}
function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
