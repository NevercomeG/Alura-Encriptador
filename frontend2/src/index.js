
function encriptar(){

    var texto = document.querySelector("#textodescriptado").value.toLowerCase();
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector("#textoencriptado").value = textoCifrado;
    document.querySelector("#textodescriptado").value = "";



}

function desencriptar (){ 
        var texto = document.querySelector("#textoencriptado").value; 
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        document.querySelector("#textodescriptado").value = textoCifrado; 
        document.querySelector("#textoencriptado").value = "";

}
