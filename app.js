function addText(id, text){
    let elementoHTML=document.getElementById(id)
    elementoHTML.innerHTML=text;
    return;
}

function encryptor(){
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let element=document.getElementById("text_area").value;
    let text_transform=element.replace(/[eioua]/g, letra => rules[letra]);
    addText("text_transform", text_transform)
    return;
}

function decrypt() {
    const reglas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let element=document.getElementById("text_area").value;
    let text_transform=element.replace(/enter|imes|ai|ober|ufat/g, palabra => reglas[palabra]);
    addText("text_transform", text_transform)
    return;
}

function disableButtons() {
    const text = document.getElementById("text_area").value;
    const encryptButton = document.getElementById("encrypt");
    const decryptButton = document.getElementById("decrypt");

    if (text.length > 0) {
        encryptButton.disabled = false;
        decryptButton.disabled = false;
    } else {
        encryptButton.disabled = true;
        decryptButton.disabled = true;
    }
}

function copyText() {

    const textCopy = document.getElementById("text_transform").textContent;
    const textArea=document.getElementById("text_area");
    textArea.value=textCopy;
    return;
}

document.getElementById("text_area").addEventListener("input", disableButtons);

disableButtons();


addText("text_transform", "Agrega un texto")