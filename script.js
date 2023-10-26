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

function checkNavigation(target) {
    // Kiểm tra nếu URL hiện tại là trang gốc (index.html)
    if (window.location.href.endsWith("/index.html")) {
        // Không thực hiện điều hướng và hiển thị thông báo (hoặc thực hiện hành động khác)
        alert("You are already on the home page.");
        event.preventDefault(); // Ngăn chặn sự kiện điều hướng mặc định
    }
}