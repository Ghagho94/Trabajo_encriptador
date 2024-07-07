function encriptar(){
    let texto = document.getElementById ("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let person = document.getElementById("person");

    let textoCifrado = texto
        .replace (/a/gi, "ant")
        .replace (/e/gi, "ess")
        .replace (/i/gi, "iq")
        .replace (/o/gi, "olr")
        .replace (/u/gi, "um");

    if(texto.length !=0){
        document.getElementById ("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        person.src ="./img/encriptado.png";
    }else{
        person.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese texto a encriptar o desencriptar";
        alert("Debe ingresar un texto");
    }   
 }

 function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let person = document.getElementById("person");

    let textoCifrado = texto
        .replace (/ant/gi, "a")
        .replace (/ess/gi, "e")
        .replace (/iq/gi, "i")
        .replace (/olr/gi, "o")
        .replace (/um/gi, "u");

        if (texto.length !=0) {
            document.getElementById ("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            person.src ="./img/desencriptado.jpg";
        }else{
        person.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese texto a encriptar o desencriptar";
        alert("Debe ingresar un texto");}
 }