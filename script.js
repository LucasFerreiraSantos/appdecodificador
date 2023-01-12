var textInput = document.querySelector("#input-text");
var output = document.querySelector("#output-content");

function criptografar() {
    var texto = textInput.value;

    var resultCriptografia = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai").replace(/u/g, "ufat");

    document.getElementById('output-content').innerHTML = '<textarea readonly id="input-text">' + resultCriptografia + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiarTexto()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescriptografia = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ai/g, "a").replace(/ufat/g, "u");

    document.getElementById('output-content').innerHTML = '<textarea readonly id="input-text">' + resultDescriptografia + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiarTexto()">Copiar</button>';
}

function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById('input-text')).then(() => {
        alert("Texto copiado")
    })
}