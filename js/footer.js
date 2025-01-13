// criação de paragrafo de erro 
const paragrafoErro = document.createElement("p")

// textos de erro
const erroName = document.createTextNode("Ops, insira um nome válido!")
const erroLastname = document.createTextNode("Ops, insira um sobrenome válido!")
const erroEmail = document.createTextNode("Ops, insira um email válido!")

//estilo do texto de erro
paragrafoErro.style.color = "red";
paragrafoErro.style.margin = 0; 
paragrafoErro.style.fontFamily = "poppins";



const footerEmailDiv = document.querySelector("#footer-email")
const footerEmailInput = document.querySelector("#footer-email input")
const footerEmailButton = document.querySelector("#footer-email-submit")

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
        footerEmailDiv.insertAdjacentElement("afterend", paragrafoErro);
        paragrafoErro.appendChild(erroEmail)
    }
})
