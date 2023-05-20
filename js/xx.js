
informacion = JSON.parse(localStorage.getItem('informacion')) || [];
function numero(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;
    setLocalStorageNum(numeroE, nombreE)
    localStorage.setItem('numeroE',numeroE)
    localStorage.setItem('nombreE',nombreE)

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


function setLocalStorageNum(numeroE, nombreE){
    if(numeroE, nombreE){
    const mensaje = alert("Me comunicare pronto!!!");
    informacion.push({arrayNumNew: numeroE, arrayNomNew: nombreE});
    localStorage.setItem("informacion",JSON.stringify(informacion));
    document.getElementById(mensaje);
    }else {
    }
}

function Cookies(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;

    document.cookie = "numero = " + numeroE
    document.cookie = "nombre = " + nombreE


}

function sesionStorage(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;
    sessionStorage.setItem("nombre", nombreE)
    sessionStorage.setItem("numero", numeroE)
    sessionStorage.setItem('informacion', JSON.stringify(informacion))
    imprimir = informacion.map((item)=>{
        console.log(item);
    })
}


function limpiar (){
document.getElementById("numeroE").value = "";
document.getElementById("nombreE").value = "";

}




// function dbindexed() {
//     document.getElementById("guardarBtn").addEventListener("click", dbindexed);
    
//     let openRequest = indexedDB.open("store", 2);
  
//     openRequest.onerror = function(event) {
//       console.error("Error al abrir la base de datos", event.target.error);
//     };
  
//     openRequest.onupgradeneeded = function(event) {
//       let db = event.target.result;
//       if (!db.objectStoreNames.contains("informacion")) {
//         db.createObjectStore("informacion", { keyPath: "id", nombre: nombreE, numero:numeroE });
//       }
//     };
  
//     openRequest.onsuccess = function(event) {
//       const db = event.target.result;
  
//       // Agregar elementos a la base de datos
//       const transaction = db.transaction("informacion", "readwrite");
//       const objectStore = transaction.objectStore("informacion");
  
//       let numeroE = document.getElementById("numeroE").value;
//       let nombreE = document.getElementById("nombreE").value;
//       let id = generateId(); // Generar un ID único para cada elemento
  
//       const data = { id: id, numero: numeroE, nombre: nombreE };
//       const request = objectStore.add(data);
  
//       request.onsuccess = function(event) {
//         console.log("Elemento agregado a la base de datos");
//       };
  
//       transaction.oncomplete = function(event) {
//         console.log("Transacción completada");
//       };
  
//       transaction.onerror = function(event) {
//         console.error("Error en la transacción", event.target.error);
//       };
  
//       // Obtener todos los objetos guardados en la base de datos
//       const getAllRequest = objectStore.getAll();
  
//       getAllRequest.onsuccess = function(event) {
//         const allData = event.target.result;
//         console.log("Objetos guardados en la base de datos:");
//         console.log(allData);
//       };
  
//       db.onversionchange = function() {
//         db.close();
//         alert("La base de datos está desactualizada");
//       };
  
//       // Realiza operaciones en la base de datos aquí
//     };
//   }
  

  

