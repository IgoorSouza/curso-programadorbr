function calc() {
  let inputAdulto = document.getElementsByTagName("input")[0]
  let inputCrianca = document.getElementsByTagName("input")[1]
  let inputDuracao = document.getElementsByTagName("input")[2]
  let div = document.getElementById("resultado")
  let adulto = inputAdulto.value
  let crianca = inputCrianca.value
  let duracao = inputDuracao.value
  let carne
  let cerveja
  let bebida

  if (duracao <= 5) {
    carne = adulto * 0.400 + crianca * 0.200
    cerveja = Math.ceil(adulto * 1200/355) //355 = 1 lata de cerveja
    bebida = Math.ceil(adulto * 0.5 + crianca * 0.25)
  } else {
    carne = adulto * 0.65 + crianca * 0.325
    cerveja = Math.ceil(adulto * 2000 / 355)
    bebida = Math.ceil(adulto * 0.75 + crianca * 0.375)
  }

  resultado.innerHTML = `<p>${carne} Kg de Carne</p> <p>${cerveja} Latas de Cerveja</p> <p>${bebida} Pet's 2l de Bebidas</p>` 
}