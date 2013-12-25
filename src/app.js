// Find content container
var contentDiv = document.getElementById("cnnContentContainer");

// Find the content div for Mexico edition
if (!contentDiv) {
    contentDiv = document.getElementById("contenido");
}

// Fidn the content div for CNN Money
if (!contentDiv) {
    contentDiv = document.getElementById("storycontent");
}

// Add extra sadness
var topHeader = contentDiv.getElementsByTagName("h1");
topHeader[0].innerText = topHeader[0].innerText.concat(" :\/");
