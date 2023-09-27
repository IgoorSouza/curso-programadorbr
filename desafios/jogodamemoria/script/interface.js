function virar(carta) {
  carta.setAttribute("class", "virarCarta cartas")
  setTimeout(exibir, 200, carta)
}

function exibir(carta) {
  carta.setAttribute("class", "virarCarta exibir cartas")
}

function errou (carta1, carta2) {
  carta1.setAttribute("class", "cartas")
  carta2.setAttribute("class", "cartas")
}

function finalizar() {
  let telaFinal = document.getElementById("gameOver")
  telaFinal.style.display = "flex"
}