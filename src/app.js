var currentLocation = document.URL;
var headlineElement;

if (currentLocation.indexOf("cnn") > -1) {
    // Old style
    var contentDiv = document.getElementById("cnnContentContainer");

    // Mexico
    if (!contentDiv) {
        contentDiv = document.getElementById("contenido");
    }

    if (contentDiv) {
        headlineElement = contentDiv.getElementsByTagName("h1");
    } else {
        // New style
        headlineElement = document.getElementsByClassName("pg-headline");

        // Money
        if (headlineElement.length < 1) {
            headlineElement = document.getElementsByClassName("article-title");
        }
    }
}
else if (currentLocation.indexOf("bbc") > -1) {
    headlineElement = document.getElementsByClassName("story-header");
}

// Add extra sadness
headlineElement[0].innerText = headlineElement[0].innerText.concat(" :\/");
