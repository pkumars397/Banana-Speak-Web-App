var btnTranslate=document.querySelector("#btn-translate");

var txtButton=document.querySelector("#txt-area");

var outputDiv=document.querySelector("#out")

function clickEventHandler(){
  outputDiv.innerText="prahsantl"+txtButton.value;
}

btnTranslate.addEventListener("click",clickEventHandler);
