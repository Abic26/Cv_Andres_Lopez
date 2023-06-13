  
informacion = JSON.parse(localStorage.getItem('informacion')) || [];
var idRandom = Array.from({length:5}, ()=> Math.random().toString(36).charAt(2)).join('')

function numero(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;
    let id = idRandom
    setLocalStorageNum(numeroE, nombreE, id)
    localStorage.setItem('numeroE',numeroE)
    localStorage.setItem('nombreE',nombreE)
    localStorage.setItem('idRandom', id)


}
document.getElementById('click', numero)

function enviarMensaje(){
    let numeroE = localStorage.getItem('numeroE')
    if(numeroE){
        const url = `https://api.whatsapp.com/send?phone=${3186078770}&text=Hola,%20es%20un%20gusto%20poderte%20atender.`;
        window.open(url, '_blank');
        
    } else {
        alert('Por favor, guarde el numero.')
    }
}


function setLocalStorageNum(numeroE, nombreE, id){
    if(numeroE, nombreE, id){
    const mensaje = alert("Me comunicare pronto!!!");
    informacion.push({id : idRandom ,arrayNumNew: numeroE, arrayNomNew: nombreE});
    localStorage.setItem("informacion",JSON.stringify(informacion));
    document.getElementById(mensaje);
    }else {
    }
}

function Cookies(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;
    let id = idRandom
    document.cookie = "id = " + id
    document.cookie = "numero = " + numeroE
    document.cookie = "nombre = " + nombreE


}

function sesionStorage(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;
    let id = idRandom
    sessionStorage.setItem("nombre", nombreE)
    sessionStorage.setItem("numero", numeroE)
    sessionStorage.setItem('informacion', JSON.stringify(informacion))
    localStorage.setItem('idRandom', id)
    imprimir = informacion.map((item)=>{
        console.log(item);
    })
}


function limpiar (){
document.getElementById("numeroE").value = "";
document.getElementById("nombreE").value = "";

}

function baseDatos(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;
    let id = idRandom
    
    var user = {
        id: idRandom,
        nombreE:nombreE,
        numeroE: numeroE,
    }

    console.log(user);

    //Open data base
    var dataBase = window.indexedDB.open("myDataBase",3);

    // Ejecución Correcta Crear o Abrir Base Datos
    dataBase.onsuccess = (event)=>{

        console.log("Creación o Error en Abrir Base Datos Correcta !!");
        let db = dataBase.result;
        console.log(db);
        var instanceTransaction = db.transaction('users','readwrite').objectStore('users');
        //Guardar Datos
        var saveData = instanceTransaction.add(user);

        alert("Datos Guardados");

        var dataInfo = instanceTransaction.getAll();


        dataInfo.onsuccess =(event) =>{

            let data = dataInfo.result;

            console.log(data);

            var infoStructure = "";

            data.map((element)=>{
                infoStructure += "Nombre: " + element.nombreE;
                infoStructure += "Numero: " + element.numeroE;
                infoStructure += "<br>";
            });
        }
        

    }

    // Ejecución al iniciar base datos

    dataBase.onupgradeneeded = (event)=>{

    console.log("Creación Object")

     let db = event.target.result;

     var createObjectData = db.createObjectStore("users", { keyPath: 'id'});

    }


    // Ejecución Error Abrir Base Datos
    dataBase.onerror = (event)=>{
        console.log("Error Creación o Error en Abrir Base Datos !!!");
    }




}

