
let textCardModal = document.querySelector(`.cardModal`)
let modal = document.querySelector(`.modal`)

function criarFom(e) {
  e.preventDefault()
  modal.classList.add(`openModal`)
  textCardModal.innerHTML = `
  <p><strong>Nome:</strong> ${document.querySelector(`#nome`).value}</p>
  <p><strong>Email:</strong> ${document.querySelector(`#email`).value}</p>
  <p><strong>Senha:</strong> ${document.querySelector(`#senha`).value}<p>
  <button class="buttonModal" onClick="closedModal()">Sair</button>
  `
}

function closedModal() {
  modal.classList.remove(`openModal`)
}