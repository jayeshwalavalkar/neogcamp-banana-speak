var button = document.querySelector("#btn");
var textArea = document.querySelector("#txt-area");
var divOutput = document.querySelector("#div-output");

var translateApiUrl = "https://api.funtranslations.com/translate/minion.json";

function getTransplateApi(text) {
  return translateApiUrl + "?text=" + text;
}

function errorHandler(error) {
  console.log("Error received from translate api" + error);
}

function onButtonClickHandler() {
  fetch(getTransplateApi(textArea.value))
    .then((response) => response.json())
    .then((json) => (divOutput.innerText = json.contents.translated))
    .catch(errorHandler);
}

button.addEventListener("click", onButtonClickHandler);
