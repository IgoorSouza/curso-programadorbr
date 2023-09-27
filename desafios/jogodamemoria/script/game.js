let cartas = []
var cont = 0
var acertos = 0

function flipCard(carta) {
  if (carta.classList.contains("exibir") == false) {
    virar(carta)
    cartas[cont] = carta
    if (cont != 0) {
      let carta1 = cartas[0]
      let carta2 = cartas[1]
      if (carta1.innerHTML == carta2.innerHTML) {
        acertos++
        if (acertos == 10) {
          finalizar()
        }
      } else {
        setTimeout(errou, 700, carta1, carta2)
      }
      cont = 0
    } else {
      cont++
    }
  } else {}
}

function finalizar() {
  
}

function errou (carta1, carta2) {
  carta1.setAttribute("class", "cartas")
  carta2.setAttribute("class", "cartas")
}