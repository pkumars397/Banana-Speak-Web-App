var btnTranslate=document.querySelector("#btn-translate");

var txtInput=document.querySelector("#txt-input");

var outputDiv=document.querySelector("#out")

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslatedUrl(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server");
}

function clickEventHandler(){
    var inputText=txtInput.value;

    fetch(getTranslatedUrl(inputText))
     .then(Response => Response.json())
     .then(json => 
        {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
     .catch(errorHandler);
};

btnTranslate.addEventListener("click",clickEventHandler);
