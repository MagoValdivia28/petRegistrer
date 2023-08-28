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
