function copyTextToClipboard(elementId, successMessage) {
    var textElement = document.getElementById(elementId);
    var textToCopy = textElement.innerText;

    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", textToCopy);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert(successMessage);
}


function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

const body = document.querySelector("body");
const log = document.getElementById("log");
var newTitle = "Text";


function checkDocumentFocus() {
    if (document.hasFocus()) {
        log.textContent = "This document has focus.";
        body.style.background = "white";
        alert("???????")
    } else {
        log.textContent = "This document does not have focus.";
        body.style.background = "gray";
        document.title = newTitle;
    }
}