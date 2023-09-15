var i = 1 
var marcador = 0;
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

function marcar() {
  i = i + 1
  marcador = i % 2
}

function marcar1() {
  if (verifier1 == 1) {

  } else if (i % 2 == 0){
    casa1.innerHTML += `<img src="images/jogador1.png"></img>`
    
  } else if (i % 2 == 1) {
    casa1.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier1 = 1;
}

function marcar2() {
  if (verifier2 == 1) {

  } else if (i % 2 == 0){
    casa2.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa2.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier2 = 1;
}

function marcar3() {
  if (verifier3 == 1) {

  } else if (i % 2 == 0){
    casa3.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa3.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier3 = 1;
}

function marcar4() {
  if (verifier4 == 1) {

  } else if (i % 2 == 0){
    casa4.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa4.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier4 = 1;
}

function marcar5() {
  if (verifier5 == 1) {

  } else if (i % 2 == 0){
    casa5.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa5.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier5 = 1;
}

function marcar6() {
  if (verifier6 == 1) {

  } else if (i % 2 == 0){
    casa6.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa6.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier6 = 1;
}
function marcar7() {
  if (verifier7 == 1) {

  } else if (i % 2 == 0){
    casa7.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa7.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier7 = 1;
}

function marcar8() {
  if (verifier8 == 1) {

  } else if (i % 2 == 0){
    casa8.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa8.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier8 = 1;
}

function marcar9() {
  if (verifier9 == 1) {

  } else if (i % 2 == 0){
    casa9.innerHTML += `<img src="images/jogador1.png"></img>`
  } else if (i % 2 == 1) {
    casa9.innerHTML += `<img src="images/jogador2.png"></img>`
  }
  verifier9 = 1;
}