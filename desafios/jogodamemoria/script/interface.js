var erros = 10
var minutos = 0
var segundos = 0

function timer() {
  segundos++
  if (segundos == 60) {
    segundos = 0
    minutos++
  }
}

function virar(carta) {
  carta.setAttribute("class", "virarCarta cartas")
  setTimeout(exibir, 200, carta)
}

function exibir(carta) {
  carta.setAttribute("class", "virarCarta exibir cartas")
}

function errou (carta1, carta2) {
  erros++
  carta1.setAttribute("class", "cartas")
  carta2.setAttribute("class", "cartas")
}

function finalizar() {
  let telaFinal = document.getElementById("gameOver")
  telaFinal.innerHTML = `<h1>Parabéns, você completou o jogo!</h1>
                         <button onclick="startGame()">Jogar Novamente</button>
                         <p>Você virou as cartas um total de ${erros} vezes e levou ${minutos} minuto (s) e ${segundos} segundos para completar o jogo.</p>`

  telaFinal.style.display = "flex"

  erros = 10
  minutos = 0
  segundos = 0
}