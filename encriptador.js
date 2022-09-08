const textoIngresado = document.querySelector(".textoIngresado");
const mensajeFinal = document.querySelector(".mensajeFinal");

function botonEncriptar(){
    const textoEncriptado = encriptar(textoIngresado.value);
    mensajeFinal.value = textoEncriptado;
    mensajeFinal.style.backgroundImage = "none";
    textoIngresado.value = ""
}

function encriptar(nuevoTexto){
   let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
   
    for (let indice = 0; indice < codigo.length; indice++) {
       if(nuevoTexto.includes(codigo[indice][0])){
         nuevoTexto = nuevoTexto.replaceAll(codigo[indice][0], codigo[indice][1])
       }
        
    }
    return nuevoTexto;

}

function botonDesencriptar(){
    const textoDensencriptado = desencriptar(textoIngresado.value);
    mensajeFinal.value = textoDensencriptado;
    mensajeFinal.style.backgroundImage = "none";
    textoIngresado.value = ""
}

function desencriptar(textoDensencriptado){
   let codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
   
    for (let indice = 0; indice < codigo.length; indice++) {
       if(textoDensencriptado.includes(codigo[indice][1])){
        textoDensencriptado = textoDensencriptado.replaceAll(codigo[indice][1], codigo[indice][0])
       }
        
    }
    return textoDensencriptado;

}
function copiar(){
    //mensajeFinal.selected();
    navigator.clipboard.writeText(mensajeFinal.value);
    mensajeFinal.value = "";
}