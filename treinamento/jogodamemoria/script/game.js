var tempo
var cont = 0
var acertos = 0
var cartas = []
let cards = null
let techs = ['bootstrap', 'css', 'electron', 'firebase', 'html', 'javascript', 'jquery', 'mongo', 'node', 'react']

function startGame() {
  tempo = setInterval(timer, 1000)
  acertos = 0

  let telaFinal = document.getElementById("gameOver")
  telaFinal.style.display = "none"

  cards = criarCartas(techs)
  embaralhar(cards)
  inicializarCartas(cards)
}

function inicializarCartas(cards) {
  let container = document.getElementById("container")
  container.innerHTML = null

  cards.forEach(card => {
    let cardElement = document.createElement('div')
    cardElement.id = card.id
    cardElement.classList.add('cartas')
    cardElement.dataset.icon = card.icon
    cardElement.setAttribute("onclick", `flipCard(${card.id})`)
    cardElement.setAttribute("class", "cartas")
    cardElement.innerHTML = "<p>&lt/&gt</p>"
    cardElement.innerHTML += `<img src="images/${card.icon}.png" alt="${card.icon}">`

    container.appendChild(cardElement)
  })
}

function criarCartas(techs) {
  let cards = []

  techs.forEach((tech) => {
    cards.push(criarPar(tech))
  })

  return cards.flatMap(pair => pair)
}

function criarPar(tech) {
  return [{
    id: criarId(tech),
    icon: tech,
    flipped: false
  }, {
    id: criarId(tech),
    icon: tech,
    flipped: false
  }]
}

function criarId(tech) {
  return tech + parseInt(Math.random() * 1000)
}

function embaralhar(cards) {
  let currentIndex = cards.length
  let randomIndex = 0

  while(currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
  }
}

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
          clearInterval(tempo)
          setTimeout(finalizar(), 700)
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