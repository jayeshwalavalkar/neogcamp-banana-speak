var button = document.querySelector("#btn");
var textArea = document.querySelector("#txt-area");

button.addEventListener("click", onButtonClickHandler);

function onButtonClickHandler() {
    console.log(textArea.value);
}