var btnTranslate=document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");

var outputDiv=document.querySelector("#out")

var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslatedUrl(text){
    return serverUrl+"?"+"text"+text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server");
}

function clickEventHandler(){
    var inputText=txtInput.value;

    fetch(getTranslatedUrl(inputText))
     .then(Response => Response.json())
     .then(json => console.log(json.contents.translated))
     .catch(errorHandler);
};

btnTranslate.addEventListener("click",clickEventHandler);
