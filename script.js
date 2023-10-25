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