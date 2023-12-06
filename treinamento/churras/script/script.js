function calc() {
  let inputAdulto = document.getElementsByTagName("input")[0]
  let inputCrianca = document.getElementsByTagName("input")[1]
  let inputDuracao = document.getElementsByTagName("input")[2]
  document.getElementById("resultado")
  let adulto = inputAdulto.value
  let crianca = inputCrianca.value
  let duracao = inputDuracao.value
  let carne
  let cerveja
  let bebida

  carne = Math.ceil((adulto * 400 + crianca * 200)/1000 * duracao)
  cerveja = Math.ceil((adulto * 1200/355) * duracao) //355 = 1 lata de cerveja
  bebida = Math.ceil((adulto * 0.3 + crianca * 0.15) * duracao)

  if (crianca == 0 && adulto == 0) {
    resultado.innerHTML = "<p>Um churrasco sem pessoas? <br> Que estranho...</p>"
  } else if (duracao == 0) {
    resultado.innerHTML = "<p>Esse churrasco vai mesmo acontecer? Não consigo achar a duração dele...</p>"
  } else {
    resultado.innerHTML = `<p><span>${carne}</span> Kg de Carne</p> <p><span>${cerveja}</span> Latas de Cerveja</p> <p><span>${bebida}</span> Garrafa (s) de 2l de Refrigerante ou de Água</p><p id="obs">OBS.: Os valores são apenas estimativas e podem não representar a realidade.</p>` 
  }
}