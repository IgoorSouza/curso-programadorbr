var audio = document.getElementById("audio")
    audio.volume = 0.2

    function tocar() {
      let confere = audio.currentTime
      let pausado = audio.paused
      let texto = document.getElementById("texto")

      if (confere == 0) {
        audio.currentTime = 1
        audio.play()
        texto.innerText = "Clique na imagem para pausar a música!"
      } else if (confere != 0 && pausado == false) {
        audio.pause()
        texto.innerText = "Clique na imagem para retomar a música!"
      } else if (confere != 0 && pausado == true) {
        audio.play ()
        texto.innerText = "Clique na imagem para pausar a música!"
      }
    }

    function drop() {
      let texto = document.getElementById("texto")

      audio.currentTime = 122
      audio.play()
      texto.innerText = "Clique na imagem para pausar a música!"
    }

    function reiniciar() {
      let confere = audio.currentTime
      let texto = document.getElementById("texto")

      if (confere != 0) {
        audio.currentTime = 1
        audio.play()
        texto.innerText = "Clique na imagem para pausar a música!"
      }
    }

    function pause() {
      let confere = audio.currentTime
      let texto = document.getElementById("texto")

      audio.pause()
      if (confere == 0) {
        texto.innerText = "Clique na imagem para tocar a música!"
      } else {
        texto.innerText = "Clique na imagem para retomar a música!"
      }
    }