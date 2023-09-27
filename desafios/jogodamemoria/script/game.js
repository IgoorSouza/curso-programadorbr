var cont = 0
var acertos = 0
var cartas = []

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
          setTimeout(finalizar, 700)
        }
      } else {
        setTimeout(errou, 700, carta1, carta2)
      }
      cont = 0
    } else {
      cont++
    }
  }
}