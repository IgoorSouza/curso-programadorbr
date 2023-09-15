var pontosj1 = document.getElementById("pontosj1")
var pontosj2 = document.getElementById("pontosj2")
var jogador1 = document.getElementById("nomej1")
var jogador2 = document.getElementById("nomej2")
var nomej1 = document.getElementById("j1").value
var nomej2 = document.getElementById("j2").value

function mudarj1() {
  if (nomej1 == nomej2) {
    alert("Por favor, insira nomes diferentes entre os jogadores!")
  } else {
    jogador1.innerText = nomej1;
    pontosj1.innerText = "0 pontos";
  }
}

function mudarj2() {
  if (nomej2 == nomej1){
    alert("Por favor, insira nomes diferentes entre os jogadores!")
  }  else {
    jogador2.innerText = nomej2;
    pontosj2.innerText = "0 pontos";
  }
}