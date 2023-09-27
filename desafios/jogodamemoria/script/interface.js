function virar(carta) {
  carta.setAttribute("class", "exibir cartas")
}

function errou (carta1, carta2) {
  carta1.setAttribute("class", "cartas")
  carta2.setAttribute("class", "cartas")
}

function finalizar() {
  alert("Parabéns! Você terminou o jogo.")
  document.getElementById("again")
  again.style.display = "block"
}