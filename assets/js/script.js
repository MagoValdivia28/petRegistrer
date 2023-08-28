function verificarImputs(){
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

    if(tutor == ""|| petName == ""|| especie == ""|| imgLink == ""|| birthdate == ""){
        console.log("inputs vazios");
        evieMsg("preencha todos os campos", "erro")
    }else{
        console.log("inouts preenchidos")
        evieMsg("cadastro concluido com sucesso", "sucesso")
    }
}

function envieMsg(msg, tipoMsg){
    let msgDiv = document.getElementById('msg').value
    let msgEnviar =  `
    <p class = "${tipoMsg}">${msg}</p>`;
    msgDiv.innerHTML = msgEnviar;

    setTimeout(function () {
        msgDiv.innerHTML = ''
    }, 4000)
}

class Pet{
    constructor( tutor, petName, especie, imgLink, birthdate){
        this.tutor = tutor
        this.petName = petName;
        this.especie = especie;
        this.imgLink = imgLink;
        this.birthdate = birthdate;
    }
}
const petTest = new Pet("felipe","alvim", "shitzu", "link",);
console.log(petTest);

class listaPets{
    constructor(){
        this.listaPetsArray = [];
    }
    adicionarPet(param){
        if(verificarImputs() == false)
        this.listaPetsArray.push(param);
        
    
    }
}
