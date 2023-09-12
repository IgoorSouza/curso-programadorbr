function inscrever() {
  let camponome = document.getElementById("nome")
  let campoemail= document.getElementById("email")
  let nome = camponome.value
  let email = campoemail.value

  if (nome == "" && email == "") {
    window.alert('Os campos nome e email estão vazios!')
  } else if (nome == "") {
    window.alert('O campo nome está vazio!')
  } else if (email == "") {
    window.alert('O campo email está vazio!')
  } else {
    window.alert('Inscricão realizada com sucesso!')
  }
}