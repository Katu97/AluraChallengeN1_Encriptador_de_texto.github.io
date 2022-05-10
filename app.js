function mostrarmensaje(mensaje){
    console.log(mensaje);

    document.getElementById("borrar1").style.display = "none";
    document.getElementById("borrar2").style.display = "none";
    document.getElementById("borrar3").style.display = "none";
    document.getElementById("aparecer").style.display = "block";
    document.getElementById("botoncopiar").style.display = "block";
    document.getElementById("mensajeprocesado").innerHTML = mensaje;
}

function encriptarMensaje(){
    let texto = document.getElementById("textarea").value.toLowerCase();
    
    if(texto != ""){
        let textoEncriptado = texto.replace(/e/igm, "enter");
        textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
        textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
        textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
        textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

        mostrarmensaje(textoEncriptado);
        document.getElementById("textarea").value = "";
    } else {
        alert("No se ha ingresado un mensaje");
    }
  
}

function desencriptarMensaje(){
    let texto = document.getElementById("textarea").value.toLowerCase();

    if (texto != ""){
        let textodesencriptado = texto.replace(/ai/igm, "a");
        textodesencriptado = textodesencriptado.replace(/enter/igm, "e");
        textodesencriptado = textodesencriptado.replace(/imes/igm, "i");
        textodesencriptado = textodesencriptado.replace(/ober/igm, "o");
        textodesencriptado = textodesencriptado.replace(/ufat/igm, "u");

        mostrarmensaje(textodesencriptado);
        document.getElementById("textarea").value = "";
    } else {
        alert("No se ha ingresado un mensaje");
    }
    
}   

function copiarMensaje(){
    let mensajeProcesado = document.getElementById("mensajeprocesado").innerHTML;
    navigator.clipboard.writeText(mensajeProcesado);
    alert("Mensaje copiado!");
}

let texto = document.getElementById("textarea").value.toLowerCase();
let mensajeProcesado = document.getElementById("mensajeprocesado");
let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let botonCopiar = document.getElementById("botoncopiar");

botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;