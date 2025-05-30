//criação de paragrafo de erro
function geraParagrafoErro(mensagem) {
  const paragrafoErro = document.createElement("p");
  paragrafoErro.textContent = mensagem;
  paragrafoErro.style.color = "red";
  paragrafoErro.style.margin = 0;
  paragrafoErro.style.fontFamily = "poppins";
  paragrafoErro.style.fontSize = "14px";
  return paragrafoErro;
}

//funçoes de validação
function validarEmail(email) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexEmail.test(email);
}

function validarNomes(nome) {
  const regexEmail = /^(?=.{3,25}$)[a-zA-Z0-9]/;
  return regexEmail.test(nome);
}
// contato page

const contatoName = document.querySelector("#contato-nome input");
const contatoNameDiv = contatoName.parentNode;
const contatoLastname = document.querySelector("#contato-sobrenome input");
const contatoLastnameDiv = contatoLastname.parentNode;
const contatoEmail = document.querySelector("#contato-email input");
const contatoEmailDiv = contatoEmail.parentNode;
const contatoMesage = document.querySelector("#contato-mensage textarea");
const contatoMesageDiv = contatoMesage.parentNode;
const contatoButtomSubmit = document.querySelector("#contato-submit");

contatoButtomSubmit.addEventListener("click", () => {
  console.log("validando");
  const nomeInput = contatoName.value;
  const lastNameInput = contatoLastname.value;
  const emailInput = contatoEmail.value;
  const mensagemInput = contatoMesage.value;


  let validado = true;

  document.querySelectorAll(".mensagem-erro").forEach((msg) => msg.remove());

  if (validarNomes(nomeInput)) {
    console.log("Nome " + nomeInput)
    // setItem(Name, nomeInput);
  } else {
    const erro = geraParagrafoErro("Ops, insira um nome válido!");
    erro.classList.add("mensagem-erro");
    contatoNameDiv.appendChild(erro);
    validado = false;
  }

  if (validarNomes(lastNameInput)) {
    console.log("Sobrenome " + lastNameInput)
    // setItem(LastName, lastNameInput);
  } else {
    const erro = geraParagrafoErro("Ops, insira um sobrenome válido!");
    erro.classList.add("mensagem-erro");
    contatoLastnameDiv.appendChild(erro);
    validado = false;
  }

  if (validarEmail(emailInput)) {
    console.log("Email " + emailInput)
    // setItem(Email, emailInput);
  } else {
    const erro = geraParagrafoErro("Ops, insira um e-mail válido!");
    erro.classList.add("mensagem-erro");
    contatoEmailDiv.appendChild(erro);
    validado = false;
  }


  if (mensagemInput.trim() === "") {
    const erro = geraParagrafoErro("Ops, a mensagem está vazia!");
    erro.classList.add("mensagem-erro");
    contatoMesageDiv.appendChild(erro);
    validado = false;
    } else {
        console.log("mensagem: " + mensagemInput)
        // setItem(Mensagem, mensagemInput);
    }

    if(validado === true){
        console.log("valores armazenados")
        localStorage.setItem("Name", nomeInput);
        localStorage.setItem("LastName", lastNameInput);
        localStorage.setItem("Email", emailInput);
        localStorage.setItem("Mensagem", mensagemInput);
    }
});
