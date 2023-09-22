var i = 1 
var verifier1 = 0;
var verifier2 = 0;
var verifier3 = 0;
var verifier4 = 0;
var verifier5 = 0;
var verifier6 = 0;
var verifier7 = 0;
var verifier8 = 0;
var verifier9 = 0;
var casas = document.getElementsByClassName("casa")
var casa1 = casas[0]
var casa2 = casas[1]
var casa3 = casas[2]
var casa4 = casas[3]
var casa5 = casas[4]
var casa6 = casas[5]
var casa7 = casas[6]
var casa8 = casas[7]
var casa9 = casas[8]
var pontosj1 = document.getElementById("pontosj1")
var pontosj2 = document.getElementById("pontosj1")

function marcar() {
  i = i + 1
}

function marcar1() {
  if (verifier1 == 0) {
    if (i % 2 == 0){
      casa1.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier1 = 1
    } else if (i % 2 == 1) {
      casa1.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier1 = 2
    }
    fimdejogo()
  }
}

function marcar2() {
  if (verifier2 == 0) {
    if (i % 2 == 0){
      casa2.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier2 = 1
    } else if (i % 2 == 1) {
      casa2.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier2 = 2
    }
    fimdejogo()
  }
}

function marcar3() {
  if (verifier3 == 0) {
    if (i % 2 == 0){
      casa3.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier3 = 1
    } else if (i % 2 == 1) {
      casa3.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier3 = 2
    }
    fimdejogo()
  }
}

function marcar4() {
  if (verifier4 == 0) {
    if (i % 2 == 0){
      casa4.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier4 = 1
    } else if (i % 2 == 1) {
      casa4.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier4 = 2
    }
    fimdejogo()
  }
}

function marcar5() {
  if (verifier5 == 0) {
    if (i % 2 == 0){
      casa5.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier5 = 1
    } else if (i % 2 == 1) {
      casa5.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier5 = 2
    }
    fimdejogo()
  }
}

function marcar6() {
  if (verifier6 == 0) {
    if (i % 2 == 0){
      casa6.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier6 = 1
    } else if (i % 2 == 1) {
      casa6.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier6 = 2
    }
    fimdejogo()
  }
}

function marcar7() {
  if (verifier7 == 0) {
    if (i % 2 == 0){
      casa7.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier7 = 1
    } else if (i % 2 == 1) {
      casa7.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier7 = 2
    }
    fimdejogo()
  }
}

function marcar8() {
  if (verifier8 == 0) {
    if (i % 2 == 0){
      casa8.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier8 = 1
    } else if (i % 2 == 1) {
      casa8.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier8 = 2
    }
    fimdejogo()
  }
}

function marcar9() {
  if (verifier9 == 0) {
    if (i % 2 == 0){
      casa9.innerHTML += `<img src="images/jogador1.png"></img>`
      verifier9 = 1
    } else if (i % 2 == 1) {
      casa9.innerHTML += `<img src="images/jogador2.png"></img>`
      verifier9 = 2
    }
    fimdejogo()
  }
}

function fimdejogo() {
  let calcp1 = 0
  let calcp2 = 0
  let start = document.getElementById("start")

  if (verifier1 = 1 && verifier2 == 1 && verifier3 == 1 || verifier4 == 1 && verifier5 == 1 && verifier6 == 1 || verifier7 == 1 && verifier8 == 1 && verifier9 == 1 || verifier1 == 1 && verifier4 == 1 && verifier7 == 1 || verifier2 == 1 && verifier5 == 1 && verifier8 == 1 || verifier3 == 1 && verifier6 == 1 && verifier9 == 1 || verifier1 == 1 && verifier5 == 1 && verifier9 == 1 || verifier3 == 1 && verifier5 == 1 && verifier7 == 1) {

    calcp1 = calcp1 + 1

    pontosj1.innerText = `${calcp1} pontos`
    start.innerText = "Jogador 1"
    i = 0
    setTimeout(resetCasas, 2000)
    
  } else if (verifier1 = 2 && verifier2 == 2 && verifier3 == 2 || verifier4 == 2 && verifier5 == 2 && verifier6 == 2 || verifier7 == 2 && verifier8 == 2 && verifier9 == 2 || verifier1 == 2 && verifier4 == 2 && verifier7 == 2 || verifier2 == 2 && verifier5 == 2 && verifier8 == 2 || verifier3 == 2 && verifier6 == 2 && verifier9 == 2 || verifier1 == 2 && verifier5 == 2 && verifier9 == 2 || verifier3 == 2 && verifier5 == 2 && verifier7 == 2) {

    calcp2 = calcp2 + 1

    pontosj2.innerText = `${calcp2} pontos` 
    start.innerText = "Jogador 2"
    i = 1
    setTimeout(resetCasas, 2000)

  } else if (verifier1 != 0 && verifier2 != 0 && verifier3 != 0 && verifier4 != 0 && verifier5 != 0 && verifier6 != 0 && verifier7 != 0 && verifier8 != 0 && verifier9 != 0) {

    setTimeout(resetCasas, 2000)
  }
}

function resetCasas() {
  casa1.innerHTML = ""
  casa2.innerHTML = ""
  casa3.innerHTML = ""
  casa4.innerHTML = ""
  casa5.innerHTML = ""
  casa6.innerHTML = ""
  casa7.innerHTML = ""
  casa8.innerHTML = ""
  casa9.innerHTML = ""
  verifier1 = 0;
  verifier2 = 0;
  verifier3 = 0;
  verifier4 = 0;
  verifier5 = 0;
  verifier6 = 0;
  verifier7 = 0;
  verifier8 = 0;
  verifier9 = 0;
}

function resetPlacar() {
  pontosj1.innerText = "0 pontos"
  pontosj2.innerText = "0 pontos"
}