var audio = document.getElementById("audio")
var texto = document.getElementById("texto")
audio.volume = 0.2

function tocar() {
  let tempo = audio.currentTime
  let pausado = audio.paused

  if (tempo == 0) {
    audio.currentTime = 1
    audio.play()
    texto.innerText = "Clique na imagem para pausar a música!"
  } else if (tempo != 0 && pausado == false) {
      audio.pause()
      texto.innerText = "Clique na imagem para retomar a música!"
  } else if (tempo != 0 && pausado == true) {
      audio.play ()
      texto.innerText = "Clique na imagem para pausar a música!"
  }
}

function drop() {
  audio.currentTime = 122
  audio.play()
  texto.innerText = "Clique na imagem para pausar a música!"
}

function reiniciar() {
  let tempo = audio.currentTime

  if (tempo != 0) {
    audio.currentTime = 1
    audio.play()
    texto.innerText = "Clique na imagem para pausar a música!"
  }
}

function pause() {
  let tempo = audio.currentTime

  audio.pause()
  if (tempo == 0) {
    texto.innerText = "Clique na imagem para tocar a música!"
  } else {
    texto.innerText = "Clique na imagem para retomar a música!"
  }
}