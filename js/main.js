function validar() { // nome da minha function


    // declaração dos id

    const nome = document.getElementById('nome')
    const cpf = document.getElementById('cpf')
    const data = document.getElementById('data')
    const sexo = document.getElementById('sexo')
    const email = document.getElementById('email')
    const celular = document.getElementById('celular')
    const nivel = document.getElementById('nivel')
    const media = document.getElementById('media')

    // let que vai receber as informçaões e ser enviada para o alert com os dados dos inputs que faltam 

    let msg = "Os campos a seguir precisam serem preenchidos para completar o cadastro:  \n \n";

    console.log(nome.value === "")

    // NAME INPUT

    if (!nome.value) {
        msg += "nome \n";
        nome.style.outline = 'solid 1px #ff1100'
    }
    else {
        nome.style.outline = null
    }

    // CPF INPUT

    if (!cpf.value) {
        msg += "cpf \n";
        cpf.style.outline = 'solid 1px #ff1100'
    }
    else {
        cpf.style.outline = null
    }

    // DATA INPUT

    if (!data.value) {
        msg += "data \n";
        data.style.outline = 'solid 1px #ff1100'
    }
    else {
        data.style.outline = null
    }

    // SEXO INPUT

    if (!sexo.value) {
        msg += "sexo \n";
        sexo.style.outline = 'solid 1px #ff1100'
    }
    else {
        sexo.style.outline = null
    }

    // EMAIL INPUT

    if (!email.value) {
        msg += "email \n";
        email.style.outline = 'solid 1px #ff1100'
    }
    else {
        email.style.outline = null
    }



    // CELULAR INPUT

    if (!celular.value) {
        msg += "celular \n";
        celular.style.outline = 'solid 2px #ff1100'
    }
    else {
        celular.style.outline = null
    }

    // NIVEL INPUT

    if (!nivel.value) {
        msg += "nivel \n";
        nivel.style.outline = 'solid 1px #ff1100'
    }
    else {
        nivel.style.outline = null
    }

    // MEDIA INPUT

    if (!media.value) {
        msg += "media \n";
        media.style.outline = 'solid 1px #ff1100'
    }
    else {
        media.style.outline = null
    }

    // alert com os campos

    alert(msg)

}

















