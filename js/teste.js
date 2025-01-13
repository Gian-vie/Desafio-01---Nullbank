// Função para criar um parágrafo de erro
function criarParagrafoErro(mensagem) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;
    paragrafo.style.color = "red";
    paragrafo.style.margin = 0;
    paragrafo.style.fontFamily = "Poppins, sans-serif";
    return paragrafo;
}

// Função para validar nomes
function validarNomes(nome) {
    const regexNome = /^[a-zA-Z]+$/;
    return regexNome.test(nome);
}

// Função para validar e-mail
function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

// Seletores dos campos
const contatoName = document.querySelector("#contato-nome input");
const contatoNameDiv = contatoName.parentNode;
const contatoLastname = document.querySelector("#contato-sobrenome input");
const contatoLastnameDiv = contatoLastname.parentNode;
const contatoEmail = document.querySelector("#contato-email textarea");
const contatoEmailDiv = contatoEmail.parentNode;
const contatoButtomSubmit = document.querySelector("#contato-submit");

// Evento de validação no botão
contatoButtomSubmit.addEventListener("click", () => {
    // Limpar mensagens de erro anteriores
    document.querySelectorAll(".error-message").forEach((msg) => msg.remove());

    let isValid = true;

    // Validar nome
    if (validarNomes(contatoName.value)) {
        console.log("Nome válido:", contatoName.value);
    } else {
        const erro = criarParagrafoErro("Ops, insira um nome válido!");
        erro.classList.add("error-message");
        contatoNameDiv.appendChild(erro);
        isValid = false;
    }

    // Validar sobrenome
    if (validarNomes(contatoLastname.value)) {
        console.log("Sobrenome válido:", contatoLastname.value);
    } else {
        const erro = geraParagrafoErro("Ops, insira um sobrenome válido!");
        erro.classList.add("mensagem-erro");
        contatoLastnameDiv.appendChild(erro);
        validado = false;
    }

    // Validar e-mail
    if (validarEmail(contatoEmail.value)) {
        console.log("E-mail válido:", contatoEmail.value);
    } else {
        const erro = geraParagrafoErro("Ops, insira um e-mail válido!");
        erro.classList.add("mensagem-erro");
        contatoEmailDiv.appendChild(erro);
        validado = false;
    }

    if (isValid) {
        alert("Todos os campos são válidos! Submetendo...");
    }
});
