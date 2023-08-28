function verificarInputs() {

    let tutor = document.getElementById('tutor').value
    let petName = document.getElementById('petName').value
    let especie = document.getElementById('especie').value
    let imgLink = document.getElementById('imgLink').value
    let birthdate = document.getElementById('birthdate').value

    console.log(tutor);
    console.log(petName);
    console.log(especie);
    console.log(imgLink);
    console.log(birthdate);

    if (tutor == "" || petName == "" || especie == "" || imgLink == "" || birthdate == "") {
        console.log("inputs vazios");
        envieMsg("preencha todos os campos", "erro");
        return true;

    } else if (!isURLValida(imgLink)) {
        evieMsg("URL da imagem inválida!", "erro");

    } else {
        console.log("inouts preenchidos")
        envieMsg("cadastro concluido com sucesso", "sucesso");
        return false;
    }
}
function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}


function envieMsg(msg, tipoMsg) {
    let msgDiv = document.getElementById('msg');
    let msgEnviar = `
    <p class = "${tipoMsg}">${msg}</p>`;
    msgDiv.innerHTML = msgEnviar;

    setTimeout(function () {
        msgDiv.innerHTML = ''
    }, 4000)
}

class Pet {
    constructor(tutor, petName, especie, imgLink, birthdate) {
        this.tutor = tutor
        this.petName = petName;
        this.especie = especie;
        this.imgLink = imgLink;
        this.birthdate = birthdate;
    }
}
const petTest = new Pet("felipe", "alvim", "shitzu", "link",);
console.log(petTest);

function comporPet() {

    let tutor = document.getElementById('tutor').value
    let petName = document.getElementById('petName').value
    let especie = document.getElementById('especie').value
    let imgLink = document.getElementById('imgLink').value
    let birthdate = document.getElementById('birthdate').value

    const pet = new Pet(tutor, petName, especie, imgLink, birthdate);


    bibliotecaPets.adicionarPet(pet);
    console.log(bibliotecaPets)

}

class listaPets {
    constructor() {
        this.listaPetsArray = [];
    }

    adicionarPet(param) {
        console.log("Método");
        if (verificarInputs() == false) {
            console.log("Dentro");


            this.listaPetsArray.push(param);

            limparInputs();
        }
    }
}
const bibliotecaPets = new listaPets();

function limparInputs() {
    tutor = document.getElementById('tutor').value = "";
    petName = document.getElementById('petName').value = "";
    especie = document.getElementById('especie').value = "";
    imgLink = document.getElementById('imgLink').value = "";
    birthdate = document.getElementById('birthdate').value = "";
}

function renderizarConteudo() {

    let content = "";

    bibliotecaPets.listaPetsArray.forEach(pet => {
        content += `
    <div class="petCadastro">
            <p>tutor:${pet.tutor}</p>
            <p>nome do pet:${pet.petName}</p>
            <p>especie:${pet.especie}</p>
            <p>data de aniversário:${pet.birthdate}</p>
            <img src="${pet.imgLink}" alt="${pet.petName}"/>
        </div>
    `;

    });
    document.getElementById("petList").innerHTML = content
}