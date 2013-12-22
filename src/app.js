// Find content container
var contentDiv = document.getElementById("cnnContentContainer");

// Mexico edition uses a different DOM for content
if (!contentDiv) {
    contentDiv = document.getElementById("contenido");
}

// Add extra sadness
var topHeader = contentDiv.getElementsByTagName("h1");
topHeader[0].innerText = topHeader[0].innerText.concat(" :\/");
