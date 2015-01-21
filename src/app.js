/*
 * This is the old style CNN site, first find the content container
 * then find the headline element
 */
var contentDiv = document.getElementById("cnnContentContainer");

// Find the content div for Mexico edition
if (!contentDiv) {
    contentDiv = document.getElementById("contenido");
}

// Find the content div for CNN Money
if (!contentDiv) {
    contentDiv = document.getElementById("storycontent");
}

var headlineElement;

if (contentDiv) {
    headlineElement = contentDiv.getElementsByTagName("h1");
} else {
    // The new style CNN site
    headlineElement = document.getElementsByClassName("pg-headline");
}

// Add extra sadness
headlineElement[0].innerText = headlineElement[0].innerText.concat(" :\/");

