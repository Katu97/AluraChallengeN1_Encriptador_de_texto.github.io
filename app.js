// FUNCIONES

// Funcion encriptar
function encriptarMensaje(){
    let texto = document.getElementById("textarea").value; // .value.toLowerCase(); hacer las letras minusculas
    mensajeCorrecto(texto);

    if(texto == ""){
        nohaymensaje();
    } else if(bandera == false){
        alert("Se debe ingresar solo texto en minúscula y sin acentos");
        cantLetras = 0;
    } else {
        let textoEncriptado = texto.replace(/e/igm, "enter");
        textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
        textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
        textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
        textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

        mostrarmensaje(textoEncriptado);
        document.getElementById("textarea").value = "";
        bandera = false;
        cantLetras = 0;
    }
  
}

// Funcion desencriptar
function desencriptarMensaje(){
    let texto = document.getElementById("textarea").value;
    mensajeCorrecto(texto);

    if(texto == ""){
        nohaymensaje();
    } else if(bandera == false){
        alert("Se debe ingresar solo texto en minúscula y sin acentos");
        cantLetras = 0;
    } else {
        let textodesencriptado = texto.replace(/ai/igm, "a");
        textodesencriptado = textodesencriptado.replace(/enter/igm, "e");
        textodesencriptado = textodesencriptado.replace(/imes/igm, "i");
        textodesencriptado = textodesencriptado.replace(/ober/igm, "o");
        textodesencriptado = textodesencriptado.replace(/ufat/igm, "u");

        mostrarmensaje(textodesencriptado);
        document.getElementById("textarea").value = "";
        bandera = false;
        cantLetras = 0;
    }

}  

//Funcion que evalua que se cumplan las condiciones de escritura
function mensajeCorrecto(mensaje){
    for (let i = 0; i < mensaje.length; i++){
        //console.log(mensaje.charCodeAt(i)); //muestra codigo ASCII de cada signo
        if((mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122) || (mensaje.charCodeAt(i) == 32) || (mensaje.charCodeAt(i) == 241) || (mensaje.charCodeAt(i) == 10)){
            cantLetras = cantLetras + 1;
        }
    }

    if(cantLetras == mensaje.length){
        bandera = true;
    }
}

// Funcion que borra alertas y muestra mensaje encriptado o desencriptado
function mostrarmensaje(mensaje){
    console.log(mensaje);

    document.getElementById("borrar1").style.display = "none";
    document.getElementById("borrar2").style.display = "none";
    document.getElementById("borrar3").style.display = "none";
    document.getElementById("aparecer").style.display = "block";
    document.getElementById("botoncopiar").style.display = "block";
    document.getElementById("mensajeprocesado").innerHTML = mensaje;
}

//Funcion copiar
function copiarMensaje(){
    let mensajeProcesado = document.getElementById("mensajeprocesado").innerHTML;
    navigator.clipboard.writeText(mensajeProcesado);
    alert("Mensaje copiado!");
}

// Funcion de mensaje no encontrado
function nohaymensaje(){
    document.getElementById("borrar1").style.display = "show";
    document.getElementById("borrar2").style.display = "initial";
    document.getElementById("borrar3").style.display = "initial";
    document.getElementById("aparecer").style.display = "none";
    document.getElementById("botoncopiar").style.display = "none";
}

// FIN FUNCIONES

// Declaraciones
let cantLetras = 0;
let bandera = false;
let texto = document.getElementById("textarea").value.toLowerCase();
let mensajeProcesado = document.getElementById("mensajeprocesado");
let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let botonCopiar = document.getElementById("botoncopiar");

// Botones
botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;