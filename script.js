const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const leyenda = document.querySelector(".leyenda");
const botonCopiar = document.querySelector(".copiar");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    leyenda.textContent = "Tu texto encriptado es:";
    actualizarBotonCopiar(); 
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    leyenda.textContent = "Tu texto desencriptado es:";
    actualizarBotonCopiar(); // Actualiza la visibilidad del botón Copiar
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto() {
    mensaje.select();
    document.execCommand('copy');
}

function actualizarBotonCopiar() {
    if (mensaje.value.trim() === "") {
        botonCopiar.style.display = "none"; 
    } else {
        botonCopiar.style.display = "block"; 
    }
}

document.addEventListener("DOMContentLoaded", actualizarBotonCopiar);
