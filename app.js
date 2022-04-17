var button = document.querySelector("#btn");
var textArea = document.querySelector("#txt-area");
var divOutput = document.querySelector("#div-output");


function translate() {

}

function onButtonClickHandler() {
    divOutput.innerText = textArea.value;
}

button.addEventListener("click", onButtonClickHandler);