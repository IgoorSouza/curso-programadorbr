var casasMarcadas = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

var i = 0;
var contp1 = 0;
var contp2 = 0;
var pontosj1 = document.getElementById("pontosj1");
var pontosj2 = document.getElementById("pontosj2");
var iniciar = document.getElementById("start");

function marcar(casa) {
  if (casa.innerHTML) return;

  if (i % 2 == 0) {

    casa.innerHTML = `<img src="images/jogador1.png" alt="Jogador 1">`;

    if (casa == q1) {
      casasMarcadas[0][0] = 1;
    } 
    
    else if (casa == q2) {
      casasMarcadas[0][1] = 1;
    } 
    
    else if (casa == q3) {
      casasMarcadas[0][2] = 1;
    } 
    
    else if (casa == q4) {
      casasMarcadas[1][0] = 1;
    } 
    
    else if (casa == q5) {
      casasMarcadas[1][1] = 1;
    } 
    
    else if (casa == q6) {
      casasMarcadas[1][2] = 1;
    } 
    
    else if (casa == q7) {
      casasMarcadas[2][0] = 1;
    } 
    
    else if (casa == q8) {
      casasMarcadas[2][1] = 1;
    } 
    
    else if (casa == q9) {
      casasMarcadas[2][2] = 1;
    }

    i++;

    if (i > 4) {
      fimdejogo();
    }

  } else if (i % 2 == 1) {

    casa.innerHTML = `<img src="images/jogador2.png" alt="Jogador 2">`;

    if (casa == q1) {
      casasMarcadas[0][0] = 2;
    } 

    else if (casa == q2) {
      casasMarcadas[0][1] = 2;
    } 

    else if (casa == q3) {
      casasMarcadas[0][2] = 2;
    } 

    else if (casa == q4) {
      casasMarcadas[1][0] = 2;
    } 

    else if (casa == q5) {
      casasMarcadas[1][1] = 2;
    } 

    else if (casa == q6) {
      casasMarcadas[1][2] = 2;
    } 

    else if (casa == q7) {
      casasMarcadas[2][0] = 2;
    } 

    else if (casa == q8) {
      casasMarcadas[2][1] = 2;
    } 

    else if (casa == q9) {
      casasMarcadas[2][2] = 2;
    }

    i++;

    if (i > 4) {
      fimdejogo();
    }

  }
}

function fimdejogo() {
  if (
    (casasMarcadas[0][0] == 1 &&
      casasMarcadas[0][1] == 1 &&
      casasMarcadas[0][2] == 1) ||

    (casasMarcadas[0][0] == 1 &&
      casasMarcadas[1][0] == 1 &&
      casasMarcadas[2][0] == 1) ||

    (casasMarcadas[0][0] == 1 &&
      casasMarcadas[1][1] == 1 &&
      casasMarcadas[2][2] == 1) ||

    (casasMarcadas[0][1] == 1 &&
      casasMarcadas[1][1] == 1 &&
      casasMarcadas[2][1] == 1) ||

    (casasMarcadas[0][2] == 1 &&
      casasMarcadas[1][2] == 1 &&
      casasMarcadas[2][2] == 1) ||

    (casasMarcadas[0][2] == 1 &&
      casasMarcadas[1][1] == 1 &&
      casasMarcadas[2][0] == 1) ||

    (casasMarcadas[1][0] == 1 &&
      casasMarcadas[1][1] == 1 &&
      casasMarcadas[1][2] == 1) ||
      
    (casasMarcadas[2][0] == 1 &&
      casasMarcadas[2][1] == 1 &&
      casasMarcadas[2][2] == 1)

  ) {

    setTimeout(() => aviso(1), 100);

    contp1++;
    
    if (contp1 == 1) {
      pontosj1.innerText = "1 ponto";
    } else {
      pontosj1.innerText = `${contp1} pontos`;
    }

    iniciar.innerHTML = "Jogador 1";
    iniciar.style.color = "blue"

    setTimeout(reset, 100);

  } else if (
    (casasMarcadas[0][0] == 2 &&
      casasMarcadas[0][1] == 2 &&
      casasMarcadas[0][2] == 2) ||

    (casasMarcadas[0][0] == 2 &&
      casasMarcadas[1][0] == 2 &&
      casasMarcadas[2][0] == 2) ||

    (casasMarcadas[0][0] == 2 &&
      casasMarcadas[1][1] == 2 &&
      casasMarcadas[2][2] == 2) ||

    (casasMarcadas[0][1] == 2 &&
      casasMarcadas[1][1] == 2 &&
      casasMarcadas[2][1] == 2) ||

    (casasMarcadas[0][2] == 2 &&
      casasMarcadas[1][2] == 2 &&
      casasMarcadas[2][2] == 2) ||

    (casasMarcadas[0][2] == 2 &&
      casasMarcadas[1][1] == 2 &&
      casasMarcadas[2][0] == 2) ||

    (casasMarcadas[1][0] == 2 &&
      casasMarcadas[1][1] == 2 &&
      casasMarcadas[1][2] == 2) ||

    (casasMarcadas[2][0] == 2 &&
      casasMarcadas[2][1] == 2 &&
      casasMarcadas[2][2] == 2)
  ) {

    setTimeout(() => aviso(2), 100);

    contp2++;
    
    if (contp2 == 1) {
      pontosj2.innerText = "1 ponto";
    } else {
      pontosj2.innerText = `${contp2} pontos`;
    }

    iniciar.innerText = "Jogador 2";
    iniciar.style.color = "red"

    setTimeout(reset, 100);

  } else if (
    casasMarcadas[0][0] != 0 &&
    casasMarcadas[0][1] != 0 &&
    casasMarcadas[0][2] != 0 &&
    casasMarcadas[1][0] != 0 &&
    casasMarcadas[1][1] != 0 &&
    casasMarcadas[1][2] != 0 &&
    casasMarcadas[2][0] != 0 &&
    casasMarcadas[2][1] != 0 &&
    casasMarcadas[2][2] != 0
  ) {

    setTimeout(() => aviso(0), 100);

    setTimeout(reset, 100);

  }
}

function aviso(resultado) {
  const avisos = {
    0: "Deu velha! Nenhum dos jogadores receberá pontos.",
    1: "O Jogador 1 ganhou!",
    2: "O Jogador 2 ganhou!"
  }

  alert(avisos[resultado])

  if (resultado == 1) {
    i = 0;
  } else if (resultado == 2) {
    i = 1
  } else {
    i++;
  }
}

function reset() {
  casasMarcadas = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]

  const casas = document.querySelectorAll("#jogo div");

  for (const casa of casas) {
    casa.innerHTML = "";
  }
}

function resetPlacar() {
  contp1 = 0;
  contp2 = 0;
  i = 0;
  start.innerText = "Jogador 1"
  start.style.color = "blue"
  pontosj1.innerText = "0 pontos";
  pontosj2.innerText = "0 pontos";

  reset()
}