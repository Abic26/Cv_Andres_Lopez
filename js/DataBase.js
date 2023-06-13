function EnviarBaseDatos(){
    let numeroE = document.getElementById("numeroE");
    let nombreE = document.getElementById("nombreE");

    let datos = {
        nombreE: nombreE.value,
        numeroE: numeroE.value,
    }

    let url = "http://localhost:8000/api/contactos"
let parametros ={
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(datos)

}
fetch(url,parametros).then(response =>{
        console.log(response);
        console.log(response.json());
        if(response.status == 201 || response.status == 200){
            alert("Datos guardados en DB!!");
            const url = `https://api.whatsapp.com/send?phone=${3186078770}&text=Hola,%20es%20un%20gusto%20poderte%20atender.`;
            window.open(url, '_blank');
            numeroE.value = "";
            nombreE.value = "";
        }else{
    
            alert("Error en la creación de los datos o Por favor, guarde el numero.!!");
    
        }

    })
    return true;

}
