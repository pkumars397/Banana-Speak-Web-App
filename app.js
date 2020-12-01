var btnTranslate=document.querySelector("#btn-translate");

var txtButton=document.querySelector("#txt-area");

function clickEventHandler(){
    console.log("clicked");
    console.log("input ",txtButton.value);
}

btnTranslate.addEventListener("click",clickEventHandler);
