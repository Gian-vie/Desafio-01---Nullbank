
const footerEmailDiv = document.querySelector("#footer-email")
const footerEmailInput = document.querySelector("#footer-email input")
const footerEmailButton = document.querySelector("#footer-email-submit")

//ciação de paragrafo de erro 
const paragrafoErro = document.createElement("p")

const erroEmail = document.createTextNode("Ops, insira um email válido!")

//estilo do texto de erro
paragrafoErro.style.color = "red";
paragrafoErro.style.margin = 0; 
paragrafoErro.style.fontFamily = "poppins";

function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

//  clique de submit do email na newslater
footerEmailButton.addEventListener("click", () => {
    console.log("entrou aqui")
    const emailImput = footerEmailInput.value;

    if (paragrafoErro.parentNode) {
        paragrafoErro.parentNode.removeChild(paragrafoErro);
    }

    if(validarEmail(emailImput)){
        console.log("passou " + emailImput)
    }else{
        // texto de errro do email 
        paragrafoErro.appendChild(erroEmail)
        footerEmailDiv.insertAdjacentElement("afterend", paragrafoErro);
    }
})



const contatoName = document.querySelector("#contato-nome input")
const contatoLastname = document.querySelector("#contato-sobrenome input")
const contatoEmail = document.querySelector("#contato-email input")
const contatoMesage = document.querySelector("#contato-mensage input")
const contatoButtomSubmit = document.querySelector("#contato-submit")


contatoButtomSubmit.addEventListener("click", () => {
    console.log("validando")
    const emailImput = contatoEmail.value;

    if (paragrafoErro.parentNode) {
        paragrafoErro.parentNode.removeChild(paragrafoErro);
    }

    if(validarEmail(emailImput)){
        console.log("passou " + emailImput)
    }else{
        // texto de errro do email 
        contatoEmail.insertAdjacentElement("afterend", paragrafoErro);
        paragrafoErro.appendChild(erroEmail)
    }
})
