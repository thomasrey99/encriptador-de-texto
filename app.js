function addText(id, text){
    let elementoHTML=document.getElementById(id)
    elementoHTML.innerHTML=text;
    return;
}

function validation() {
    let textArea = document.getElementById("text_area");
    textArea.value = textArea.value
                .toUpperCase()
                .replace(/[^A-Z\s]/g, ''); 
}

function encryptor(){
    const rules = {
        'E': 'ENTER',
        'I': 'IMES',
        'A': 'AI',
        'O': 'OBER',
        'U': 'UFAT'
    };
    let textarea = document.getElementById("text_area");
    let element=document.getElementById("text_area").value;
    let imgElement=document.getElementById("img_empty")
    if (imgElement) {
        imgElement.remove();
    }
    let text_transform=element.replace(/[EIOUA]/g, letter => rules[letter]);
    addText("text_transform", text_transform);
    textarea.value="";
    disableButtons()
    return;
}

function decrypt() {
    const rules = {
        'ENTER': 'E',
        'IMES': 'I',
        'AI': 'A',
        'OBER': 'O',
        'UFAT': 'U'
    };
    let textarea = document.getElementById("text_area");
    let element=document.getElementById("text_area").value;
    let text_transform=element.replace(/ENTER|IMES|AI|OBER|UFAT/g, word => rules[word]);
    addText("text_transform", text_transform);
    textarea.value="";
    disableButtons()
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
    return;
}

function copyText() {

    const textCopy = document.getElementById("text_transform").textContent;
    const textArea=document.getElementById("text_area");
    textArea.value=textCopy;
    disableButtons()
    return;
}

document.getElementById("text_area").addEventListener("input", disableButtons);

document.getElementById("text_area").addEventListener("input", function() {
    validation();
    disableButtons();
});

disableButtons();


addText("text_transform", "No se encontro ningun mensaje")